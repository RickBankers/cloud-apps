// app/api/records/update/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: Request) {
  const { id, data } = await request.json();

  try {
    const updatedRecord = await prisma.record.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json(updatedRecord);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update record' }, { status: 500 });
  }
}
