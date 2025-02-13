import { useEffect, useState } from "react";

export const ToDoDate = () => {
  const [timeDate, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      // console.log(`${formattedDate} - ${formattedTime}`);
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); //this function provided by useeffect .useeffect is like setInterval
  }, []);
  return <h2>{timeDate}</h2>;
};
