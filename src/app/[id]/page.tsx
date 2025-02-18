import { Button } from "@/components/ui/button";
import { supabase } from "@/services/clients";
import { Download, Heart, Share2, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export async function getPage(slug: string){
  const { data, error } = await supabase.from("Page").select("*").eq("slug", slug).single();

  if(error){
    return null;
  }

  console.log(data);

  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const page = await getPage(params.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-16 px-4 md:px-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-100 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-100 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
            {page?.firstName} & {page?.lastName}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Desde {new Date(page?.date).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Moon */}
          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg font-bold">Nossa lua 🌙:</p>
            {/* Moon Placeholder */}
            <div className="w-80 h-80 rounded-full bg-gray-300 shadow-lg overflow-hidden">
              <Image
                src={page?.moonImage}
                alt="Moon Image"
                height={450}
                width={450}
                className="rounded-full scale-150 mt-5"
              />
            </div>
          </div>

          {/* Right Column - Couple Photo and Message */}
          <div className="space-y-8">
            {/* Couple Photo Placeholder */}
            <div className="w-full aspect-square bg-blue-200 rounded-2xl shadow-lg">
              <Image
                src={page?.coupleImage}
                alt="Couple Image"
                height={450}
                width={450}
                className="rounded-2xl h-full w-full object-cover"
              />
            </div>
            
            {/* Message */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-purple-100">
              <p className="text-gray-700 italic">
                &quot;{page?.message}&quot;
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
              <Button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-purple-200">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-purple-100">
            <Heart className="w-4 h-4 text-pink-600" />
            <span className="text-gray-600">Criado com LuaEterna</span>
          </div>
        </div>
      </div>
    </div>
  );
}