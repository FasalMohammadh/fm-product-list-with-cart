import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

type CartItem = {
  name: string; //considered name as id because it is unique
  quantity: number;
  price: number;
};

interface CartItemsStore {
  cartItems: CartItem[];
  addItem: (name: string, price: number) => void;
  removeItem: (name: string) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  resetCart: () => void;
}

const createCartItemsStore = () =>
  createStore<CartItemsStore>()(
    persist(
      (set) => ({
        cartItems: [],
        addItem: (name, price) =>
          set((state) => {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.name === name
            );
            const isInCart = itemIndex !== -1;

            if (isInCart) {
              return state;
            }

            const clone = [...state.cartItems];
            clone.push({ name, quantity: 1, price });
            return { cartItems: clone };
          }),
        removeItem: (name) =>
          set((state) => {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.name === name
            );
            const isInCart = itemIndex !== -1;

            if (!isInCart) {
              return state;
            }

            const clone = [...state.cartItems];
            clone.splice(itemIndex, 1);
            return { cartItems: clone };
          }),
        increaseQuantity: (name) =>
          set((state) => {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.name === name
            );
            const isInCart = itemIndex !== -1;
            const clone = [...state.cartItems];

            if (!isInCart) {
              return state;
            }

            clone[itemIndex].quantity++;
            return { cartItems: clone };
          }),
        decreaseQuantity: (name) =>
          set((state) => {
            const itemIndex = state.cartItems.findIndex(
              (item) => item.name === name
            );
            const isInCart = itemIndex !== -1;
            const clone = [...state.cartItems];

            if (!isInCart) {
              return state;
            }

            if (clone[itemIndex].quantity === 1) {
              return state;
            }

            clone[itemIndex].quantity--;
            return { cartItems: clone };
          }),
        resetCart: () => set({ cartItems: [] }),
      }),
      { name: "cart-items" }
    )
  );

export type { CartItemsStore, CartItem };
export { createCartItemsStore };
