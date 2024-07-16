import Image from "next/image";

import type { CartItem } from "@/stores/cart-items-store";

import type { Item as TItem } from "@/constants/items";

import { calculateSubTotal, formatUsd } from "@/utils";

type ItemProps = {
  item: CartItem & TItem;
};

function Item(props: Readonly<ItemProps>) {
  return (
    <div className="flex items-center gap-3 py-4">
      <Image
        src={props.item.image.thumbnail}
        alt={props.item.name}
        quality={100}
        width={100}
        height={96}
        className="size-12 rounded-sm"
      />

      <div className="grow flex flex-col justify-between">
        <p className="text-rose-900 font-semibold">{props.item.name}</p>
        <div className="flex items-center gap-2">
          <p className="text-red font-semibold mr-1">{props.item.quantity}x</p>
          <p className="text-rose-500">@ {formatUsd(props.item.price)}</p>
        </div>
      </div>

      <p className="text-rose-900 font-semibold">
        {formatUsd(calculateSubTotal(props.item.quantity, props.item.price))}
      </p>
    </div>
  );
}

export { Item };
