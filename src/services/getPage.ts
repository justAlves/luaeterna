import { supabase } from "./clients";

export async function getPage(slug: string){
  const { data, error } = await supabase.from("Page").select("*").eq("slug", slug).single();

  if(error){
    return null;
  }

  console.log(data);

  return data;
}