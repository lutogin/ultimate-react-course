import Item from './Item';
import { useState } from 'react';

export default function PackingList({ items, onRemoveItem, onCompleteItem, onClearItems }) {
  const [sortType, setSortType] = useState('input');
  const sortedItems = [...items];

  switch (sortType) {
    case 'input':
      break;
    case 'description':
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
      break;
    case 'packed':
      sortedItems.sort((a, b) => Number(a) - Number(b));
      break;
    default:
      throw new Error(`Sort method (${sortType}) is not allowed`);
  }

  return (
    <div className="list">
      <ul>
        {
          sortedItems.map(el => <Item key={el.id} data={el} onRemoveItem={onRemoveItem} onCompleteItem={onCompleteItem}/>)
        }
      </ul>

      <div className="actions">
        <select
          name="selectSort"
          id="sort"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClearItems}>Clear the list</button>
      </div>
    </div>
  )
}