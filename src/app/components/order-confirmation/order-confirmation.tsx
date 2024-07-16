"use client";

import OrderConfirmedIcon from "@/assets/icons/icon-order-confirmed.svg";

import { useCartItemStore } from "@/stores";

import { calculateTotal, formatUsd, mergeBy } from "@/utils";
import { Item } from "./item";
import * as Dialog from "@radix-ui/react-dialog";

import { items } from "@/constants/items";

type OrderConfirmationProps = {
  open: boolean;
  onOpenChange: Dialog.DialogProps["onOpenChange"];
};

function OrderConfirmation(props: Readonly<OrderConfirmationProps>) {
  const cartItems = useCartItemStore((state) => state.cartItems);
  const resetCart = useCartItemStore((state) => state.resetCart);

  const mergedItems = mergeBy(cartItems, items, "name");

  function handleSubmit() {
    resetCart();
    props.onOpenChange?.(false);
  }

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <Dialog.Root open={props.open} onOpenChange={props.onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content asChild>
          <div className="fixed bottom-0 sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 bg-white p-6 sm:p-10 rounded-t-xl sm:rounded-xl h-fit sm:max-w-[592px] w-full  max-h-[calc(100%_-_96px)] sm:max-h-[calc(100%_-_16px)] overflow-y-auto text-rose-900">
            <OrderConfirmedIcon className="mb-8" />

            <Dialog.Title className="text-4xl font-bold mb-3">
              Order Confirmed
            </Dialog.Title>
            <p className="text-rose-500 mb-8">We hope you enjoy your food!</p>

            <div className="p-6 divide-y divide-gray-200 bg-rose-50 mb-8 rounded-lg">
              {mergedItems.map((item) => (
                <Item item={item} key={item.name} />
              ))}

              <div className="flex pt-6">
                <p className="grow">Order Total</p>
                <p className="text-2xl font-bold">
                  {formatUsd(calculateTotal(cartItems))}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="rounded-full bg-red text-white w-full p-3 text-rose-50 font-semibold hover:bg-hawaiian-malasada"
              onClick={handleSubmit}
            >
              Start New Order
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export { OrderConfirmation };
