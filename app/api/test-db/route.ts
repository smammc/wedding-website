import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    await client.db("admin").command({ ping: 1 });
    return NextResponse.json({ message: "Conexão bem-sucedida!" });
  } catch (error) {
    return NextResponse.json({ error: "Erro na conexão" }, { status: 500 });
  }
}