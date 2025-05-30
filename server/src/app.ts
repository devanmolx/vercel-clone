import express, { Request, Response } from "express";
import cors from "cors"
import deployRoute from "./routes/deployment"
import projectRoute from "./routes/project"
import userRoute from "./routes/user"
import dotenv from "dotenv"
import dbConnect from "./utils/dbConnect";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
dbConnect();

app.use("/deployment", deployRoute)
app.use("/project", projectRoute)
app.use("/user", userRoute)

app.get("/", (req: Request, res: Response): void => {
    res.json({ msg: "Server running" })
})

app.listen(4000, () => {
    console.log("Server Started")
})