import express from "express"
import { studentController } from "./student.controller"
import validateRequest from "../../middlewares/validateRequest"
import { studentValidations } from "./student.validation"
const studentRouter = express.Router()


studentRouter.get("/", studentController.getAllStudent)




export default studentRouter

