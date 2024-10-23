import { restaurant } from "constants";

export default function PageLoader() {
  return (
    <div className="w-full h-96 flex justify-center items-center bg-[#1a1816d9]">
      <div className="font-satisfy text-green-500 text-3xl ">
        {restaurant.name}
      </div>
    </div>
  );
}
