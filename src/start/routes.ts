/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'

// Rota pra verfificar as conexões com o banco de dados
Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.get('/', async () => {
  return { ok: 'modulo6' }
})

const rountesAndControllers = [
  { route: 'user', controller: 'UsersController' },
  { route: 'exam', controller: 'ExamController' },
  { route: 'exam-result', controller: 'ExamResultController' },
  { route: 'exam-solicitation', controller: 'ExamSolicitationController' },
  { route: 'doctor', controller: 'DoctorController' },
]

const buildRoutes = () => {
  rountesAndControllers.forEach(({ route, controller }) => {
    Route.get(`/${route}`, `${controller}.list`)
    Route.get(`/${route}/:id`, `${controller}.get`)
    Route.post(`/${route}`, `${controller}.post`)
    Route.put(`/${route}/:id`, `${controller}.update`)
    Route.delete(`/${route}/:id`, `${controller}.delete`)
  })
}

Route.group(() => {
  buildRoutes()
}).prefix('/api/v1')
