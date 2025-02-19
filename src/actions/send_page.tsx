import { astronomy, supabase } from "@/services/clients";
import axios from "axios";
import slugify from "slugify";

async function uploadFile(file: File) {
  const { data, error } = await supabase.storage.from("uploads").upload(file.name, file);

  if (error) {
    console.error("Erro ao fazer upload do arquivo:", error);
    throw error;
  }

  return data;
}

export async function createPayment(formData: FormData): Promise<string> {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const image = formData.get("image") as File;
  const date = formData.get("date") as string;
  const phone = formData.get("phone") as string;
  const cpf = formData.get("cpf") as string;

  const data = {
    style: {
      moonStyle: "default",
      backgroundStyle: "stars",
      backgroundColor: "#FFFFFF",
      headingColor: "#ffffff",
      textColor: "#ffffff",
    },
    observer: {
      latitude: -10.000,
      longitude: -55.000,
      date: date,
    },
    view: {
      type: "portrait-simple",
      parameters: {},
    },
  };
  

  const moonPhase = await astronomy.post("/moon-phase", data);
  const supabaseImage = await uploadFile(image);
  const pathSplited = supabaseImage.fullPath.split("/");
  const imageUrl = `https://tieafcjteebgebgmknsi.supabase.co/storage/v1/object/public/${pathSplited[0]}//${pathSplited[1]}`;
  const slug = slugify(`${firstName}-${lastName}-${date}`, { lower: true });

  const response = await axios.post("https://www.luaeterna.com.br/api/payment", {
    firstName,
    lastName,
    email,
    message,
    imageUrl,
    date,
    moonPhase: moonPhase.data.data,
    slug,
    phone,
    cpf,
  })

  return response.data.url;
}