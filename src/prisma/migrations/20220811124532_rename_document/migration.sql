/*
  Warnings:

  - You are about to drop the column `Document` on the `ExamResult` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ExamResult" DROP COLUMN "Document",
ADD COLUMN     "document" TEXT;
