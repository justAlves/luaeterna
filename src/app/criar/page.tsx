import { createPayment } from "@/actions/send_page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadButton from "@/components/upload_button";
import { Calendar, Heart, Mail, MessageCircle, Moon, Upload, User, Users } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-16 px-4 md:px-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-100 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-100 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Moon className="w-8 h-8 text-purple-600" />
            <Heart className="w-6 h-6 text-pink-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
            Crie a Lua Eterna do Seu Amor 🌙
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo para criar uma página personalizada que mostra a fase da lua em uma data especial, como uma forma única e romântica de presentear.
          </p>
        </div>

        <form 
          action={createPayment}
          className="space-y-8 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <User className="w-4 h-4 text-purple-600" />
                Seu Nome
              </label>
              <Input
                placeholder="Digite seu nome"
                className="w-full border-purple-100 focus:border-purple-300 focus:ring-purple-200"
                name="firstName"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Users className="w-4 h-4 text-pink-600" />
                Nome do Seu Amor
              </label>
              <Input
                placeholder="Digite o nome do seu amor"
                className="w-full border-purple-100 focus:border-purple-300 focus:ring-purple-200"
                name="lastName"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Calendar className="w-4 h-4 text-purple-600" />
              Data Especial
            </label>
            <Input
              type="date"
              className="w-full border-purple-100 focus:border-purple-300 focus:ring-purple-200"
              name="date"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <MessageCircle className="w-4 h-4 text-pink-600" />
              Mensagem Especial
            </label>
            <Textarea
              placeholder="Escreva uma mensagem romântica para seu amor... (obs: não inclua emojis)"
              className="w-full min-h-[150px] border-purple-100 focus:border-purple-300 focus:ring-purple-200"
              name="message"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Upload className="w-4 h-4 text-purple-600" />
              Foto do Casal
            </label>
            <UploadButton />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4 text-pink-600" />
              Email para Receber a Lua Eterna
            </label>
            <Input
              type="email"
              placeholder="Digite seu melhor email"
              className="w-full border-purple-100 focus:border-purple-300 focus:ring-purple-200"
              name="email"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity"
            >
              Criar Lua Eterna
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
