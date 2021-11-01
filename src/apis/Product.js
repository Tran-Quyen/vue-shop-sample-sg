import axios from 'axios';
import { BASE_URL_API } from '@/constants/constants.js';

export const getAllProduct = async () => {
  try {
    const listProduct = await axios.get(`${BASE_URL_API}/product`);
    return listProduct.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductPaginate = async (_page,_limit) => {
  try {
    const listProduct = await axios.get(`${BASE_URL_API}/product/?_page=${_page}&_limit=${_limit}`);
    return listProduct.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const product = await axios.get(`${BASE_URL_API}/product/${id}`);
    return product.data;
  } catch (error) {
    console.log(error);
  }
};
