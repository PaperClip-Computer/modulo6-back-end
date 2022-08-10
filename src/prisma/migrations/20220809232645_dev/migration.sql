/*
  Warnings:

  - Added the required column `name` to the `ExamInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamInfo" ADD COLUMN     "name" TEXT NOT NULL;
