import { readFileSync, writeFileSync } from "fs";
import internalServerError from "../helpers/internalServerError.js";
import { randomUUID } from "crypto";

const createNewParfume = (req, res) => {
  try {
    // faylı oxuduq
    const data = readFileSync("./db.json", "utf-8");
    const { parfumes } = JSON.parse(data);
    const { title, author, year, genre, price, inStock } = req.body;

    if (
      !title ||
      !author ||
      !year ||
      !genre ||
      !price ||
      typeof inStock !== "boolean"
    ) {
      res.status(400).send({
        status: 400,
        message: "Məlumatlar əskikdir!",
      });
    } else {
      // yeni duxunun datasını ayarladıq ve massivə əlavə etdik
      const newParfume = req.body;
      newParfume.id = randomUUID();
      parfumes.push(newParfume);

      // yeni duxunu db-yə əlavə et
      const content = JSON.stringify({ parfumes: parfumes }, null, 2);
      writeFileSync("./db.json", content);

      res.status(201).send({
        status: 201,
        message: "Yeni duxu əlavə edildi!",
      });
    }
  } catch (err) {
    internalServerError();
  }
};

export default createNewParfume;
