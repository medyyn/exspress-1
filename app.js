import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import homeController from "./controllers/home.js";
import parfumeRouter from "./routes/parfumesRouter.js";

dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", homeController);
app.use("/parfumes", parfumeRouter)
app.listen(port, () => {
  console.log(`server http://localhost:${port} ünvanında işləyir!`);
});
