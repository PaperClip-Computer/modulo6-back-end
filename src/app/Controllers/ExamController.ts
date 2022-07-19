import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class ExamController {
  public async list({ request, response }: HttpContextContract) {
    const res = await prisma.exam.findMany()
    return response.json(res)
  }

  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.exam.findUnique({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.exam.create({
      data: {
        realizationDate: request.input('realizationDate'),
        resultDate: request.input('resultDate'),
        result: request.input('result'),
        examInfoId: request.input('examInfoId'),
      },
    })
    return response.json(res)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.exam.update({
      where: {
        id: Number(id),
      },
      data: {
        realizationDate: request.input('realizationDate'),
        resultDate: request.input('resultDate'),
        result: request.input('result'),
        examInfoId: request.input('examInfoId'),
      },
    })

    return response.json(res)
  }

  public async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.exam.delete({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }
}
