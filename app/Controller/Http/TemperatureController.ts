import { TemperatureService } from 'App/Services/TemperatureService'
import TemperatureConvertValidator from 'App/Validators/TemperatureConvertValidator'

export default class TemperatureController {
  public async convert ({ request, response }) {
    await request.validate(TemperatureConvertValidator)
    const { from, to, value } = request.all()

    try {
      const data = TemperatureService.temperatureConvert(from, to, value)
      return response.status(200)
        .send(data)
    } catch (e) {
      return response.badRequest(`${e.message}`)
    }
  }
}
