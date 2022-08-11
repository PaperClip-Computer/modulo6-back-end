/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `examInfoId` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `realizationDate` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `result` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `resultDate` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `bloodTypeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `medicalHistoryId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Allergy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BloodType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExamInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicalHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Medicine` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Exam` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Allergy" DROP CONSTRAINT "Allergy_userId_fkey";

-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_examInfoId_fkey";

-- DropForeignKey
ALTER TABLE "MedicalHistory" DROP CONSTRAINT "MedicalHistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "Medicine" DROP CONSTRAINT "Medicine_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_bloodTypeId_fkey";

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "createdAt",
DROP COLUMN "examInfoId",
DROP COLUMN "realizationDate",
DROP COLUMN "result",
DROP COLUMN "resultDate",
DROP COLUMN "updatedAt",
ADD COLUMN     "conservation" TEXT,
ADD COLUMN     "interfering" TEXT,
ADD COLUMN     "interpretation" TEXT,
ADD COLUMN     "material" TEXT,
ADD COLUMN     "method" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "normalValues" TEXT,
ADD COLUMN     "preparation" TEXT,
ADD COLUMN     "relatedExams" TEXT,
ADD COLUMN     "synonymy" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bloodTypeId",
DROP COLUMN "medicalHistoryId",
ADD COLUMN     "allergies" TEXT[],
ADD COLUMN     "bloodType" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "doctorId" INTEGER NOT NULL,
ADD COLUMN     "medicalHistory" TEXT[],
ADD COLUMN     "medicines" TEXT[];

-- DropTable
DROP TABLE "Allergy";

-- DropTable
DROP TABLE "BloodType";

-- DropTable
DROP TABLE "ExamInfo";

-- DropTable
DROP TABLE "MedicalHistory";

-- DropTable
DROP TABLE "Medicine";

-- DropEnum
DROP TYPE "BloodTypeEnum";

-- DropEnum
DROP TYPE "BloodTypeRhEnum";

-- CreateTable
CREATE TABLE "ExamResult" (
    "id" SERIAL NOT NULL,
    "measureDate" TIMESTAMP(3),
    "resultDate" TIMESTAMP(3),
    "result" TEXT,
    "examInfoId" INTEGER NOT NULL,
    "examSolicitationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExamResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExamResult_examSolicitationId_key" ON "ExamResult"("examSolicitationId");

-- CreateIndex
CREATE UNIQUE INDEX "Exam_name_key" ON "Exam"("name");

-- CreateIndex
CREATE INDEX "Exam_name_idx" ON "Exam"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE INDEX "User_cpf_name_idx" ON "User"("cpf", "name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamResult" ADD CONSTRAINT "ExamResult_examInfoId_fkey" FOREIGN KEY ("examInfoId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamResult" ADD CONSTRAINT "ExamResult_examSolicitationId_fkey" FOREIGN KEY ("examSolicitationId") REFERENCES "ExamSolicitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
