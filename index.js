import Hamburger from "./components/Hamburger.js";
import Salad from "./components/Salad.js";
import Drink from "./components/Drink.js";
import Order from "./components/Order.js";

let testOrder = new Order();

testOrder.addDishToOrder(
  Hamburger.hamburger.SIZE_LARGE,
  Hamburger.stuffingForBurger.STUFFING_POTATO
);

testOrder.addDishToOrder(Salad.salads.SALAD_OLIVIE, null, 350);

testOrder.payAtCashier();

testOrder.addDishToOrder(Drink.drinks.DRINK_COLA);
testOrder.deleteDishFromOrder(Hamburger.hamburger.SIZE_LARGE);

console.log(
  `Итоговая стоимость заказа: ${testOrder.calculatePrice()} тугриков. Спасибо за заказ!`
);
console.log(
  `Энергетическая ценность заказа: ${testOrder.calculateCalories()} каллорий`
);
