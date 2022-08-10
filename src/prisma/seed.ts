import { PrismaClient } from '@prisma/client'
import * as dummyData from '../dummy_data'

const prisma = new PrismaClient()

const doctorSeed = async () => {
  await prisma.doctor.createMany({ data: dummyData.doctorDummy })
}

const bloodTypeSeed = async () => {
  await prisma.bloodType.createMany({ data: dummyData.bloodTypeDummy })
}

const userSeed = async () => {
  await prisma.user.createMany({
    data: dummyData.userDummy,
  })
}

const examInfoSeed = async () => {
  await prisma.examInfo.createMany({ data: dummyData.examInfoDummy })
}

const allergySeed = async () => {
  await prisma.allergy.createMany({ data: dummyData.allergyDummy })
}

const medicalHistorySeed = async () => {
  await prisma.medicalHistory.createMany({ data: dummyData.medicalHistoryDummy })
}

const medicineSeed = async () => {
  await prisma.medicine.createMany({ data: dummyData.medicineDummy })
}

const examSeed = async () => {
  await prisma.exam.createMany({ data: dummyData.examDummy })
}

const examSolicitationSeed = async () => {
  await prisma.examSolicitation.createMany({ data: dummyData.examSolicitationDummy })
}

async function main() {
  await doctorSeed()
  await bloodTypeSeed()
  await userSeed()
  await examInfoSeed()
  await allergySeed()
  await medicalHistorySeed()
  await medicineSeed()
  await examSeed()
  await examSolicitationSeed()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
