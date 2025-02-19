import Link from 'next/link'

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Ops! Tivemos um pequeno contratempo 🌙
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Parece que houve um problema ao processar seu pagamento.
            Às vezes as estrelas não se alinham de primeira, mas não se preocupe!
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <p className="text-md text-gray-500">
            Você pode tentar novamente clicando no botão abaixo.
            Se precisar de ajuda, estamos aqui para te auxiliar nessa jornada.
          </p>
          
          <div className="mt-6">
            <Link
              href="/"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Voltar e tentar novamente
            </Link>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            Se preferir, entre em contato conosco através do email{' '}
            <a href="mailto:suporte@luaeterna.com.br" className="text-gray-600 hover:text-gray-800">
              suporte@luaeterna.com.br
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
