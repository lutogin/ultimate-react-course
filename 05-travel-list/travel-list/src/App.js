import LogoHeader from './logo-header/Logo-header';
import MainForm from './main-form/Main-form';
import PackingList from './packing-list/Packing-list';
import StatusFooter from './status-footer/Status-footer';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((el) => el.id !== id));
  }

  function handleCompleteItem(id) {
    setItems((items) => items.map((el) => el.id === id ? { ...el, packed: !el.packed } : el));
  }

  function handleClearItems() {
    if (window.confirm('Are you sure you want to delete all items?')) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <LogoHeader />
      <MainForm onAddItem={handleAddItem}/>
      <PackingList items={items} onRemoveItem={handleRemoveItem} onCompleteItem={handleCompleteItem} onClearItems={handleClearItems}/>
      <StatusFooter items={items}/>
    </div>
  );
}