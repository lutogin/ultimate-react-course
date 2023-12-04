export function Pizza(props) {
  const {
    data: { name, ingredients, price, soldOut, photoName },
  } = props;
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}
