"use client";

import { useState } from "react";

import { CartItem } from "@/app/components/cart/cart-item";
import { OrderConfirmation } from "@/app/components/order-confirmation/order-confirmation";

import CarbonNeutralIcon from "@/assets/icons/icon-carbon-neutral.svg";
import EmptyCartIllustration from "@/assets/icons/illustration-empty-cart.svg";

import { useCartItemStore } from "@/stores";

import { calculateTotal, formatUsd } from "@/utils";

function Cart() {
  const cartItems = useCartItemStore((state) => state.cartItems);
  const [isOpen, setIsOpen] = useState(false);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  function handleClickConfirmOrder() {
    cartItems.length && setIsOpen(true);
  }

  return (
    <>
      <div className="p-6 bg-white rounded-xl h-fit">
        <h2 className="text-red font-bold text-2xl mb-2">
          Your cart ({totalQuantity})
        </h2>

        {cartItems.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 py-6">
            <EmptyCartIllustration />
            <p className="text-center text-rose-500 font-semibold">
              Your added items will appear here
            </p>
          </div>
        )}

        {!!cartItems.length && (
          <>
            <div className="divide-y divide-gray-200 border-b border-gray-200">
              {cartItems.map((item) => (
                <CartItem item={item} key={item.name} />
              ))}
            </div>

            <div className="flex items-center py-6">
              <p className="grow">Order Total</p>
              <p className="font-bold text-2xl text-rose-900">
                {formatUsd(calculateTotal(cartItems))}
              </p>
            </div>

            <div className="py-3.5 mb-6 text-center bg-rose-50 rounded-lg flex items-center gap-2 justify-center">
              <CarbonNeutralIcon />
              <p>
                This is a <span className="font-semibold">carbon neutral</span>{" "}
                delivery
              </p>
            </div>

            <button
              type="button"
              className="rounded-full bg-red text-white w-full p-3.5 text-rose-50 font-semibold hover:bg-hawaiian-malasada transition-colors"
              onClick={handleClickConfirmOrder}
            >
              Confirm Order
            </button>
          </>
        )}
      </div>

      <OrderConfirmation
        open={isOpen}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
      />
    </>
  );
}

export { Cart };
