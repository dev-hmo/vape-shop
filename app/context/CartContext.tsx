"use client";

import React, { createContext, useContext, useReducer, useEffect, useCallback } from "react";
import { Product } from "@/app/data/products";

// ===== Types =====
export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "ADD_ITEM"; product: Product; quantity?: number }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; state: CartState };

interface CartContextType extends CartState {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

// ===== Helpers =====
function calculateTotals(items: CartItem[]): { totalItems: number; totalPrice: number } {
  return {
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  };
}

// ===== Reducer =====
function cartReducer(state: CartState, action: CartAction): CartState {
  let newItems: CartItem[];

  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.product.id === action.product.id);
      if (existing) {
        newItems = state.items.map((i) =>
          i.product.id === action.product.id
            ? { ...i, quantity: i.quantity + (action.quantity || 1) }
            : i
        );
      } else {
        newItems = [...state.items, { product: action.product, quantity: action.quantity || 1 }];
      }
      return { items: newItems, ...calculateTotals(newItems) };
    }

    case "REMOVE_ITEM":
      newItems = state.items.filter((i) => i.product.id !== action.productId);
      return { items: newItems, ...calculateTotals(newItems) };

    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) {
        newItems = state.items.filter((i) => i.product.id !== action.productId);
      } else {
        newItems = state.items.map((i) =>
          i.product.id === action.productId ? { ...i, quantity: action.quantity } : i
        );
      }
      return { items: newItems, ...calculateTotals(newItems) };

    case "CLEAR_CART":
      return { items: [], totalItems: 0, totalPrice: 0 };

    case "HYDRATE":
      return action.state;

    default:
      return state;
  }
}

// ===== Context =====
const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "vapepi_cart";

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartState;
        if (parsed.items && parsed.items.length > 0) {
          dispatch({ type: "HYDRATE", state: parsed });
        }
      }
    } catch {
      // Invalid stored data — ignore
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage full or unavailable
    }
  }, [state]);

  const addItem = useCallback((product: Product, quantity?: number) => {
    dispatch({ type: "ADD_ITEM", product, quantity });
  }, []);

  const removeItem = useCallback((productId: number) => {
    dispatch({ type: "REMOVE_ITEM", productId });
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
