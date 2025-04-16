import { useEffect, useState } from "react";

export default function useSwitch() {
  const [val, setVal] = useState(false);

  const toggle = () => {
    setVal((prev) => !prev);
  };
  return [val, toggle];
}
