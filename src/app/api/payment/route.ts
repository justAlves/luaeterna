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
    name: "Página LuaEterna",
    description: "Página LuaEterna",
    value: 25.00,
    billingType: "PIX",
    chargeType: "DETACHED",
    dueDateLimitDays: 1,
    callback: {successUrl: 'https://luaeterna.com.br/success/' + slug}
  }
  const payment = await abacatePay.post("/paymentLinks", paymentData);

  
  await redis.set(slug, JSON.stringify({
    firstName,
    lastName,
    email,
    message,
    imageUrl,
    date,
    moonPhase,
    phone,
    cpf
  }), {ex: 1800});

  return NextResponse.json({url: payment.data.url}, {status: 200})
}