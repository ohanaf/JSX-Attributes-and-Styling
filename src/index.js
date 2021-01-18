import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img
      className="food-img"
      src="https://thenovicechefblog.com/wp-content/uploads/2012/01/How-to-cook-bacon-in-the-oven-1-sm-735x490.jpg"
      alt="bacon-img"
    />
    <img
      className="food-img"
      src="https://www.enriquetomas.com/es/blog/wp-content/uploads/2018/06/Jam%C3%B3n-serrano-vs-prosciutto-italiano-2.jpg.webp"
      alt="jamon-img"
    />
    <img
      className="food-img"
      src="https://www.loveandoliveoil.com/wp-content/uploads/2015/03/soy-sauce-noodlesH2.jpg"
      alt="noodles-img"
    />
  </div>,
  document.getElementById("root")
);
