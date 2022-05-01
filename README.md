
# Converter API 
Converter API is built for test assigment purpose only 
built with [Adonis 5](https://adonisjs.com/)

## Setup

 - Required
	 - Node 14
 - Install all dependencies using `npm install`
 - Copy/Create .env from .env.example
 - run `node ace generate:key` to generate APP_KEY, replace key in .env 
 - run `npm run dev` to start deployment server 
 - Default: `http://localhost:3333`

## API 

 - **POST** http://localhost:3333/api/v1/temperature
	 - example body
		 `{
    "from": "celsius",
    "to": "fahrenheit",
    "value": "20"
}`
 - **Postman**
	 [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3170204-9b1c702b-50d7-44db-8c00-c61ab1e5a271?action=collection%2Ffork&collection-url=entityId%3D3170204-9b1c702b-50d7-44db-8c00-c61ab1e5a271%26entityType%3Dcollection%26workspaceId%3D212f0ceb-155c-4cc4-88d6-9191d769cfac)
	 
 - **Curl**
  `curl --location --request POST 'localhost:3333/api/v1/temperature' \
--header 'Content-Type: application/json' \
--data-raw '{
    "from": "celsius",
    "to": "fahrenheit",
    "value": "20"
}'`

## Testing
Run  Integration Tests

 - run `node ace test` for integration tests

## Behind the scence 

 - Why Adonis?
	 - Adonis is the node.js framework that provide all we need to build API includes testing. we can use command line. (it's like Laravel, Ruby on rails)  
 - How Convert unit?
	 - using 3rd party like [convert](https://www.npmjs.com/package/convert) to reduce our time to make function. 
- Using DDD, I like to spearate business logic to service. 
- Still OOP?
	- It's readable for all.   

## License
MIT
