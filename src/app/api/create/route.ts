import { abacatePay, mailgun, redis, supabase } from "@/services/clients";
import { NextResponse } from "next/server";
import QRCode from "qrcode";

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

  const payment = payments.data.data.find((payment: Bill) => payment.id === paymentId);

  if (!payment) {
    redis.del(slug);

    return NextResponse.json("Pagamento não encontrado", {status: 404});
  }

  if(payment.status !== "PAID"){
    redis.del(slug);

    return NextResponse.json("Pagamento não foi aprovado", {status: 400});
  }

  const { error } = await supabase.from("Page").insert({
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

  redis.del(slug);

  const qrcodeBuffer = await QRCode.toBuffer(`https://luaeterna.com.br/${slug}`, { type: 'png' });

  await mailgun.messages.create('luaeterna.com.br', {
    from: 'Lua Eterna - não responda <contato@luaeterna.com.br>',
    to: email,
    subject: 'Oba! Sua Lua Eterna foi criada!',
    html: `
      <div style="background-color: #f9f9f9; padding: 20px; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <img src="https://luaeterna.com.br/logo.svg" alt="Lua Eterna" style="display: block; margin: 0 auto; width: 150px; margin-bottom: 20px;">
          
          <h1 style="color: #2d3748; text-align: center; margin-bottom: 30px;">Sua Lua Eterna foi criada! 🌙</h1>
          
          <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px; text-align: center;">
            Preparamos sua página especial com todo carinho e emoção para eternizar esse momento único.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://luaeterna.com.br/${slug}" 
               style="background-color: #4a5568; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Acessar minha Lua Eterna
            </a>
          </div>

          <p style="color: #4a5568; text-align: center; margin-bottom: 20px;">
            Você também pode acessar escaneando o QR Code no anexo deste email.
          </p>
          
          <div style="text-align: center; color: #718096; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p>Com carinho,<br>Equipe Lua Eterna</p>
          </div>
        </div>
      </div>
    `,
    inline: [{
      data: qrcodeBuffer,
      filename: 'qrcode.png',
      contentType: 'image/png',
      contentDisposition: 'inline',
      cid: 'qrcode'
    }]
  });

  return NextResponse.json({url: `https://luaeterna.com.br/${slug}`}, {status: 200})
}