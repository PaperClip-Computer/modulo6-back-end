import { PrismaClient } from '@prisma/client'
import dummyData from '../dummy_data'

const prisma = new PrismaClient()

const doctorSeed = async () => {
  await prisma.doctor.createMany({ data: dummyData.doctorDummy })
}

const userSeed = async () => {
  await prisma.user.createMany({
    data: dummyData.userDummy,
  })
}

const examSeed = async () => {
  await prisma.exam.createMany({ data: dummyData.examDummy })
}

const examSolicitationSeed = async () => {
  await prisma.examSolicitation.createMany({ data: dummyData.examSolicitationDummy })
}

const examResultSeed = async () => {
  await prisma.examResult.createMany({ data: dummyData.examResultDummy })
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
