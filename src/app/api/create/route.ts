import { abacatePay, redis, supabase } from "@/services/clients";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  const {
    firstName,
    lastName,
    email,
    message,
    imageUrl,
    date,
    moonPhase,
    slug,
    paymentId,
  } = await req.json();

  const payments = await abacatePay.get("billing/list");

  console.log(payments.data.data);

  const payment = payments.data.data.find((payment: any) => payment.id === paymentId);

  if (!payment) {
    redis.del(slug);

    return NextResponse.json("Pagamento não encontrado", {status: 404});
  }

  if(payment.status !== "PAID"){
    redis.del(slug);

    return NextResponse.json("Pagamento não foi aprovado", {status: 400});
  }

  const { data, error } = await supabase.from("Page").insert({
    firstName,
    lastName,
    email,
    message,
    moonImage: moonPhase.imageUrl,
    coupleImage: imageUrl,
    date,
    slug,
  }).select("*");

  if(error){
    console.error(error);
    return NextResponse.json("Erro ao salvar os dados", {status: 500});
  }

  console.log(data);

  redis.del(slug);

  return NextResponse.json({url: `http://localhost:3000/${slug}`}, {status: 200})
}