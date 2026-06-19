import express from 'express'
import { loginData, registerData,getbyId,getbyquery } from '../controllers/authController.js'

const routes = express.Router()

routes.post("/register",registerData)
routes.get("/login",loginData)
routes.get("/linkparams/:user_id",getbyId)

routes.get("/linkquery",getbyquery)

export default routes