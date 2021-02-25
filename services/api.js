import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const getAllProducts = async () => {
  const res = await axios.get(`${BASE_URL}/getProduct`);
  const data = await res.data;
  return data;
};

export const getDetailProduct = async (id) => {
  const res = await axios.get(`${BASE_URL}/getDetail/${id}`);
  const data = await res.data;
  return data;
};

export const updateProducts = async (id, name, price, stock) => {
  const res = await axios.put(`${BASE_URL}/update/${id}`, {
    name,
    price,
    stock,
  });
  const data = await res.data;
  return data;
};

export const deleteProducts = async (id) => {
  const res = await axios.delete(`${BASE_URL}/delete/${id}`);
  const data = await res.data;
  return data;
};

export const createProducts = async (name, price, stock, image) => {
  const res = await axios.post(`${BASE_URL}/postProduct`, {
    name,
    price,
    stock,
    image,
  });
  const data = await res.data;
  return data;
};
