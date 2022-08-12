import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BloodTypeEnum, PrismaClient, SexEnum } from '@prisma/client'

const prisma = new PrismaClient()

export default class UsersController {
  public async list({ request, response }: HttpContextContract) {
    const { name, cpf } = request.qs()

    const res = await prisma.user.findMany({
      where: {
        OR: {
          name: {
            startsWith: name,
            mode: 'insensitive',
          },
          cpf: {
            equals: cpf,
          },
        },
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
      include: {
        doctor: true,
        examSolicitations: {
          include: {
            examResult: true,
            exam: true,
          },
        },
      },
    })

    return response.json(res)
  }

  public async post({ request, response }: HttpContextContract) {
    const res = await prisma.user.create({
      data: {
        birthDate: request.input('birthDate'),
        name: request.input('name'),
        cpf: request.input('cpf'),
        sex: request.input('sex') as SexEnum,
        bloodType: request.input('bloodType') as BloodTypeEnum,
        medicines: request.input('medicines'),
        allergies: request.input('allergies'),
        medicalHistory: request.input('medicalHistory'),
        doctorId: request.input('doctorId'),
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
        cpf: request.input('cpf'),
        sex: request.input('sex') as SexEnum,
        bloodType: request.input('bloodType') as BloodTypeEnum,
        medicines: request.input('medicines'),
        allergies: request.input('allergies'),
        medicalHistory: request.input('medicalHistory'),
        doctorId: request.input('doctorId'),
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
