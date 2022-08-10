import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class ExamInfoController {
  public async list({ request, response }: HttpContextContract) {
    const { orderBy, filter } = request.qs()
    const res = await prisma.examInfo.findMany({ orderBy, where: filter })
    return response.json(res)
  }

  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.examInfo.findUnique({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.examInfo.create({
      data: {
        name: request.input('name'),
        synonymy: request.input('synonymy'),
        material: request.input('material'),
        conservation: request.input('conservation'),
        preparation: request.input('preparation'),
        method: request.input('method'),
        interfering: request.input('interfering'),
        normalValues: request.input('normalValues'),
        interpretation: request.input('interpretation'),
        relatedExams: request.input('relatedExams'),
      },
    })
    return response.json(res)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const res = await prisma.examInfo.update({
      where: {
        id: Number(id),
      },
      data: {
        synonymy: request.input('synonymy'),
        material: request.input('material'),
        conservation: request.input('conservation'),
        preparation: request.input('preparation'),
        method: request.input('method'),
        interfering: request.input('interfering'),
        normalValues: request.input('normalValues'),
        interpretation: request.input('interpretation'),
        relatedExams: request.input('relatedExams'),
      },
    })
    return response.json(res)
  }

  public async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.examInfo.delete({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }
}
