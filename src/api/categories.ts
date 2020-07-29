import { CategoryModel } from '../features/categories/CategoryModel';
import Axios from 'axios';

const baseUrl = 'https://stockmanagement2018.azurewebsites.net/api/categories/';

const headers = {
  Accept: "application/json",
 "Content-Type": "application/json"
}

export const getCategories = async (): Promise<CategoryModel[]> => {
  const response = await Axios.get<CategoryModel[]>(baseUrl);
  return response.data;
}

export const getCategoryById = async (id: number): Promise<CategoryModel> => {
  const response = await Axios.get<CategoryModel>(`${baseUrl} ${id}`);
  return response.data;
}

export const getCategoryNameById = async (id: number) => {
  const response = await Axios.get<CategoryModel>(`${baseUrl} ${id}`);
  return response.data.name;
}

export const postCategory = async (category: CategoryModel) => {
 await Axios.post<CategoryModel>(baseUrl, category, { headers });
}

export const deleteCategory = async (id: number | undefined) => {
  const categoryUrl = `${baseUrl}/${id}`;

  await Axios.delete<CategoryModel>(categoryUrl);
}