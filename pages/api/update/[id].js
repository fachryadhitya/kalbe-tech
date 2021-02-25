import { products } from "../../../db";
import { findById } from "../../../helpers/helpers";

export default async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const { id } = req.query;
    // mimicking the retrieval of a real DB with async/await
    const envelopes = await products;
    const envelope = findById(products, id);

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      });
    }

    envelope.name = name;
    envelope.stock = stock;
    envelope.price = price;
    // envelope.budget = price;
    res.status(201).send(envelopes);
  } catch (err) {
    res.status(500).send(err);
  }
};
