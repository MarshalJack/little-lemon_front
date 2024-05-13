import React, { useEffect, useState } from "react";
import "./Booking.css";

export default function Booking() {
  const [today, setTday] = useState(
    `${new Date().getFullYear()}-0${new Date().getMonth()}-${new Date().getDate()}`
  );
  useEffect(() => {
    return () => {
      const year = new Date().getFullYear();
      let month = new Date().getMonth();
      if (new Date().getMonth() < 10) {
        month = "0" + new Date().getMonth();
      }
      let day = new Date().getDate();
      if (new Date().getDate() < 10) {
        day = "0" + new Date().getDate();
      }
      setTday(`${year}-${month}-${day}`);
    };
  }, []);
  return (
    <form action="">
      <h1>Reservations</h1>
      <fieldset>
        <div className="book_radio">
          <label for="indoor">Indoor seating</label>
          <input id="indoor" type="radio" name="seating"></input>
        </div>
        <div className="book_radio">
          <label for="outdoor">Outdoor seating</label>
          <input id="outdoor" type="radio" name="seating"></input>
        </div>
        <div>
          <label for="book_date">Date</label>
          <input
            id="book_date"
            type="date"
            min={today}
            placeholder="Select Date"
          />
        </div>
        <div>
          <label for="diner_num">Number of Diners</label>
          <input id="diner_num" type="number" placeholder="No. of Diners" />
        </div>
        <div>
          <label for="occasion">Occasion</label>
          <select id="occasion" name="occasion" placeholder="Occasion">
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
            <option value="other">No Occasion</option>
          </select>
        </div>
        <div>
          <label for="book_time">Time</label>
          <input id="book_time" type="time" placeholder="Select Time" />
        </div>
      </fieldset>
    </form>
  );
}
