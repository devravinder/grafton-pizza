import Icons from "components/icons";
import { restaurant } from "constants";

// type SocialMedia =  "facebook" | "instagram" | "twitter" | "tiktok" | "youtube" | "snapchat" | "linkedIn"

const socialMediaIcons = {
  facebook: Icons.Facebook,
  instagram: Icons.Instagram,
  twitter: Icons.Twitter,
  tiktok: Icons.Tiktok,
  youtube: Icons.Youtube,
  snapchat: Icons.Snapchat,
  linkedIn: Icons.Linkedin,
  default: Icons.Web,
};

export default function Footer() {
  return (
    <footer className="h-72 w-full flex flex-col justify-center items-center gap-4 bg-[#1a1816d9] text-center p-8">
      <div className="font-satisfy text-3xl text-green-500">
        {restaurant.name}
      </div>
      <div className="font-serif text-white">
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
        fuga maxime saepe commodi placeat.
      </div>
      <div className="flex flex-row gap-4 py-2">
        {Object.entries(restaurant.socialMedia)
          .filter((item) => item[1])
          .map((item, index) => {
            const [key, value] = item;
            const Icon =
              socialMediaIcons[key as keyof typeof socialMediaIcons] ||
              socialMediaIcons.default;
            return (
              <a
                key={`sm_${index}`}
                target="_blank"
                href={value}
                className=" cursor-pointer flex justify-center items-center w-10 h-10 p-2 bg-green-500 bg-opacity-10 rounded-full text-green-500 hover:bg-opacity-100 hover:text-white transition-all duration-300"
              >
                <Icon className="w-8 h-8" />
              </a>
            );
          })}
      </div>
      <div className="text-white text-sm flex flex-col gap-1">
        <div className="">
          <span>© Copyright</span>{" "}
          <span className="font-semibold">Grafton Pizza</span>
          <span>. All Rights Reserved</span>
        </div>
        <div className="font-serif">
          <span>Designed by </span>
          <span className="text-green-500">Ravinder Reddy</span>
        </div>
      </div>
    </footer>
  );
}
