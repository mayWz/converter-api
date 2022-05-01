import { TemperatureService } from 'App/Services/TemperatureService'
import TemperatureConvertValidator from 'App/Validators/TemperatureConvertValidator'

export default class TemperatureController {
  public async convert ({ request, response }) {
    const { from, to, value } = await request.validate(TemperatureConvertValidator)

    try {
      const data = TemperatureService.temperatureConvert(from, to, value)
      return response.status(200)
        .send(data)
    } catch (e) {
      return response.badRequest(`${e.message}`)
    }
  }
}
