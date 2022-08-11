/*
  Warnings:

  - You are about to drop the column `interfering` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `relatedExams` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `synonymy` on the `Exam` table. All the data in the column will be lost.
  - Added the required column `measureUnit` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "interfering",
DROP COLUMN "relatedExams",
DROP COLUMN "synonymy",
ADD COLUMN     "interferer" TEXT,
ADD COLUMN     "measureUnit" TEXT NOT NULL,
ADD COLUMN     "synonym" TEXT;

-- AlterTable
ALTER TABLE "ExamSolicitation" ADD COLUMN     "requestDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
