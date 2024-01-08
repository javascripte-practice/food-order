import burgerImg from "./Food-item.jpeg";
import lavashImg from "./lavash.jpeg";
import tabakaImg from "./tabaka.webp";
import mevaDrinks from "./meva.jpeg";
import denaDrinks from "./dena.png";
import montellaDrinks from "./montella.jpeg";
import napalyonDisert from "./napalyon.png";
import blackPrinceDisert from "./qoratort.jpeg";
import disert3 from "./disert3.jpeg";

export const data = {
  "Fast-food": [
    {
      id: "1mkn",
      name: "Shaurma",
      price: "30.000",
      category: "fast-food",
      img: lavashImg,
    },
    {
      id: "2kmn",
      name: "Burger Combo",
      price: "40.000",
      category: "fast-food",
      img: burgerImg,
    },
    {
      id: "3kmn",
      name: "Tabaka",
      price: "45.000",
      category: "fast-food",
      img: tabakaImg,
    },
  ],
  Ichimliklar: [
    {
      id: "2mkn",
      name: "Meva",
      price: "12.000",
      category: "drinks",
      img: mevaDrinks,
    },
    {
      id: "3mkn",
      name: "Dena",
      price: "10.000",
      category: "drinks",
      img: denaDrinks,
    },
    {
      id: "4mkn",
      name: "Montella",
      price: "5.000",
      category: "drinks",
      img: montellaDrinks,
    },
  ],
  Shirinliklar: [
    {
      id: "3bkn",
      name: "Qora shahzoda",
      price: "30.000",
      category: "diserts",
      img: blackPrinceDisert,
    },
    {
      id: "4bkn",
      name: "Napalyon",
      price: "20.000",
      category: "diserts",
      img: napalyonDisert,
    },
    {
      id: "5bkn",
      name: "Antiqa",
      price: "10.000",
      category: "diserts",
      img: disert3,
    },
  ],
};
