/*
  Warnings:

  - You are about to drop the column `proj_status` on the `Record` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Record" DROP COLUMN "proj_status",
ADD COLUMN     "project_status" TEXT NOT NULL DEFAULT 'submitted';
