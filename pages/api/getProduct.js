import { products, users } from "../../db";

export default async (req, res, next) => {
  try {
    const product = await products;
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};
