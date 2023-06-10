import React from "react";
import '../../styles/style.css';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import Notification from '../assets/notification.png'
import Men from '../assets/men.png';
import Steak from '../assets/steak.png';
import Carrot from '../assets/Carrot.png';

const Home = () => {
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
      </section>
      <section id="sub-categories" className="container">
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
      </section>
      <section id="items" className="container">
        <h2>Items</h2>
        <span className="items-underline"></span>
        <div className="items-container">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
