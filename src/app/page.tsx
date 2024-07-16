import { Cart } from "@/app/components/cart";
import { Items } from "@/app/components/items";

function Home() {
  return (
    <main className="px-6 bg-rose-50 py-6  sm:py-[92px]">
      <div className="max-w-[1216px] mx-auto grid xl:grid-cols-[1fr_384px] gap-8">
        <div>
          <h1 className="text-4xl text-rose-900 font-bold mb-9">Desserts</h1>
          <Items />
        </div>
        <Cart />
      </div>
    </main>
  );
}

export default Home;
