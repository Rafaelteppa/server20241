import { Router } from "express";
import { listCourse, saveCourse } from "./controllers/course";
import { listBook, saveBook } from "./controllers/book";
//import { listSchool, saveSchool } from "./controllers/school";
import { listPatient, savePatient } from "./controllers/patient";
import { listHospital, saveHospital } from "./controllers/hospital";
import { listHospitais, saveHospitais } from "./controllers/hospitais";



const router = Router();

router.get("/courses", listCourse);
router.post("/courses", saveCourse);

router.get("/book", listBook);
router.post("/book", saveBook);

//router.get("/school", listSchool);
//router.post("/school", saveSchool);

router.get("/patient", listPatient);
router.post("/patient", savePatient);

router.get("/hospital", listHospital);
router.post("/hospital", saveHospital);

router.get("/hospitais", listHospitais);
router.post("/hospitais", saveHospitais);

export { router };
