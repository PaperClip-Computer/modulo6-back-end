/*
  Warnings:

  - Changed the type of `bloodType` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BloodTypeEnum" AS ENUM ('A_PLUS', 'A_MINUS', 'B_PLUS', 'B_MINUS', 'AB_PLUS', 'AB_MINUS', 'O_PLUS', 'O_MINUS');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "bloodType",
ADD COLUMN     "bloodType" "BloodTypeEnum" NOT NULL;
