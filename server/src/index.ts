import express, { Application, Request, Response } from "express";
import "dotenv/config";
const app: Application = express();
const PORT = process.env.PORT || 7000;
import path from "path";
import { fileURLToPath } from "url";
const _dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(_dirname, "./views"));

app.get("/", (req: Request, res: Response) => {
  return res.render("welcome")
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
