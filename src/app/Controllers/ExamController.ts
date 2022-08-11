import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class ExamController {
  public async list({ request, response }: HttpContextContract) {
    const { orderBy, filter } = request.qs()
    const res = await prisma.exam.findMany({ orderBy, where: filter })
    return response.json(res)
  }

  public async get({ request, response }: HttpContextContract) {
    const { id: name } = request.params()

    const res = await prisma.exam.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.exam.create({
      data: {
        synonym: request.input('synonym'),
        material: request.input('material'),
        conservation: request.input('conservation'),
        preparation: request.input('preparation'),
        method: request.input('method'),
        interferer: request.input('interferer'),
        normalValues: request.input('normalValues'),
        interpretation: request.input('interpretation'),
        measureUnit: request.input('measureUnit'),
        name: request.input('name'),
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
        synonym: request.input('synonym'),
        material: request.input('material'),
        conservation: request.input('conservation'),
        preparation: request.input('preparation'),
        method: request.input('method'),
        interferer: request.input('interferer'),
        normalValues: request.input('normalValues'),
        interpretation: request.input('interpretation'),
        measureUnit: request.input('measureUnit'),
        name: request.input('name'),
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
