import { products } from "../../../db";
import { deleteById, findById } from "../../../helpers/helpers";

export default async (req, res) => {
  try {
    const { id } = req.query;
    const envelopes = await products;
    const envelope = findById(envelopes, id);

    if (!envelope) {
      return res.status(404).send({
        message: "Envelope Not Found",
      });
    }

    const updatedEnvelopes = deleteById(envelopes, id);
    return res.status(204).send(updatedEnvelopes);
  } catch (err) {
    res.status(500).send(err);
  }
};
