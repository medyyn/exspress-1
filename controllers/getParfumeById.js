import { readFileSync } from "fs";

const getParfumeById = (req, res) => {
  const { id } = req.params;
  const data = readFileSync("./db.json", "utf-8");
  const { parfumes } = JSON.parse(data);
  const currentParfume = parfumes.find((parfume) => parfume.id == id);

  if (currentParfume) {
    res.status(200).send(currentParfume);
  } else {
    res.status(404).send({
      status: 404,
      message: "Duxu tapılmadı",
    });
  }
};

export default getParfumeById;
