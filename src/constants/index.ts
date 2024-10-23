export const navMenu = {
  Home: "Home",
  Menu: "Menu",
  Specials: "Specials",
  Contact: "Contact",
};

export const restaurant = {
  name: "Grafton Pizza",
  address: ["10843 County Rd 2", "Grafton, ON K0K 2G0, Canada"],
  phone: ["+(91)9666366139", "+(91)7075792886"],
  email: ["support@grafton.pizza", "order@grafton.pizza"],
  workHours: ["Monday - Saturay", "11:00 AM- 12:00 AM"],
  socialMedia: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://x.com/?lang=en",
    tiktok: "https://www.tiktok.com/",
    youtube: "",
    snapchat: "",
    linkedIn: "",
  },
  orderLink:
    "https://www.doordash.com/store/alexandra's-pizza-charlottetown-1564376/?cursor=eyJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNF19&pickup=false",
};

const pizzas: Pizza[] = [
  {
    name: "Meat",
    type: "American",
    description: "Tomato sauce, mozzarella, and meat",
    image: "/assets/img/menu/5.webp",
    price: 5.95,
  },
  {
    name: "American",
    type: "American",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/9.webp",
    price: 8.95,
  },
  {
    name: "Chinese",
    type: "Chinese",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/7.webp",
    price: 8.95,
  },
  {
    name: "Hawaiian",
    type: "Indian",
    description: "Tomato sauce, mozzarella, ham, pineapple, and basil",
    image: "/assets/img/menu/3.webp",
    price: 5.95,
  },
  {
    name: "Indian",
    type: "Indian",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/8.webp",
    price: 8.95,
  },
  {
    name: "Italian",
    type: "Italian",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/6.webp",
    price: 12.95,
  },
  {
    name: "Margherita",
    type: "Mexican",
    description: "Tomato sauce, mozzarella, and basil",
    image: "/assets/img/menu/1.webp",
    price: 5.95,
  },
  {
    name: "Peperoni",
    type: "Mexican",
    description: "Tomato sauce, mozzarella, and pepperoni",
    image: "/assets/img/menu/2.webp",
    price: 5.95,
  },
  {
    name: "Mexican",
    type: "Mexican",
    description: "Tomato sauce, mozzarella, and chicken",
    image: "/assets/img/menu/5.webp",
    price: 6.95,
  },
  {
    name: "Very Special",
    type: "Special",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/12.webp",
    price: 8.95,
  },
  {
    name: "Some Special",
    type: "Special",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/1.webp",
    price: 8.95,
  },
  {
    name: "Local Special",
    type: "Special",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/2.webp",
    price: 8.95,
  },
  {
    name: "Best Special",
    type: "Special",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/3.webp",
    price: 8.95,
  },
  {
    name: "Spicy",
    type: "Spicy",
    description: "Tomato sauce, mozzarella, and pepperoni",
    image: "/assets/img/menu/6.webp",
    price: 5.95,
  },
  {
    name: "Spicy",
    type: "Spicy",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/10.webp",
    price: 8.95,
  },
  {
    name: "Veggie",
    type: "Vegan",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/4.webp",
    price: 5.95,
  },
  {
    name: "Vegan",
    type: "Vegan",
    description: "Tomato sauce, mozzarella, and vegetables",
    image: "/assets/img/menu/11.webp",
    price: 8.95,
  },
];

const specialPizzas: SpecialPizza[] = [
  {
    name: "Hot Margaritta Pizza",
    heading: "Et blanditiis nemo veritatis excepturi",
    image: "/assets/img/specials/1.jpg",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus deserunt libero ea quasi nemo",
      "Sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis ducimus id veniam, laborum aliquam tempora minus iste est sapiente ex porro inventore ratione recusandae architecto sunt aperiam nihil. Esse? odit sunt aspernatur officia nulla et quis pariatur. Obcaecati sapiente corrupti quia qui et? ",
    ],
  },
  {
    name: "Italian Veggie",
    heading: "Blanditiis vnemo veritatis excepturi",
    image: "/assets/img/specials/2.jpg",
    description: [
      "Vero doloribus deserunt libero ea quasi nemo Vero doloribus deserunt libero ea quasi nemo",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus deserunt libero ea quasi nemo",
    ],
  },
  {
    name: "Hawaiian",
    heading: "Nemo excepturi veritatis excepturi",
    image: "/assets/img/specials/3.jpg",
    description: [
      "Doloribus deserunt libero ea quasi nemo",
      "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus deserunt libero ea quasi nemo",
      "Sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis ducimus id veniam, laborum aliquam tempora minus iste est sapiente ex porro inventore ratione recusandae architecto sunt aperiam nihil. Esse? odit sunt aspernatur officia nulla et quis pariatur. Obcaecati sapiente corrupti quia qui et? ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus deserunt libero ea quasi nemo",
      "Sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis ducimus id veniam, laborum aliquam tempora minus iste est sapiente ex porro inventore ratione recusandae architecto sunt aperiam nihil. Esse? odit sunt aspernatur officia nulla et quis pariatur. Obcaecati sapiente corrupti quia qui et? libero Vero doloribus deserunt  ea quasi nemo",
      "Vero doloribus deserunt libero ea quasi nemo",
    ],
  },
  {
    name: "Spicy Moghlai Thai",
    heading: "Excepturi Nemo e veritatis excepturi",
    image: "/assets/img/specials/4.jpg",
    description: [
      "Libero Doloribus deserunt  ea quasi nemo",
      " Doloribus deserunt libero ea quasi nemo",
      "Vero doloribus deserunt libero ea quasi nemo",
    ],
  },
  {
    name: "Vegan Indian",
    heading: "Nemo excepturi veritatis excepturi",
    image: "/assets/img/specials/5.jpg",
    description: [
      "Doloribus deserunt libero ea quasi nemo",
      "libero Vero doloribus deserunt  ea quasi nemo",
      "Vero doloribus deserunt libero ea quasi nemo",
    ],
  },
];
export const sections = {
  home: {
    title: ["Grafton", "Pizza"],
    description:
      "At our pizza shop, we serve handcrafted pizzas made with fresh, locally sourced ingredients and each slice is packed with flavor and love.",
  },
  menu: {
    title: ["Check our tasty", "Menu"],
    items: pizzas,
  },
  specials: {
    title: ["Check our", "Specials"],
    description:
      "Our special pizzas offer bold, unique flavors like BBQ chicken with smoky sauce and caramelized onions, or spicy pepperoni with a hint of honey. Each is a delicious twist on traditional favorites",
    items: specialPizzas,
  },
  contact: {
    title: ["Contact", "Us"],
    description:
      "We're always happy to hear from you. Get in touch with us using the form below or via our social media channels.",
  },
};
