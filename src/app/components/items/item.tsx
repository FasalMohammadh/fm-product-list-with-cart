import AddToCartIcon from "@/assets/icons/icon-add-to-cart.svg";
import IncrementIcon from "@/assets/icons/icon-increment-quantity.svg";
import DecrementIcon from "@/assets/icons/icon-decrement-quantity.svg";

import type { Item as TItem } from "@/constants/items";

import { useCartItemStore } from "@/stores";

import { formatUsd } from "@/utils";

type ItemProps = {
  item: TItem;
};

function Item(props: Readonly<ItemProps>) {
  const addCartItem = useCartItemStore((state) => state.addItem);
  const increaseCartItem = useCartItemStore((state) => state.increaseQuantity);
  const decreaseCartItem = useCartItemStore((state) => state.decreaseQuantity);
  const cartItems = useCartItemStore((state) => state.cartItems);
  const currentItem = cartItems.find((item) => item.name === props.item.name);

  function handleDecreaseQuantity() {
    decreaseCartItem(props.item.name);
  }

  function handleIncreaseQuantity() {
    increaseCartItem(props.item.name);
  }

  function handleAddToCart() {
    addCartItem(props.item.name, props.item.price);
  }

  return (
    <div>
      <div
        className={`relative mb-9 rounded-lg ${
          currentItem ? "border-2 border-red" : ""
        }`}
      >
        <img
          alt={props.item.name}
          src={props.item.image.mobile.src}
          className="w-full h-auto rounded-[inherit] overflow-hidden"
          srcSet={`${props.item.image.tablet.src} 768w, ${props.item.image.desktop.src} 1440w`}
        />
        {currentItem ? (
          <div className="py-3 px-6 rounded-full border border-red flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-red items-center">
            <button
              type="button"
              onClick={handleDecreaseQuantity}
              aria-label="decrease item quantity"
              className="hover:bg-white border-white border-2 flex items-center justify-center hover:text-red rounded-full size-[18px] p-0.5 text-white transition-colors"
            >
              <DecrementIcon />
            </button>
            <div
              aria-label="quantity"
              className="w-[9ch] text-center text-white"
            >
              {currentItem.quantity}
            </div>
            <button
              type="button"
              onClick={handleIncreaseQuantity}
              aria-label="increase item quantity"
              className="hover:bg-white border-white border-2 flex items-center justify-center hover:text-red rounded-full size-[18px] p-0.5 text-white transition-colors"
            >
              <IncrementIcon />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="gap-2 items-center py-3 px-6 rounded-full border border-rose-500 inline-flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white hover:border-red font-semibold whitespace-nowrap text-rose-900 hover:text-red transition-colors"
            onClick={handleAddToCart}
          >
            <AddToCartIcon className="size-5" />
            <span>Add to Cart</span>
          </button>
        )}
      </div>

      <p className="text-rose-500">{props.item.category}</p>
      <p className="text-rose-900 font-semibold">{props.item.name}</p>
      <p className="text-red font-semibold">{formatUsd(props.item.price)}</p>
    </div>
  );
}

export { Item };
