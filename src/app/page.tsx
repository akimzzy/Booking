import Arrow from "./components/svgs/Arrow";

const products = [
  { category: "products", items: [] },
  { category: "Styling", items: [] },
  { category: "Treatments", items: [] },
  { category: "Extensions", items: [] },
  { category: "Braids", items: [] },
];

export default function Home() {
  return (
    <div className="py-6 px-5">
      <div className="flex flex-col items-center">
        <div className="size-10 bg-black rounded-xl text-white text-xs justify-center items-center flex">
          Logo
        </div>
        <h1 className="text-lg font-bold">{`Mide's Hair`}</h1>
        <span className="text-gray-600 text-sm">
          Unveil Your Radiance with a Heavenly Touch.
        </span>
      </div>

      <div className="mt-4 p-6">
        <ul className="flex flex-col gap-4">
          {products.map((products) => {
            return (
              <li key={products.category} className="cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-semibold capitalize">
                      {products.category}
                    </span>
                    <span className="text-xs text-gray-600 -mt-0.5">
                      6 items
                    </span>
                  </div>

                  <div className="size-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <Arrow />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
