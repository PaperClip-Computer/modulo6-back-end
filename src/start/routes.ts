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

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

// Rota pra verfificar as conexões com o banco de dados
Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.get('/', async () => {
  return { ok: 'Hello world' }
})

const userRoutes = () => {
  Route.get('/users', 'UsersController.list')
  Route.get('/users/:id', 'UsersController.get')
  Route.post('/users', 'UsersController.post')
  Route.put('/users/:id', 'UsersController.update')
  Route.delete('/users/:id', 'UsersController.delete')
}

const bloodTypeRoutes = () => {
  Route.get('/blood-types', 'BloodTypeController.list')
  Route.get('/blood-types/:id', 'BloodTypeController.get')
  Route.post('/blood-types', 'BloodTypeController.post')
  Route.put('/blood-types/:id', 'BloodTypeController.update')
  Route.delete('/blood-types/:id', 'BloodTypeController.delete')
}

const exam = () => {
  Route.get('/examinfo', 'ExamController.list')
  Route.get('/exam/:id', 'ExamController.get')
  Route.post('/exam', 'ExamController.post')
  Route.put('/exam/:id', 'ExamController.update')
  Route.delete('/exam/:id', 'ExamController.delete')
}

const examInfo = () => {
  Route.get('/exam-info', 'ExamInfoController.list')
  Route.get('/exam-info/:id', 'ExamInfoController.get')
  Route.post('/exam-info', 'ExamInfoController.post')
  Route.put('/exam-info/:id', 'ExamInfoController.update')
  Route.delete('/exam-info/:id', 'ExamInfoController.delete')
}

Route.group(() => {
  userRoutes()
  bloodTypeRoutes()
  examInfo()
  exam()
}).prefix('/api/v1')
