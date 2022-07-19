/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ExamInfo` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ExamInfo` table. All the data in the column will be lost.
  - You are about to drop the column `bithDate` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `sex` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ExamInfo" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bithDate",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "sex",
ADD COLUMN     "sex" "SexEnum" NOT NULL;
