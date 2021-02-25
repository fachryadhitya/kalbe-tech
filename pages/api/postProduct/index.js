import { products } from "../../../db";
import { createId } from "../../../helpers/helpers";

export default async (req, res) => {
  try {
    const { name, price, stock, image } = req.body;
    // mock retrieval of a real DB with async/await
    const envelopes = await products;
    const newId = createId(envelopes);
    const newEnvelope = {
      id: newId,
      name,
      stock,
      price,
      imageLink: image,
    };
    envelopes.push(newEnvelope);
    res.status(201).send(newEnvelope);
  } catch (err) {
    res.status(500).send(err);
  }
};
