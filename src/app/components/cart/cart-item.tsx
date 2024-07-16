import RemoveItemIcon from "@/assets/icons/icon-remove-item.svg";

import { useCartItemStore } from "@/stores";
import type { CartItem as TCartItem } from "@/stores/cart-items-store";

import { calculateSubTotal, formatUsd } from "@/utils";

type CartItemProps = {
  item: TCartItem;
};

function CartItem(props: Readonly<CartItemProps>) {
  const removeCartItem = useCartItemStore((state) => state.removeItem);
  const subTotal = calculateSubTotal(props.item.price, props.item.quantity);

  function handleRemoveItem() {
    removeCartItem(props.item.name);
  }

  return (
    <div className="flex items-center justify-between py-4">
      <div className="space-y-1">
        <p className="font-semibold">{props.item.name}</p>
        <div className="flex items-center gap-3">
          <p className="text-red font-semibold mr-1">{props.item.quantity}x</p>
          <p className="text-rose-500">@ {formatUsd(props.item.price)}</p>
          <p className="font-semibold text-rose-500">{formatUsd(subTotal)}</p>
        </div>
      </div>
      <button
        aria-label="Remove item"
        type="button"
        onClick={handleRemoveItem}
        className="border  border-rose-400 text-rose-400 hover:border-rose-900 rounded-full p-1 hover:text-rose-900"
      >
        <RemoveItemIcon className="text-inherit" />
      </button>
    </div>
  );
}

export { CartItem };
