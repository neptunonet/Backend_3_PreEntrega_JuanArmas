# Entrega N°1 - Juan Ignacio Armas

## Programación Backend III: Testing y Escalabilidad Backend 
## Comisión 70375

## Se debe entregar
- Crear un router llamado mocks.router.js que funcione bajo la ruta base /api/mocks.
- Mover el endpoint “/mockingpets” (Desarrollado en el primer Desafío Entregable)  dentro de este router.
- Crear un módulo de Mocking para generar usuarios de acuerdo a un parámetro numérico. Dichos usuarios generados deberán tener las siguientes características:
  - En “password” debe tener la contraseña “coder123” encriptada.
  - “role” puede variar entre “user” y “admin”.
  - “pets” debe ir como array vacío.
- Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado “/mockingusers”, y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.
- Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba los parámetros numéricos “users” y “pets” para generar e insertar en la base de datos la cantidad de registros indicados.
- Comprobar dichos registros insertados mediante los servicios GET de users y pets

##  Formato
 - Link al repositorio de Github con el proyecto completo, sin la carpeta de Node_modules.

##  Postman
  - Se encuentra disponible el en Github el archivo *Backend3_PreEntega1.postman_collection.json* para importar en Postman para tener una visión más clara de las rutas y los endpoints.

## Dependencias:

Este proyecto utiliza las siguientes dependencias:

```json
  "dependencies": {
    "@faker-js/faker": "^9.6.0",
    "bcrypt": "^5.1.0",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.4.7",
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.7.5",
    "multer": "^1.4.5-lts.1",
    "supertest": "^6.3.3"
  },
  "devDependencies": {
    "chai": "^4.3.7",
    "mocha": "^10.1.0",
    "nodemon": "^3.1.9"
  }
```
git clone 
