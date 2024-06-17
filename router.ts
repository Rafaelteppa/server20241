import { Router } from "express";
import { listCourse, saveCourse } from "./controllers/course";
import { listBook, saveBook } from "./controllers/book";
import { listSchool, saveSchool } from "./controllers/school";
const router = Router();

router.get("/courses", listCourse);
router.post("/courses", saveCourse)

router.get("/book", listBook);
router.post("/book", saveBook)

router.get("/school", listSchool);
router.post("/school", saveSchool)

export { router };
