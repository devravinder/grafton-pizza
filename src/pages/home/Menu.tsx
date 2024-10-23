import { sections } from "constants";
import { useState } from "react";

const All = "All";

const pizzas = sections.menu.items;

const pizzsTypes = [...new Set(pizzas.map((pizza) => pizza.type)), All];

export default function Menu() {
  const [selected, setSelected] = useState(All);

  // doing css filter, to avoid image re-rendeing
  // const filtered = useMemo(() => selected === All ? pizzas : pizzas.filter(pizza => pizza.type === selected), [selected])

  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto h-full">
        <div className="w-full flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-row gap-2 py-4 text-4xl">
            <span className="text-black font-satisfy">
              {sections.menu.title[0]}
            </span>
            <span className="text-green-500 font-satisfy">
              {sections.menu.title[1]}
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            {pizzsTypes.map((type) => (
              <button
                key={type}
                className={`text-black px-4 py-1 rounded-full border border-green-500 hover:bg-green-500 hover:text-white ${selected === type ? "bg-green-500 text-white" : ""}`}
                onClick={() => setSelected(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className=" w-full self-start">
            <div className=" flex flex-row justify-evenly gap-4 flex-wrap">
              {pizzas.map((pizza, index) => (
                <div
                  className={`max-w-[360px] ${selected === All || pizza.type === selected ? "" : "hidden"}`}
                  key={`${pizza.name}-${index}`}
                >
                  <MenuItemCard {...pizza} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MenuItemCard = ({ name, description, image, price }: Pizza) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="w-36 h-36 flex-shrink-0 flex-grow-0">
        <img src={image} className="w-36 h-36 rounded-2xl" />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <div className="text-green-500 text-2xl">{name}</div>
        <div className="text-gray-400 text-sm">{description}</div>
        <div className="text-black font-bold text-xl">$ {price}</div>
      </div>
    </div>
  );
};
