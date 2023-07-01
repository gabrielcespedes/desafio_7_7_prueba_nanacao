# desafio_7_7_prueba_nanacao

Testing unitario a API REST. Uso de librería **JEST** y paquete **supertest**.

## Matchers utilizados:

toBE

toBeInstanceOf

toBeGreaterThan

toContainEqual

## Testeos

GET/cafes devuelve status code 200, tipo dato arreglo con por lo menos un objeto

DELETE/cafe, on id inexistente, status code 303

POST/cafes agrega nuevo objeto, status code 201

PUT/cafes devuelve status code 400, intento de actualizar café con id parámetro distinto a id payload.

## Ejecución

npm run test
