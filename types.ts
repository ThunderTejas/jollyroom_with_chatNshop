
export interface ProductTag {
  text: string;
  bgColor: string;
  textColor: string;
}

export interface ProductReview {
  avatarUrl: string;
  text: string;
}

export interface ProductInfo {
  id: number;
  name: string;
  subtitle?: string;
  currentPrice: string;
  originalPrice?: string;
  imageUrl: string;
  category: string;
  tags?: ProductTag[];
  review?: ProductReview;
  rating: number;
  reviewCount: number;
  colors?: string[];
}

export interface CartItem extends ProductInfo {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  product?: ProductInfo | null;
}