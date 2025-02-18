import { createPayment } from "@/actions/send_page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadButton from "@/components/upload_button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-app_secondary p-16">
      <h1
        className="text-3xl font-bold text-app_secondary -mt-24" 
      >
        Crie a Lua Eterna do Seu Amor 🌙
      </h1>
      <p
        className="text-lg text-app_secondary/80 mt-4 w-[700px]"
      >
        Preencha o formulário abaixo para criar uma página personalizada que mostra a fase da lua em uma data especial, como uma forma única e romântica de presentear.
      </p>
      <form 
        action={createPayment}
        className="mt-8 p-4 w-full max-w-[860px] rounded-md shadow-md border border-app_accent flex flex-col gap-4"
      >
        <div className="flex gap-4 w-full">
          <Input
            label="Seu Nome"
            placeholder="Digite seu nome"
            className="w-full"
            name="firstName"
          />
          <Input
            label="Nome do Seu Amor"
            placeholder="Digite o nome do seu amor"
            className="w-full"
            name="lastName"
          />
        </div>
        <Input
          label="Data Especial"
          type="date"
          className="w-full"
          name="date"
        />
        <Textarea
          placeholder="Digite uma mensagem especial, capriche! (obs: não inclua emojis)"
          className="w-full mt-4"
          name="message"
        />
        <UploadButton/>
        <Input
          label="Email para Receber a Lua Eterna"
          type="email"
          placeholder="Digite seu email"
          className="w-full"
          name="email"
        />
        <div
          className="flex justify-end"
        >
          <Button
            type="submit"
          >
            Criar Lua Eterna
          </Button>
        </div>
      </form>
    </div>
  );
}
