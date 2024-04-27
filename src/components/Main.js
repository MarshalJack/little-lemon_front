import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <section className="specials">
        <div>
          <h2>Specials</h2> <button className="order_btn">Online Menu</button>
        </div>
        <ul>
          <li className="dish">
            <img src="img/greek salad.jpg" />
            <div className="dish_description">
              <div className="dish_header">
                <h3>Greek salad</h3> <div className="dish_price">$12.99</div>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button>Order a delivery</button>
            </div>
          </li>
          <li className="dish">
            <img src="img/greek salad.jpg" />
            <div className="dish_description">
              <div className="dish_header">
                <h3>Greek salad</h3> <div className="dish_price">$12.99</div>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button>Order a delivery</button>
            </div>
          </li>
          <li className="dish">
            <img src="img/greek salad.jpg" />
            <div className="dish_description">
              <div className="dish_header">
                <h3>Greek salad</h3> <div className="dish_price">$12.99</div>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button>Order a delivery</button>
            </div>
          </li>
        </ul>
      </section>
      <section className="testimonials"></section>
      <section className="about"></section>
    </main>
  );
}
