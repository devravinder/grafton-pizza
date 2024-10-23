import Icons from "components/icons";
import { restaurant, sections } from "constants";

export default function Contact() {
  return (
    <div className="w-full bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto h-full px-4">
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-row gap-2 pt-4 text-4xl">
            <span className="text-black font-satisfy">
              {sections.contact.title[0]}
            </span>
            <span className="text-green-500 font-satisfy">
              {sections.contact.title[1]}
            </span>
          </div>
          <div className="max-w-[680px] text-gray-600 text-center font-serif py-4">
            {sections.contact.description}
          </div>
          <div className="w-full rounded-xl shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(0,0,0,0.1)]">
            <div className="w-full bg-white rounded-t-xl flex flex-row flex-wrap justify-between p-8 gap-4">
              <div className="min-w-[250px]">
                <ContactItemCard
                  title="Location"
                  description={restaurant.address}
                  icon={<Icons.Location className="w-full h-full" />}
                />
              </div>
              <div className="min-w-[250px]">
                <ContactItemCard
                  title="Open Hours"
                  description={restaurant.workHours}
                  icon={<Icons.Clock className="w-full h-full" />}
                />
              </div>

              <div className="min-w-[250px]">
                <ContactItemCard
                  title="Email"
                  description={restaurant.email}
                  icon={<Icons.Email className="w-full h-full" />}
                />
              </div>

              <div className="min-w-[250px]">
                <ContactItemCard
                  title="Call"
                  description={restaurant.phone}
                  icon={<Icons.Call className="w-full h-full" />}
                />
              </div>
            </div>
            <div className="p-8 w-full flex flex-col small:flex-row gap-2 shadow-[-1px_-1px_5px_rgba(0,0,0,0.07)] rounded-b-xl ">
              <div className="w-full small:w-1/2">
                <img src="/assets/img/shop/shop-1.jpeg" />
              </div>
              <div className="min-w-28 min-h-60 flex-grow relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.4244276216496!2d-78.02794422445707!3d43.9919512304566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5dbf935acd0a5%3A0xc149153151ea1d16!2sGrafton%20Pizza!5e0!3m2!1sen!2sin!4v1729565730609!5m2!1sen!2sin"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactItemCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string[];
}) => {
  return (
    <div className=" flex flex-row gap-2 justify-start items-start">
      <div className="flex flex-row justify-center items-center w-12 h-12 p-3 rounded-full transition-all duration-500 text-green-500 hover:text-white bg-green-500 bg-opacity-10 hover:bg-opacity-100">
        {icon}
      </div>
      <div className="">
        <div className="font-semibold text-2xl py-1 text-gray-700">
          {title}:
        </div>
        {description.map((item, index) => (
          <div
            key={`phone_${index}`}
            className="text-sm text-gray-700 font-serif"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
