/*
  Warnings:

  - You are about to drop the column `examInfoId` on the `ExamResult` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExamResult" DROP CONSTRAINT "ExamResult_examInfoId_fkey";

-- AlterTable
ALTER TABLE "ExamResult" DROP COLUMN "examInfoId";
