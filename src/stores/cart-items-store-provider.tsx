"use client";

import {
  createContext,
  useRef,
  useContext,
  type PropsWithChildren,
} from "react";

import { useStore } from "zustand";

import {
  type CartItemsStore,
  createCartItemsStore,
} from "@/stores/cart-items-store";

export type CartItemsStoreApi = ReturnType<typeof createCartItemsStore>;

const CartItemsStoreContext = createContext<CartItemsStoreApi | undefined>(
  undefined
);

const CartItemsStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<CartItemsStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCartItemsStore();
  }

  return (
    <CartItemsStoreContext.Provider value={storeRef.current}>
      {children}
    </CartItemsStoreContext.Provider>
  );
};

const useCartItemStore = <T,>(selector: (store: CartItemsStore) => T): T => {
  const cartItemsStoreContext = useContext(CartItemsStoreContext);

  if (!cartItemsStoreContext) {
    throw new Error(
      "useCartItemStore must be used within CartItemsStoreProvider"
    );
  }

  return useStore(cartItemsStoreContext, selector);
};

export { useCartItemStore, CartItemsStoreProvider, CartItemsStoreContext };
