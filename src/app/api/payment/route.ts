import { NextResponse } from "next/server";

export async function POST(req: Request){
  const json = await req.json();

  console.log("Requisição de pagamento recebida:", json);

  return NextResponse.json({ status: 201, json });
}