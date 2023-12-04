import { Pizza } from "./pizza/Pizza";
import { pizzaData } from "../data";
import "../index.css";

export function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData?.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza data={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}
