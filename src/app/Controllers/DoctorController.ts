import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class DoctorController {
  public async list({ request, response }: HttpContextContract) {
    const { orderBy, filter } = request.qs()
    const res = await prisma.doctor.findMany({ orderBy, where: filter })
    return response.json(res)
  }

  public async get({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.doctor.findUnique({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = prisma.doctor.create({
      data: {
        name: request.input('name'),
        crm: request.input('crm'),
        speciality: request.input('speciality'),
      },
    })
    return response.json(res)
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.doctor.update({
      where: {
        id: Number(id),
      },
      data: {
        name: request.input('name'),
        crm: request.input('crm'),
        speciality: request.input('speciality'),
      },
    })

    return response.json(res)
  }

  public async delete({ request, response }: HttpContextContract) {
    const { id } = request.params()

    const res = await prisma.doctor.delete({
      where: {
        id: Number(id),
      },
    })

    return response.json(res)
  }
}
