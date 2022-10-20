import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import Header from "./components/head";
import Color from "./components/color";
import Cards from "./components/shoes";
import Rock from "./components/arra";
import Smart from "./components/smart";
import Kore from "./components/list";

function App() {
  const smartphones = [
    { name: "Oneplus", cost: 24000 },
    { name: "vivo", cost: 15000 },
    { name: "apple", cost: 50000 },
    { name: "redmi", cost: 20000 },
    { name: "realme", cost: 17000 },
  ];

  const shoes = [
    { name: "adiddas", cost: 2500 },
    { name: "puma", cost: 4000 },
    { name: "woodlands", cost: 3500 },
    { name: "nike", cost: 5000 },
    { name: "bata", cost: 1000 },
  ];

  const [realname, changename] = React.useState(false);
  const [onColorChange, setColor] = React.useState(false);

  const [currentitems, updateitems] = React.useState(smartphones);
  const [currentproducts, updateproducts] = React.useState(shoes);

  const add = (currentIndex) => {
    const updatedData = currentproducts.map((shoe, index) => {
      if (currentIndex === index) {
        return { ...shoe, addCart: shoe.addCart + 1 };
      }
      return shoe;
    });
    updateproducts(updatedData);
  };
  const decrease = (currentIndex) => {
    const updatedData = currentproducts.map((shoe, index) => {
      if (currentIndex === index) {
        return { ...shoe, addCart: shoe.addCart - 1 };
      }
      return shoe;
    });
    updateproducts(updatedData);
  };

  const handleToggleCart = (currenIndex) => {
    const updatedData = currentproducts.map((shoe, index) => {
      if (currenIndex === index) {
        return { ...shoe, addCart: 1 };
      }
      return shoe;
    });
    updateproducts(updatedData);
  };

  const rendershoes = currentproducts.map((shoe, index) => {
    return (
      <div className="shoebrand">
        <h4>{shoe.name}</h4>
        <b>{shoe.cost}</b>
        <div className="count">
          <span className="countout">{shoe.addCart}</span>
          {!shoe.addCart ? (
            <div className="btncontainer">
              <button
                className="btncontrol"
                onClick={() => handleToggleCart(index)}
              >
                Add to Cart
              </button>
            </div>
          ) : (
            <div className="btncontainer">
              <button className="btncontrol" onClick={() => add(index)}>
                +
              </button>
              <button className="btncontrol" onClick={() => decrease(index)}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });

  function handlefollow(follower, index) {
    console.log("index", index);
    console.log("follower", follower);
    const mutated = currentitems.map((follower, ind) => {
      if (ind === index) {
        return { ...follower, isFollowing: !follower.isFollowing };
      } else {
        return follower;
      }
    });
    updateitems([...mutated]);
    console.log("mutated", mutated);
  }
  console.log(currentitems);

  const rendersmartphones = currentitems.map((tabs, index) => {
    return (
      <div className="brands">
        <h4>{tabs.name} </h4>
        <i>{tabs.cost}</i>
        <div className="replic">
          <button className="toggle" onClick={() => handlefollow(tabs, index)}>
            {tabs.isFollowing ? "unfollow" : "follow"}
          </button>
        </div>
      </div>
    );
  });

  const backcolor = (
    <h1
      className="backcolor"
      onClick={(e) => {
        e.preventDefault();
        setColor(true);
      }}
    >
      change
    </h1>
  );
  const reset = (
    <button
      className="reset"
      onClick={(e) => {
        e.preventDefault();
        setColor(false);
      }}
    >
      reset
    </button>
  );

  const hamburger = (
    <b
      className="hamburger"
      onClick={(e) => {
        e.preventDefault();
        changename(true);
      }}
    >
      Menu
    </b>
  );

  const closeing = (
    <div className="change">
      <div className="changemenu">
        <h4>Menu</h4>
        <b
          onClick={(e) => {
            e.preventDefault();
            changename(false);
          }}
        >
          close
        </b>
      </div>
    </div>
  );

  const colorchange = (
    <div
      className="coloring"
      style={{ backgroundColor: onColorChange ? "lightblue" : "lightgreen" }}
    >
      {backcolor}
      {reset}
    </div>
  );

  const header = (
    <div className="nav">
      <h3>LOGO</h3>
      <a href="#">Home</a>
      <a href="#">Book</a>
      <a href="#">our Services</a>
      <a href="#">About us</a>
      <div className="but">
        <button>Login</button>
        {hamburger}
      </div>
    </div>
  );

  const head = (
    <div className="hero">
      <h2>Hero</h2>
    </div>
  );

  const increment = () => alert("hello");

  return (
    <React.Fragment>
      {realname && closeing}
      {hamburger}
      {header}
      {colorchange}

      <div className="shoesection">{rendershoes}</div>
      <div className="mobilesection">{rendersmartphones}</div>
      <div className="bran">
        {smartphones.map((product, index) => {
          return (
            <Smart
              key={index}
              name={product.name}
              price={product.cost}
              increment={increment}
            />
          );
        })}
      </div>
      <Header />
      <Color />
      <Cards />
      <Rock />
      <Kore />
    </React.Fragment>
  );
}
export default App;
