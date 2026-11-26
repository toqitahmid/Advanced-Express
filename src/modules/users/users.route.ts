import { Router } from "express";
import { userController } from "./users.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.post("/", userController.createUserController)
router.get("/", userController.getUserController)
router.get("/:id", auth, userController.getUserByIdController)
router.delete("/:id", userController.deleteUserController)


export const userRouter = router