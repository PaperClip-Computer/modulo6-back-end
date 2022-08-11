import { Prisma } from '@prisma/client'

export default [
  {
    doctorId: 1,
    userId: 1,
    examId: 1,
  },
  {
    doctorId: 1,
    userId: 1,
    examId: 3,
  },
  {
    doctorId: 1,
    userId: 2,
    examId: 5,
  },
  {
    doctorId: 2,
    userId: 3,
    examId: 1,
  },
  {
    doctorId: 2,
    userId: 3,
    examId: 2,
  },
  {
    doctorId: 1,
    userId: 3,
    examId: 3,
  },
  {
    doctorId: 1,
    userId: 3,
    examId: 3,
  },
  {
    doctorId: 1,
    userId: 3,
    examId: 3,
  },
  {
    doctorId: 2,
    userId: 3,
    examId: 4,
  },
  {
    doctorId: 2,
    userId: 3,
    examId: 5,
  },
] as Prisma.ExamSolicitationCreateManyInput[]
