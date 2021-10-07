
import burger from './../assets/burger.png'
import cheese_burger from './../assets/cheese_burger.png'
import double_burger from './../assets/double_burger.png'
import double_cheese_burger from './../assets/double_cheese_burger.png'
import fries from './../assets/fries.png'
import soda from './../assets/soda.png'
export const products = [
  {
    id: 1,
    name: "Combo hamburguesa",
    title: "Combo Burger",
    type: "Combo",
    price: 9.99,
    img: burger,
    description: "Simple but jucy burger. Choose your toppings.",
    toppings: "soy los nuevos toppings"
  }, {
    id: 2,
    name: "Combo hamburguesa doble",
    title: "Combo Double Burger",
    type: "Combo",
    price: 10.99,
    img: double_burger,
    description: "Double jucy delicious burger. Choose your toppings.",
  }, {
    id: 3,
    name: "Combo hamburguesa con queso",
    title: "Combo Burger + Cheese",
    type: "Combo",
    price: 11.99,
    img: cheese_burger,
    description: "What’s a burger without cheese? Choose your toppings.",
  }, {
    id: 4,
    name: "Combo hamburguesa doble con queso",
    title: "Combo Double Burger + Cheese",
    type: "Combo",
    price: 15.49,
    img: double_cheese_burger,
    description: "What’s a burger without melted delicious DOUBLE cheese?",
  }, {
    id: 5,
    name: "Hamburguesa",
    title: "Burger",
    type: "Hamburguesa",
    price: 6.25,
    img: burger,
    description: "Simple but jucy burger. Choose your toppings.",
  }, {
    id: 6,
    name: "Hamburguesa doble",
    title: "Double Burger",
    type: "Hamburguesa",
    price: 8.49,
    img: double_burger,
    description: "Double jucy delicious burger. Choose your toppings.",
  }, {
    id: 7,
    name: "Hamburguesa con queso",
    title: "Burger + Cheese",
    type: "Hamburguesa",
    price: 9.00,
    img: cheese_burger,
    description: "What’s a burger without cheese? Choose your toppings.",
  }, {
    id: 8,
    name: "Hamburguesa doble con queso",
    title: "Double Burger + Cheese",
    type: "Hamburguesa",
    price: 13.00,
    img: double_cheese_burger,
    description: "What’s a burger without melted delicious DOUBLE cheese?",
  }, {
    id: 9,
    name: "Papas fritas",
    title: "Fries",
    type: "Papas",
    price: 3.49,
    img: fries,
    description: "Crunchy unique fries.",
  }, {
    id: 10,
    name: "Refresco",
    title: "Soda",
    type: "Refresco",
    price: 1.00,
    img: soda,
    description: "Accompany your burger with a soda.",
  },
]

