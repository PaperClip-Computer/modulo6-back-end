import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient, BloodTypeEnum, BloodTypeRhEnum } from '@prisma/client'

const prisma = new PrismaClient()

export default class BloodTypeController {
  public async list({ request, response }: HttpContextContract) {
    const res = await prisma.bloodType.findMany()
    return response.json(res)
  }

  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.bloodType.findUnique({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.bloodType.create({
      data: {
        rh: request.input('rh') as BloodTypeRhEnum,
        type: request.input('type') as BloodTypeEnum,
      },
    })
    return response.json(res)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.bloodType.update({
      where: {
        id: Number(id),
      },
      data: {
        rh: request.input('rh') as BloodTypeRhEnum,
        type: request.input('type') as BloodTypeEnum,
      },
    })
    return response.json(res)
  }

  public async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.bloodType.delete({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }
}
