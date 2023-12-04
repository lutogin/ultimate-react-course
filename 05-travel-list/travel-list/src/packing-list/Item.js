export default function Item({ data, onRemoveItem, onCompleteItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={data.packed}
        onChange={(e) => onCompleteItem(data.id)}/>

      <span style={ data.packed ? { textDecoration: "line-through" } : {}}>
        {`${data.quantity} ${data.description}`}
      </span>
      <button onClick={() => onRemoveItem(data.id)}>❌</button>
    </li>
  )
}