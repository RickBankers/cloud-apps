/*
  Warnings:

  - A unique constraint covering the columns `[app_name]` on the table `Record` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Record_app_name_key" ON "Record"("app_name");
