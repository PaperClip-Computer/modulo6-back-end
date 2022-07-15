import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default class MedicalHistoryController {
  public async list({ request, response }: HttpContextContract) {
    return response.json(null)
  }
  public async get({ request, response }: HttpContextContract) {
    return response.json(null)
  }

  public async post({ request, response }: HttpContextContract) {
    return response.json(null)
  }

  public async update({ request, response }: HttpContextContract) {
    return response.json(null)
  }
  public async delete({ request, response }: HttpContextContract) {
    return response.json(null)
  }
}