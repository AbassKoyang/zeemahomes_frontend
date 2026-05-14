export interface Results<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
export interface Property {
    'id': string; 
    'title': string;
    'slug': string;
    'property_reference': string;
    'status': 'for_sale' | 'for_rent' | 'sold' | 'unavailable';
    'property_type': string;
    'price': number;
    'price_period': 'none' | 'week' | 'day' | 'month' | 'year';
    'currency': string;
    'address': string;
    'city': string;
    'state': string;
    'country': string;
    'latitude': number;
    'longitude': number;
    'map_url': string;
    'overview': string;
    'video_url': string;
    'images': string[];
    'bedrooms': number;
    'bathrooms': number;
    'garages': number;
    'rooms': number;
    'year_built': string;
    'area_size': number;
    'land_area_size': number;
    'has_hvac': boolean;
    'has_cinema': boolean;
    'has_laundry': boolean;
    'has_swimming_pool': boolean;
    'is_featured': boolean;
    'is_published': boolean;
    'created_at':  string;
    'updated_at': string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  images: string[];
  author: number;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}