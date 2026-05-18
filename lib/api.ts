import axios from "axios";
import { BlogPost, Property, Results } from "./types";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
     "Content-Type": "application/json" ,
     'X-CSRFToken': getCsrfToken(),
  }
});

export function getCsrfToken(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(/csrftoken=([^;]+)/);
  return match ? match[1] : "";
}

export const fetchProperties = async () : Promise<Property[]>=> {
    try {
       const response =  await api.get(`/api/properties/featured/`)
       return response.data as Property[]
    } catch (error) {
        console.error("error fetching properties", error);
        throw error;
    }
}

export const fetchRecentBlogPosts = async () : Promise<BlogPost[]>=> {
    try {
       const response =  await api.get(`/api/blog/recent/`)
       return response.data as BlogPost[]
    } catch (error) {
        console.error("error fetching blog posts", error);
        throw error;
    }
}
export const fetchAllBlogPosts = async (page: number) : Promise<Results<BlogPost>>=> {
    try {
       const response =  await api.get(`/api/blog/?page=${page}`)
       console.log(response.data)
       return response.data
    } catch (error) {
        console.error("error fetching blog posts", error);
        throw error;
    }
}

export const searchProperties = async (
  params: Record<string, any>,
  page: number
): Promise<Results<Property>> => {
    try {
        const response = await api.get(`/api/search/properties/`, {
            params: {
                ...params,
                page,
            },
        });

        console.log(response.data)

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

export const fetchPropertyDetails = async (slug: string): Promise<Property> => {
  try {
    const response = await api.get(`/api/properties/${slug}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching property details", error);
    throw error;
  }
};


export const fetchBlogDetails = async (slug: string): Promise<BlogPost> => {
  try {
    const response = await api.get(`/api/blog/${slug}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog details", error);
    throw error;
  }
};
