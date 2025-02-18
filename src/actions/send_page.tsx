// actions/contact.ts
"use server";

export async function createPayment(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const image = formData.get("image") as File;
  const date = formData.get("date") as string;
  const moonPhase = formData.get("moonPhase") as string;

  // Aqui você pode salvar no banco de dados, enviar email, etc.
  console.log("Novo contato:", { 
    firstName, 
    lastName, 
    email, 
    message, 
    image, 
    date,
    moonPhase
  });

  fetch("http://localhost:3000/api/payment", {
    method: "POST",
    body: JSON.stringify({ 
      firstName, 
      lastName, 
      email, 
      message, 
      image, 
      date,
      moonPhase
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return
}