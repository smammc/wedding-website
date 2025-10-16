import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validação básica
    if (!body.name || !body.attending) {
      return NextResponse.json(
        { error: 'Nome e confirmação são obrigatórios' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('Wedding'); // Nome da base de dados
    const collection = db.collection('Responses'); // Nome da coleção

    // Insere o documento
    const result = await collection.insertOne({
      name: body.name,
      attending: body.attending,
      dietary: body.dietary || '',
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      id: result.insertedId
    });

  } catch (error) {
    console.error('Erro ao guardar RSVP:', error);
    return NextResponse.json(
      { error: 'Erro ao processar o pedido' },
      { status: 500 }
    );
  }
}