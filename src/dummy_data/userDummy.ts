import { SexEnum } from '@prisma/client'

export default [
  {
    birthDate: new Date('2000-10-07'),
    name: 'Gustavo C Lacerda',
    sex: SexEnum.masc,
    bloodTypeId: 1,
  },
  {
    birthDate: new Date('2002-05-30'),
    name: 'Henrique T Aguiar',
    sex: SexEnum.masc,
    bloodTypeId: 2,
  },
]
