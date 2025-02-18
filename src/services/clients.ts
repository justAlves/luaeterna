import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";
import { Redis } from "@upstash/redis";
import axios from "axios";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_SECRET!,
})

const authstring = btoa(`${process.env.NEXT_PUBLIC_ASTRONOMY_CLIENT!}:${process.env.NEXT_PUBLIC_ASTRONOMY_SECRET!}`)

export const abacatePay = axios.create({
  baseURL: "https://api.abacatepay.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.ABACATE_PAY_SECRET}`
  }
})

export const astronomy = axios.create({
  baseURL: "https://api.astronomyapi.com/api/v2/studio",
  headers: {
    Authorization: `Basic ${authstring}`
  }
})