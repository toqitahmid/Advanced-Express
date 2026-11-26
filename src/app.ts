import express, { type Application, type Request, type Response } from "express";
import cors from 'cors';
import { userRouter } from "./modules/users/users.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRouter } from "./modules/auth/auth.route";
import { logger } from "./middleware/logger";

const app: Application = express();
app.use(express.json());

const corsOption = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200,
}

app.use(logger)
app.use(cors(corsOption))
app.use("/api/v1/users", userRouter);
app.use("/api/v1/profile", profileRoute);
app.use("/api/v1/auth", authRouter)

app.get("/", (req: Request, res: Response) => {
    res.send("This is Modular Express Server")
})

export default app;