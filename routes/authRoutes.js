import express from 'express'
const router = express.Router()

import { register, login, updateUser} from '../controllers/authController.js'

//holds the authentication routes and the type of request made to each route

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(updateUser)

export default router
