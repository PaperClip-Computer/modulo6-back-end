import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class MedicineController {
  public async list({ request, response }: HttpContextContract) {
    const { orderBy, filter } = request.qs()
    const res = await prisma.medicine.findMany({ orderBy, where: filter })
    return response.json(res)
  }
  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.medicine.findUnique({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.medicine.create({
      data: {
        name: request.input('name'),
        description: request.input('description'),
        userId: request.input('userId'),
      },
    })
    return response.json(res)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.medicine.update({
      where: {
        id: Number(id),
      },
      data: {
        name: request.input('name'),
        description: request.input('description'),
        userId: request.input('userId'),
      },
    })

    return response.json(res)
  }
  public async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.medicine.delete({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }
}
