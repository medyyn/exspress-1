import { readFileSync, writeFileSync } from "fs";

const deleteParfumeById = (req, res) => {
  const { id } = req.params;
  const data = readFileSync("./db.json", "utf-8");
  const { parfumes } = JSON.parse(data);
  const currentParfume = parfumes.find((parfume) => parfume.id == id);

  if (currentParfume) {
    const newData = parfumes.filter((parfume) => parfume.id != id);
    const content = JSON.stringify({ parfumes: newData }, null, 2);
    writeFileSync("./db.json", content);
    res.status(200).send({
      status: 200,
      message: "Duxu uğurla silindi",
    });
  } else {
    res.status(404).send({
      status: 404,
      message: "Duxu tapılmadı",
    });
  }
};

export default deleteParfumeById;
