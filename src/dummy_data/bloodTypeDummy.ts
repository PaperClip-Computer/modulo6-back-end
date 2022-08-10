import { BloodTypeEnum, BloodTypeRhEnum } from '@prisma/client'

export default [
  {
    rh: BloodTypeRhEnum.negative,
    type: BloodTypeEnum.A,
  },
  {
    rh: BloodTypeRhEnum.positive,
    type: BloodTypeEnum.O,
  },
]
