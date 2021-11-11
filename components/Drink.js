import Dish from "./Dish.js";
import { Menu } from "../constants.js";

export class Drink extends Dish {
  static drinks = Menu.Drinks;
}
