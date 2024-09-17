// app/api/records/read/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      const record = await prisma.record.findUnique({
        where: { id: Number(id) },
      });
      return NextResponse.json(record);
    } else {
      const records = await prisma.record.findMany();
      return NextResponse.json(records);
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch records' }, { status: 500 });
  }
}
