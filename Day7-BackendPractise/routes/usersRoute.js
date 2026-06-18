import express from "express";
import { addData } from "../controllers/userController.js";



const routes = express.Router()


routes.post('/register',addData)



export default routes