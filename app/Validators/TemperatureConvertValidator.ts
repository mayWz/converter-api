import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import { TemperatureEnum } from 'App/Enums/TemperatureEnum'

export default class TemperatureConvertValidator {
  constructor (protected ctx: HttpContextContract) { }

  public schema = schema.create({
    from: schema.enum(Object.values(TemperatureEnum.Unit)),
    to: schema.enum(Object.values(TemperatureEnum.Unit)),
    value: schema.number(),
  })
}
