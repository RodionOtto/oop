import Dish from "./Dish.js";
import { Menu } from "../constants.js";

export class Salad extends Dish {
  constructor(dish, weight) {
    super(dish);
    this.price = (weight * dish.price) / 100;
    this.calories = (weight * dish.calories) / 100;
  }

  static salads = Menu.Salads;
}
