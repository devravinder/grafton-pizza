declare global {
  type Links = Record<string, string>;
  type PizzaType =
    | "Mexican"
    | "Italian"
    | "Chinese"
    | "Indian"
    | "American"
    | "Spicy"
    | "Vegan"
    | "Special"
    | "All";

  type Pizza = {
    name: string;
    type: PizzaType;
    description?: string;
    image: string;
    price: number;
  };
  type SpecialPizza = {
    name: string;
    heading: string;
    image: string;
    description: string[];
  };
}
export {};
