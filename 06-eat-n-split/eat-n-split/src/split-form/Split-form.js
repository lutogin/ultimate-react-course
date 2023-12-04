import { useState } from 'react';
import Button from '../common/Button';

const DEFAULT_BILL_ACTOR = 'you';

export default function SplitForm({ selectedFriend, onSplitBill }) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [payBillActor, setPayBillActor] = useState(DEFAULT_BILL_ACTOR);

  const friendExpense = payBillActor === DEFAULT_BILL_ACTOR ? billValue - yourExpense : yourExpense - billValue;

  function resetFrom() {
    setBillValue(0);
    setYourExpense(0);
    setPayBillActor('you');
  }

  function splitBill(e) {
    e.preventDefault();

    onSplitBill(selectedFriend, friendExpense);
    resetFrom();
  }

  return (
    <form className="form-split-bill" name="split-form">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="number"
        name="bill-value"
        value={billValue}
        onChange={(e) => setBillValue(Number.parseInt(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="number"
        name="your-expense"
        value={yourExpense}
        onChange={(e) => setYourExpense(Number.parseInt(e.target.value))}
      />

      <label>{`${selectedFriend.name}'s expense:`}</label>
      <input
        type="number"
        name=""
        value={friendExpense}
        disabled
      />

      <label>Who is paying the bill</label>
      <select
        name="pay-bill-acrtor"
        value={payBillActor}
        onChange={(e) => setPayBillActor(e.target.value)}
      >
        <option value={DEFAULT_BILL_ACTOR}>You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <Button onClick={splitBill}>Split bill</Button>
    </form>
  )
}