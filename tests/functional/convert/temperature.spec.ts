import { test } from '@japa/runner'

test.group('Convert temperature', () => {
  test('convert celsius to fahrenheit successful', async ({ client }) => {
    const response = await client.post('/api/v1/temperature').json({
      from: 'celsius',
      to: 'fahrenheit',
      value: '100',
    })

    response.assertStatus(200)
    response.assertBody({
      unit: 'fahrenheit',
      value: 212,
    })
  })

  test('convert fahrenheit to celsius successful', async ({ client }) => {
    const response = await client.post('/api/v1/temperature').json({
      from: 'fahrenheit',
      to: 'celsius',
      value: 212,
    })

    response.assertStatus(200)
    response.assertBody({
      unit: 'celsius',
      value: 100,
    })
  })

  test('convert temperature without param, should failed', async ({ client }) => {
    const response = await client.post('/api/v1/temperature')
    response.assertStatus(422)
  })
})
