import { products } from "../../../db";
import { findById } from "../../../helpers/helpers";

export default async (req, res) => {
  try {
    const { id } = req.query;
    // mock retrieval of a real DB with async/await
    const envelopes = await products;
    const envelope = findById(envelopes, id);

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      });
    }

    return res.status(200).send(envelope);
  } catch (err) {
    res.status(500).send(err);
  }
};
