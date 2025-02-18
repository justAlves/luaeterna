import { Button } from "@/components/ui/button";
import { Moon, Stars, Heart, Gift, Calendar, Sparkles, Music, Share2, Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-app_secondary relative overflow-hidden bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-100 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 -mt-24 gap-12">
        <div className="max-w-2xl text-center lg:text-left relative z-10">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <Moon className="w-8 h-8 text-purple-600" />
            <Stars className="w-6 h-6 text-pink-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
            Um amor eterno, refletido na lua
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Reviva a fase da lua de um dia especial e eternize seu amor com uma página personalizada.
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Escolha uma data especial e veja como a lua iluminou aquele momento!
          </p>
          <Link href="/criar">
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity">
              Criar minha LuaEterna
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="w-full max-w-[500px] h-[500px] bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50"></div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="px-4 md:px-16 py-20 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
          Como Funciona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Escolha a Data</h3>
            <p className="text-gray-600">O dia em que se conheceram, um aniversário ou qualquer momento especial.</p>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Moon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Geramos a Lua</h3>
            <p className="text-gray-600">Descubra como a lua estava naquela noite mágica.</p>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalize</h3>
            <p className="text-gray-600">Adicione mensagene e fotos</p>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Presenteie</h3>
            <p className="text-gray-600">Envie a página para quem você ama ou compartilhe um QR Code!</p>
          </div>
        </div>
      </section>

      {/* Por que LuaEterna */}
      <section className="bg-gradient-to-b from-white/50 to-transparent px-4 md:px-16 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
          Por que LuaEterna?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
            <Gift className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Um presente exclusivo</h3>
            <p className="text-gray-600">Nada de presentes comuns, aqui você cria algo único.</p>
          </div>
          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
            <Clock className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simples e rápido</h3>
            <p className="text-gray-600">Em poucos minutos, sua página está pronta.</p>
          </div>
          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
            <Heart className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emocionante e memorável</h3>
            <p className="text-gray-600">Quem não se encantaria ao ver a lua do seu dia especial?</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-900 to-pink-900 text-white px-4 md:px-16 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars-pattern.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Eternize seu momento especial agora!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Não deixe essa lembrança se perder no tempo.</p>
          <Link href="/criar">
            <Button className="text-lg px-8 py-6 bg-white hover:bg-gray-100 text-gray-900">
              Criar minha LuaEterna
              <Moon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
