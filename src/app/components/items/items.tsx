"use client";

import { Item } from "@/app/components/items/item";

import { items } from "@/constants/items";

function Items() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <Item item={item} key={item.name} />
      ))}
    </div>
  );
}

export { Items };
