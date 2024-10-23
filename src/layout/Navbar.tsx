import Icons from "components/icons";
import { navMenu, restaurant } from "constants";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useClickAway, useWindowScroll } from "react-use";

export default function Navbar() {
  const { y } = useWindowScroll();
  const { hash } = useLocation();
  const closeRef = useRef<HTMLDivElement>(null);
  useClickAway(closeRef, () => {
    // wait until the scroll is triggered
    setTimeout(() => {
      setDropdownMenu(false);
    }, 150);
  });

  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <nav
      className={`w-full fixed z-10 py-2 transition-all duration-500 ease-in-out ${y > 0 ? " top-0 bg-[#1a1816d9]" : "top-16 bg-transparent"}`}
    >
      <header className="max-w-7xl mx-auto flex flex-row gap-4 justify-between px-4">
        <span className="text-3xl font-satisfy text-green-500 cursor-pointer">
          {restaurant.name}
        </span>
        <div className="hidden small:block">
          <ul className="flex flex-row flex-wrap justify-end items-center gap-1 ">
            {Object.keys(navMenu).map((menu) => (
              <li key={menu} className="min-w-16">
                <Link
                  className={`px-2 py-2  cursor-pointer hover:text-green-500 ${hash === `#${menu}` ? "text-green-500" : "text-white"}`}
                  to={`/#${menu}`}
                >
                  {menu}
                </Link>
              </li>
            ))}
            <li>
              <a
                className="px-2 py-2 text-white cursor-pointer flex flex-row gap-1 items-center hover:text-green-500"
                href={`tel:${restaurant.phone[0]}`}
              >
                <Icons.Call />
                <span>{restaurant.phone[0]}</span>
              </a>
            </li>
            <li className="min-w-16">
              <a
                href={restaurant.orderLink}
                target="_blank"
                className="w-full px-4 py-2 text-white cursor-pointer rounded-full hover:bg-green-600 bg-green-500"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
        <div className="block small:hidden">
          <div className="flex flex-row items-center gap-2">
            <a
              className="px-4 py-1 rounded-full text-white cursor-pointer flex flex-row gap-1 items-center bg-green-500"
              href={`tel:${restaurant.phone[0]}`}
            >
              <Icons.Call />
              <span>{"Call"}</span>
            </a>
            <div
              ref={closeRef}
              className="text-green-500 cursor-pointer"
              onClick={() => setDropdownMenu(!dropdownMenu)}
            >
              {dropdownMenu ? (
                <Icons.Close className="w-8 h-8" />
              ) : (
                <Icons.Menu className="w-8 h-8" />
              )}
            </div>
          </div>
        </div>
        {dropdownMenu && (
          <div className="absolute right-2 top-16">
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-green-500 bg-opacity-90 text-white">
              {Object.keys(navMenu).map((menu) => (
                <Link
                  className="hover:text-black text-white transition-all duration-200"
                  key={menu}
                  to={`/#${menu}`}
                >
                  {menu}
                </Link>
              ))}
              <a
                href={restaurant.orderLink}
                target="_blank"
                className="hover:text-black transition-all duration-450"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </header>
    </nav>
  );
}
