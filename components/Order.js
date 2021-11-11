import Hamburger from "./components/Hamburger.js";
import Salad from "./components/Salad.js";
import Drink from "./components/Drink.js";

export class Order {
  constructor() {
    this.order = [];
    this.alreadyPaid = false;
  }

  addDishToOrder(dish, stuffing, weight) {
    if (!this.alreadyPaid)
      if (dish && stuffing) {
        this.order.push(new Hamburger(dish, stuffing));
      } else if (dish && weight) {
        this.order.push(new Salad(dish, weight));
      } else {
        this.order.push(new Drink(dish));
      }
    else {
      console.log("Нельзя добавить что-либо в заказ, так как он уже оплачен.");
    }
  }

  deleteDishFromOrder(dish) {
    if (!this.alreadyPaid) {
      this.order = this.order.reduce((item) => item !== dish);
    } else {
      console.log("Нельзя удалить что-либо из заказа, так как он уже оплачен.");
    }
  }

  calculatePrice() {
    return this.order.reduce((sum, current) => sum + current.getPrice(), null);
  }

  calculateCalories() {
    return this.order.reduce(
      (sum, current) => sum + current.getCalories(),
      null
    );
  }

  payAtCashier() {
    this.alreadyPaid = true;
  }
}
