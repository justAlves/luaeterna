import {redis, supabase } from "@/services/clients";
import { NextResponse } from "next/server";
import QRCode from "qrcode";
import Brevo from "@playt/brevo";

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
  } = await req.json();

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

  const qrcodeBuffer = await QRCode.toBuffer(`https://www.luaeterna.com.br/${slug}`, { type: 'png' });

  const brevo = new Brevo({
    headers: {
      "api-key": process.env.BREVO_KEY!,
    }
  })

  await brevo.smtp.sendTransacEmail({
    subject: "Oba! Sua Lua Eterna foi criada! 🌙",
    sender: {
      name: "Lua Eterna",
      email: "contato@luaeterna.com.br"
    },
    to: [{
      name: firstName,
      email: email
    }],
    htmlContent:  `
    <div style="background-color: #f9f9f9; padding: 20px; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">        
        <h1 style="color: #2d3748; text-align: center; margin-bottom: 30px;">Sua Lua Eterna foi criada! 🌙</h1>
        
        <p style="color: #4a5568; line-height: 1.6; margin-bottom: 20px; text-align: center;">
          Preparamos sua página especial com todo carinho e emoção para eternizar esse momento único.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.luaeterna.com.br/${slug}" 
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
  attachment: [{
    content: qrcodeBuffer.toString('base64'),
    name: 'qrcode.png',
  }]
  })

  return NextResponse.json({url: `https://www.luaeterna.com.br/${slug}`}, {status: 200})
}