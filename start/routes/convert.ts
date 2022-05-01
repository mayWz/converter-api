import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/temperature', 'TemperatureController.convert')
}).prefix('api/v1')
