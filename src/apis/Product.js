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

export const getProductPaginate = async (_page = 1, _limit = 8) => {
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

export const createNewProduct = async (product) =>{
   try {
     const result = await axios.post(`${BASE_URL_API}/product`, product);
     return result.data;
   } catch (error) {
     console.log(error);
   }
}

export const updateProduct = async (product) => {
  try {
    const result = await axios.put(`${BASE_URL_API}/product/${product.id}`, product);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const result = await axios.delete(`${BASE_URL_API}/product/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};
