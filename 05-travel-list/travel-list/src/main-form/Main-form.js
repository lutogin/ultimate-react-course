import { useState } from 'react';

export default function MainForm({ items, onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function resetForm() {
    setDescription("");
    setQuantity(1);
  }

  function handleSbmt(e) {
    e.preventDefault();

    if (!description) {
      return;
    }

    const newItem = {description, quantity, packed: false, id: Date.now()};
    onAddItem(newItem);

    resetForm();
  }

  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
      <form onSubmit={handleSbmt}>
        <input
          type="number"
          name="quantity"
          max="99"
          min="1"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
        />
        <input
          type="text"
          name="item"
          placeholder="Ente item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}