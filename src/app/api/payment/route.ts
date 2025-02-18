import { abacatePay, redis } from "@/services/clients";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  const {
    firstName,
    lastName,
    email,
    message,
    imageUrl,
    moonPhase,
    slug,
    date,
    phone,
    cpf
  } = await req.json();

  const paymentData = {
    frequency: "ONE_TIME",
    methods: [
      "PIX"
    ],
    products: [
      {
        externalId: "luaeterna-page",
        name: "Página de Casal - LuaEterna",
        description: "Página de Casal criada com o Lua Eterna",
        quantity: 1,
        price: 3500
      }
    ],
    returnUrl: "http://localhost:3000/criar",
    completionUrl: `http://localhost:3000/sucesso/${slug}`,
    customer: {
      name: firstName,
      email,
      cellphone: phone,
      taxId: cpf
    }
  }
  const payment = await abacatePay.post("/billing/create", paymentData);

  
  await redis.set(slug, JSON.stringify({
    firstName,
    lastName,
    email,
    message,
    imageUrl,
    date,
    moonPhase,
    phone,
    cpf,
    paymentId: payment.data.data.id
  }), {ex: 1800});

  return NextResponse.json({url: payment.data.data.url}, {status: 200})
}