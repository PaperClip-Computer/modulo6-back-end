import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default class DoctorController {
  public async list({ request, response }: HttpContextContract) {
    return response.json(null)
  }
  public async get({ request, response }: HttpContextContract) {
    return response.json(null)
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
    return response.json(null)
  }
  public async delete({ request, response }: HttpContextContract) {
    return response.json(null)
  }
}
