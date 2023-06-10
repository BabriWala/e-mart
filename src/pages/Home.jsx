import React from "react";
import "../../styles/style.css";
import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";
import Notification from "../assets/notification.png";
import Men from "../assets/men.png";
import Steak from "../assets/steak.png";
import Carrot from "../assets/Carrot.png";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesActive, setCategoriesActive] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);
  // console.log(categories[0].strCategoryThumb)
  // console.log(categories[0].strCategoryThumb)

  

  // console.log(items)
  // console.log(ingredient);
  const categoriesHandleOnClick = (category) => {
    // setCategoriesActive(true)
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => response.json())
        .then((data) => setSubCategories(data.meals));
    } catch (err) {
      console.log(err);
    }
  };

  const itemsHandlClick = (name) => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => response.json())
        .then((data) => setItems(data.meals[0].strIngredient1));
    } catch (err) {
      console.log(err);
    }

    try{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${items}`)
          .then((res) => res.json())
          .then((data) => setIngredient(data.meals));
    }catch (err) {
      console.log(err);
    }

  };

  // console.log(items)
  // console.log(subCategories)
  // console.log(categories)
  if (!categories) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <header className="container">
        <nav>
          <div className="left-side">
            <img src={Logo} />
          </div>
          <div className="right-side">
            <div className="cart-image">
              <img className="cart" src={Cart} />
            </div>
            <img src={Notification} />
            <img src={Men} />
          </div>
        </nav>
      </header>
      <section id="categories" className="container">
        <h2>Categories</h2>
        <div className="categories-item">
          {categories.map((category) => (
            <button
              key={category.idCategory}
              className=""
              onClick={() => categoriesHandleOnClick(category.strCategory)}
            >
              <img src={category.strCategoryThumb} />
              <span>{category.strCategory}</span>
            </button>
          ))}
          {/* <button>
            <img src={Steak} />
            <span>Meat</span>
          </button>
          <button>
            <img src={Steak} />
            <span>Meat</span>
          </button>
          <button>
            <img src={Steak} />
            <span>Meat</span>
          </button> */}
        </div>
      </section>

      {subCategories && (
        <section id="sub-categories" className="container">
          <h2>Sub-Cateogories</h2>
          <div className="sub-categories-item">
            {subCategories.map((category) => (
              <button
                className=""
                key={category.idMeal}
                onClick={() => itemsHandlClick(category.strMeal)}
              >
                <img src={category.strMealThumb} />
                <span>{category.strMeal.slice(0, 6)}</span>
              </button>
            ))}

            {/*         <button className="active">
              <img src={Steak} />
              <span>Meat</span>
            </button>
            <button>
              <img src={Steak} />
              <span>Meat</span>
            </button>
            <button>
              <img src={Steak} />
              <span>Meat</span>
            </button> */}
          </div>
        </section>
      )}

      {/* <section id="sub-categories" className="container">
        <h2>Sub-Cateogories</h2>
        <div className="sub-categories-item">
          <button className="active">
            <img src={Steak} />
            <span>Meat</span>
          </button>
          <button>
            <img src={Steak} />
            <span>Meat</span>
          </button>
          <button>
            <img src={Steak} />
            <span>Meat</span>
          </button>
        </div>
      </section> */}

      <section id="items" className="container">
        <h2>Items</h2>
        <span className="items-underline"></span>
        <div className="items-container">
          {ingredient.map((item) => (
              <div className="items-container-item" key={item.idMeal}>
                <img src={item.strMealThumb} />
                <h3>{item.strMeal}</h3>
                <div>
                  <span>$24,10</span>
                  <button>Add to cart</button>
                </div>
              </div>
          ))}
{/* 
          <div className="items-container-item">
            <img src={Carrot} />
            <h3>Carrot</h3>
            <div>
              <span>$24,10</span>
              <button>Add to cart</button>
            </div>
          </div>
          <div className="items-container-item">
            <img src={Carrot} />
            <h3>Carrot</h3>
            <div>
              <span>$24,10</span>
              <button>Add to cart</button>
            </div>
          </div>
          <div className="items-container-item">
            <img src={Carrot} />
            <h3>Carrot</h3>
            <div>
              <span>$24,10</span>
              <button>Add to cart</button>
            </div>
          </div>
          <div className="items-container-item">
            <img src={Carrot} />
            <h3>Carrot</h3>
            <div>
              <span>$24,10</span>
              <button>Add to cart</button>
            </div>
          </div>
          <div className="items-container-item">
            <img src={Carrot} />
            <h3>Carrot</h3>
            <div>
              <span>$24,10</span>
              <button>Add to cart</button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
