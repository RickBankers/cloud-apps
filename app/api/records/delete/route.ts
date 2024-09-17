// app/api/records/delete/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    const deletedRecord = await prisma.record.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedRecord);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete record' }, { status: 500 });
  }
}
