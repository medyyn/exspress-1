import { readFileSync } from "fs";
import internalServerError from "../helpers/internalServerError.js";

const getAllParfumes = (req, res) => {
  try {
    const data = readFileSync("./db.json", "utf-8");
    const { parfumes } = JSON.parse(data);
    res.send(parfumes);
  } catch (err) {
    internalServerError();
  }
};

export default getAllParfumes;
