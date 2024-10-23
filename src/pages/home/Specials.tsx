import { sections } from "constants";
import { useState } from "react";

const specials = sections.specials.items;

export default function Specials() {
  const [selected, setSelected] = useState(specials[1]);
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto h-full">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-row gap-2 pt-4 text-4xl">
            <span className="text-green-500 font-satisfy">
              {sections.specials.title[0]}
            </span>
            <span className="text-black font-satisfy">
              {sections.specials.title[1]}
            </span>
          </div>
          <div className="max-w-[680px] text-gray-600 text-center font-serif">
            {sections.specials.description}
          </div>
          <div className="w-full flex flex-col small:flex-row gap-8 pt-8">
            <div className="small:hidden flex flex-col w-full">
              {specials.map((special) => (
                <div
                  key={special.name}
                  className={`px-4 py-2 text-xl font-serif cursor-pointer ${selected.name === special.name ? "text-white bg-green-500" : ""}`}
                  onClick={() => setSelected(special)}
                >
                  {special.name}
                </div>
              ))}
            </div>
            <div className="small:flex hidden flex-col flex-wrap flex-grow-0 flex-shrink-0">
              {specials.map((special) => (
                <div
                  key={special.name}
                  className={`pl-4 pr-8 py-2 text-xl font-serif cursor-pointer border-r-2 ${selected.name === special.name ? "text-green-500 border-green-500" : ""}`}
                  onClick={() => setSelected(special)}
                >
                  {special.name}
                </div>
              ))}
            </div>
            <div className="flex-grow flex flex-col-reverse small:flex-row gap-4 px-4 small:pl-0">
              <div className="flex-grow flex flex-col gap-4">
                <div className="font-satisfy text-3xl">{selected.heading}</div>
                {selected.description.map((desc, index) => (
                  <div key={index} className=" font-serif text-gray-600">
                    {desc}
                  </div>
                ))}
              </div>
              <div className="h-full w-full small:w-72 flex flex-col justify-center items-center">
                <div className="w-72 h-72">
                  <img
                    src={selected.image}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
