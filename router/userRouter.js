import express from "express";
import {addNewAdmin, addnewDoctor, getAllDoctors, getUserDetails, logoutAdmin, logoutDoctor, logoutPatient, patientRegister} from "../controller/userController.js";
import { login } from "../controller/userController.js";
import { isAdminAuthenticated, isDoctorAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew",isAdminAuthenticated, addNewAdmin);
router.post("/doctor/addnew",isAdminAuthenticated, addnewDoctor);   // admin hi new doctor add krskta
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/doctor/logout" , isDoctorAuthenticated, logoutDoctor);


export default router;
