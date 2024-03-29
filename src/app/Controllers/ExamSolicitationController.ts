import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class ExamSolicitationController {
  public async list({ request, response }: HttpContextContract) {
    const { orderBy, filter } = request.qs()
    const res = await prisma.examSolicitation.findMany({ orderBy, where: filter })
    return response.json(res)
  }

  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.examSolicitation.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        exam: true,
        examResult: true,
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.examSolicitation.create({
      data: {
        doctorId: request.input('doctorId'),
        userId: request.input('userId'),
        examId: request.input('examId'),
      },
    })
    return response.json(res)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.examSolicitation.update({
      where: {
        id: Number(id),
      },
      data: {
        examResult: {
          connect: {
            id: request.input('examResultId'),
          },
        },
      },
    })

    return response.json(res)
  }

  public async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.examSolicitation.delete({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }
}
