import React, { useState, useEffect } from "react";
import "./index.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  return <div className="clock">{date.toString()}</div>;
};

export default Clock;
