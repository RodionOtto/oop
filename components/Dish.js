export class Dish {
  constructor(dish) {
    this.name = dish.name;
    this.price = dish.price;
    this.calories = dish.calories;
  }
  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getCalories() {
    return this.calories;
  }
}
