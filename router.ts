import { Router } from "express";
import { listCourse, saveCourse } from "./controllers/course";
import { listBook, saveBook } from "./controllers/book";
const router = Router();

router.get("/courses", listCourse);
router.post("/courses", saveCourse)

router.get("/book", listBook);
router.post("/book", saveBook)

export { router };
