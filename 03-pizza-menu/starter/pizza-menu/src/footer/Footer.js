import { useEffect, useState } from "react";
import "../index.css";
import { getRemainingTime } from "../utils/utils";

const workingHours = [9, 13];

function isRestoranOpened() {
  const currentDate = new Date();

  return (
    currentDate.getHours() >= workingHours[0] &&
    currentDate.getHours() < workingHours[1]
  );
}

function Order({ date }) {
  return (
    <div className="order">
      <p>We're currently opened</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Closed({ date }) {
  const willOpened = new Date();
  willOpened.setDate(willOpened.getDate() + 1);
  willOpened.setHours(workingHours[0], 0, 0, 0);

  return (
    <div className="order">
      <p>We are closed</p>
      <p>We'll be opened in {getRemainingTime(willOpened)}</p>
    </div>
  );
}

export function Footer() {
  let [date, updDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => updDate(new Date()), 1000);
  }, []);

  return (
    <footer className="footer">
      {isRestoranOpened() ? <Order date={date} /> : <Closed date={date} />}
    </footer>
  );
}
