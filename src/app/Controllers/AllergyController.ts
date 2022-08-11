import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class AllergyController {
  public async list({ response }: HttpContextContract) {
    const res = await prisma.allergy.findMany()
    return response.json(res)
  }
  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.allergy.findUnique({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.allergy.create({
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

    const res = await prisma.allergy.update({
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

    const res = await prisma.allergy.delete({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }
}
