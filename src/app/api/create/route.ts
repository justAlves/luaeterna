import { abacatePay, redis, supabase } from "@/services/clients";
import { NextResponse } from "next/server";

interface Product {
  id: string;
  externalId: string;
  quantity: number;
}

interface CustomerMetadata {
  name: string;
  cellphone: string;
  taxId: string;
  email: string;
}

interface Customer {
  id: string;
  metadata: CustomerMetadata;
}

interface Metadata {
  fee: number;
  returnUrl: string;
  completionUrl: string;
}

interface Bill {
  id: string;
  frequency: "ONE_TIME" | "RECURRING";
  url: string;
  amount: number;
  status: "PAID" | "PENDING" | "CANCELLED";
  devMode: boolean;
  methods: string[];
  products: Product[];
  customer: Customer;
  metadata: Metadata;
  nextBilling: string | null;
  createdAt: string;
  updatedAt: string;
}


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

  const payment = payments.data.data.find((payment: Bill) => payment.id === paymentId);

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