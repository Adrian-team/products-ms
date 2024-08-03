<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 # Product Microservice



## Dev

1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo `.env` basado en el `env.template`
4. Ejecutar migración de prisma `npx prisma migrate dev`
5. Ejecutar `npm run start:dev`
6. En la carpeda data se encuentra un archivo seed para cargar productos

#### Temario curso seccion 04 (02-products-app/products-ms)

1. CRUD
2. MessagePattern
3. SQLite
4. Prisma con Nest
5. Migraciones
6. Transformar REST a Microservicio
7. Aplicaciones Híbridas Rest + Microservicios (esto se verá a profundidad en la sección de Auth)
8. GitHub - Organizaciones

#### Temario curso seccion 08 (02-products-app/client-gateway)

1. Agregamos un modulo para la comunicacion con nats
2. Descargamos Nats a traves de docker.
3. Confuguracion de la comunicacion a traves de nats