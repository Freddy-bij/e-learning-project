// src/context/CartContext.ts
import { createContext } from "react";
import type { Product } from "../Types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);