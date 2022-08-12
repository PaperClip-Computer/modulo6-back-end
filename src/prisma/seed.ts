import { PrismaClient } from '@prisma/client'
import dummyData from '../dummy_data'

const prisma = new PrismaClient()

const doctorSeed = async () => {
  await prisma.doctor.createMany({ data: dummyData.doctorDummy, skipDuplicates: true })
}

const userSeed = async () => {
  await prisma.user.createMany({
    data: dummyData.userDummy,
    skipDuplicates: true,
  })
}

const examSeed = async () => {
  await prisma.exam.createMany({ data: dummyData.examDummy, skipDuplicates: true })
}

const examSolicitationSeed = async () => {
  await prisma.examSolicitation.createMany({
    data: dummyData.examSolicitationDummy,
    skipDuplicates: true,
  })
}

const examResultSeed = async () => {
  await prisma.examResult.createMany({ data: dummyData.examResultDummy, skipDuplicates: true })
}

async function main() {
  await doctorSeed()
  await userSeed()
  await examSeed()
  await examSolicitationSeed()
  await examResultSeed()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
