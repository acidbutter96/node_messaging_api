import { Router } from 'express'

import SettingsController from '../controllers/SettingsController'
import UsersController from '../controllers/UsersController'

const routes = Router()

//Settings
routes.post('/settings', SettingsController.create)

//Users
routes.post('/users', UsersController.create)

export { routes }