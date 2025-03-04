import { Button } from '@/components/ui/button';
import { redis } from '@/services/clients';
import axios from 'axios';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function SuccessPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const paymentData = await redis.get(`${(await params).slug}`);

    if (!paymentData) {
      redirect('/error');
    }
    
    const response = await axios.post(`https://www.luaeterna.com.br/api/create`, {...paymentData, slug: (await params).slug});

    if (!response.data) {
      throw new Error('Falha ao criar a página');
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-16 px-4 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
            Sua Lua Eterna foi criada! 🌙
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Preparamos sua página especial com todo carinho.
          </p>
          <p className="text-md text-gray-500">
            Em alguns minutos você receberá um email com o link e o QrCode para acessar sua Lua Eterna.
          </p>
          <Button
            className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity"
          >
            <Link href={`${response.data.url}`}>
              Acessar a Página
            </Link>
          </Button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Erro:', error);
    redirect('/error');
  }
} 