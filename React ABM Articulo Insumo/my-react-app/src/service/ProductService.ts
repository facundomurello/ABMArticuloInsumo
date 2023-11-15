import { Product } from "../types/Product";

const BASE_URL = 'http://localhost:8080/api/v1';

export const ProductService = {
	//Aquí adentro vamos a declarar los métodos
    
    getProducts: async (): Promise<Product[]> => {
        const response = await fetch(`${BASE_URL}/articulosinsumos`);
        const data = await response.json();
        return data;
    },

    getProduct: async (id: number): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/articulosinsumos/${id}`);
        const data = await response.json();
        return data;
    },

    createProduct: async (product: Product): Promise<Product> =>{
        const response = await fetch(`${BASE_URL}/articulosinsumos`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    },

    updateProduct: async(id: number, product: Product): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/articulosinsumos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data;
    },

    deleteProduct: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/articulosinsumos/${id}`, {
            method: "DELETE"
        });
    }
}
