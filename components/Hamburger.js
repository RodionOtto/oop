import Dish from "./Dish.js";
import { Menu } from "../constants.js";

export class Hamburger extends Dish {
  constructor(dish, stuffing) {
    super(dish);
    this.price = dish.price + stuffing.price;
    this.calories = dish.calories + stuffing.calories;
    this.name = stuffing.name;
    this.size = dish.size;
  }

  static hamburger = Menu.Hamburgers;
  static stuffingForBurger = Menu.Stuffing;

  getSize() {
    return this.size;
  }

  getStuffing() {
    return this.stuffing;
  }
}
