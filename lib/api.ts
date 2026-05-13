import axios from "axios";
import { Property } from "./types";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const fetchProperties = async () : Promise<Property[]>=> {
    try {
       const response =  await api.get(`/api/properties/featured/`)
       return response.data as Property[]
    } catch (error) {
        console.error("error fetching properties", error);
        throw error;
    }
}
export const searchProperties = async (params: Record<string, any>) : Promise<{results: Property[], count: number}> => {
    try {
        const response = await api.get(`/api/search/properties/`, { params });
        return response.data;
    } catch (error) {
        console.error("error searching properties", error);
        throw error;
    }
}

export const fetchSearchFilters = async () => {
    try {
        const response = await api.get(`/api/search/filters/`);
        return response.data;
    } catch (error) {
        console.error("error fetching filters", error);
        throw error;
    }
}