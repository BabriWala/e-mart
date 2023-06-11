import "./Home.css";
import Logo from "../../assets/images/logo.png";
import Cart from "../../assets/images/cart.png";
import Notification from "../../assets/images/notification.png";
import Men from "../../assets/images/men.png";
import Steak from "../../assets/images/steak.png";
// import Carrot from "../../assets/images/Carrot.png";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const subCategories = categories.map((categories) => categories.sub_category);
  const newSubCategories = subCategories.flatMap((e) => e);
  const subCategoriesItem = newSubCategories.map((categories) => categories.items);
  const newSubCategoriesItem = subCategoriesItem.flatMap((e) => e);
  

  useEffect(() => {
    fetch("https://grocerywatch.herokuapp.com/market/data/")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  


  if (!categories) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <header className="">
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
            <button key={category.id} className="">
              <img src={category.image} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="sub-categories" className="container">
        <h2>Sub-Cateogories</h2>
        <div className="sub-categories-item">
          {newSubCategories.map((subCategories) => (

            <button className="">
              <img src={subCategories.image} />
              <span>{subCategories.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="items" className="container">
        <h2>Items</h2>
        <span className="items-underline"></span>
        <div className="items-container">
            {
                newSubCategoriesItem.map(item => <div className="items-container-item">
                <img src={item.image} />
                <h3>{item.name}</h3>
                <div>
                  <span>${item.price}</span>
                  <button>Add to cart</button>
                </div>
              </div>)
            }
        </div>
      </section>
    </div>
  );
};

export default Home;
