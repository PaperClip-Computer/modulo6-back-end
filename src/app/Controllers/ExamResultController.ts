import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class ExamController {
  public async list({ request, response }: HttpContextContract) {
    const { orderBy, filter } = request.qs()
    const res = await prisma.examResult.findMany({ orderBy, where: filter })
    return response.json(res)
  }

  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.examResult.findUnique({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.examResult.create({
      data: {
        measureDate: request.input('measureDate'),
        resultDate: request.input('resultDate'),
        result: request.input('result'),
        examSolicitationId: request.input('examSolicitationId'),
      },
    })
    return response.json(res)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.examResult.update({
      where: {
        id: Number(id),
      },
      data: {
        measureDate: request.input('measureDate'),
        resultDate: request.input('resultDate'),
        result: request.input('result'),
        examSolicitationId: request.input('examSolicitationId'),
      },
    })

    return response.json(res)
  }

  public async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.examResult.delete({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }
}
