// app/api/records/create/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();

  try {
    const newRecord = await prisma.record.create({
      data,
    });

    return NextResponse.json(newRecord);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create record' }, { status: 500 });
  }
}
