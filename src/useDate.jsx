import { useEffect, useState } from "react";

export default function useDate() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate((prev) => new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return date;
}
