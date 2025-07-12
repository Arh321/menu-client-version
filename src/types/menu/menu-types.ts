export interface IMenu {
  menu_id: number;
  menu_name: string;
  menu_description: string;
  menu_created_at: Date;
  menu_updated_at: Date;
  menu_image?: string;
  total_products_count: number;
  total_products_price: number;
  categories: Category[];
}

export interface Category {
  category_id: number | null;
  category_name: null | string;
  category_description: null | string;
  category_status: number | null;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  available: number;
  featured: boolean;
  level: number;
  thumbnail: Thumbnail;
  album: string[];
  has_discount: number;
  discount_type: string;
  discount_value: number;
  discount_start_date: Date | null;
  discount_end_date: Date | null;
}

export interface Thumbnail {
  id: number | null;
  name: string;
  url: string;
}

export interface IBasketState {
  productId: number;
  image: string;
  title: string;
  price: number;
  discount: number;
  quantity: number;
}
