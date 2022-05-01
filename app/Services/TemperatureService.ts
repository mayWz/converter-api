import { TemperatureEnum } from 'App/Enums/TemperatureEnum'
import { TemperatureType } from 'App/Type/TemperatureType'
import { convert } from 'convert'

export namespace TemperatureService {
  export const temperatureConvert = (from: TemperatureEnum.Unit, to: TemperatureEnum.Unit, value: number)
  : TemperatureType.ConvertResponseT => {
    const convertValue = convert(value, from).to(to)
    value = Math.round(convertValue)
    return {
      unit: to,
      value: value,
    }
  }
}
