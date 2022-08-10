import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient, SexEnum } from '@prisma/client'

const prisma = new PrismaClient()

export default class UsersController {
  public async list({ request, response }: HttpContextContract) {
    const { orderBy, filter } = request.qs()
    const res = await prisma.user.findMany({
      orderBy,
      where: filter,
      include: {
        medicalHistory: true,
        bloodType: true,
        allergies: true,
        medicines: true,
      },
    })
    return response.json(res)
  }

  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.user.create({
      data: {
        birthDate: request.input('birthDate'),
        name: request.input('name'),
        sex: request.input('sex') as SexEnum,
        bloodTypeId: request.input('bloodTypeId'),
        medicalHistoryId: request.input('medicalHistoryId'),
        medicines: request.input('medicines'),
        allergies: request.input('allergies'),
      },
    })
    return response.json(res)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        birthDate: request.input('birthDate'),
        name: request.input('name'),
        sex: request.input('sex') as SexEnum,
        bloodTypeId: request.input('bloodTypeId'),
        medicalHistoryId: request.input('bloodTypeId'),
        medicines: request.input('medicines'),
        allergies: request.input('allergies'),
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
