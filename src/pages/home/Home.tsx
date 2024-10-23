import { navMenu, restaurant, sections } from "constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className={`w-[calc(100vw-5px)] h-screen bg-[url('/assets/img/bg/bg-1.jpg')] bg-cover bg-no-repeat `}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center px-4">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-row gap-2 text-4xl">
            <span className="text-green-500 font-satisfy">
              {sections.home.title[0]}
            </span>
            <span className="text-white font-satisfy">
              {sections.home.title[1]}
            </span>
          </div>
          <div className="text-white max-w-[480px] text-center font-serif">
            {sections.home.description}
          </div>
          <div className="flex flex-row gap-4">
            <a
              href={restaurant.orderLink}
              target="_blank"
              className="text-white px-6 py-2 rounded-full bg-transparent border-2 border-green-500 hover:bg-green-500 hover:text-white font-semibold"
            >
              Order Now
            </a>
            <Link
              to={`/#${navMenu.Menu}`}
              className="text-white px-6 py-2 rounded-full bg-transparent border-2 border-green-500 hover:bg-green-500 hover:text-white font-semibold"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
