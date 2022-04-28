import { TemperatureEnum } from 'App/Enums/TemperatureEnum'

export namespace TemperatureType
{
  export type ConvertT = {
    from: TemperatureEnum.Unit
    to: TemperatureEnum.Unit
    value: number
  }

  export type ConvertResponseT = {
    unit: string
    value: number
  }
}
