import { useState } from "react";

const ReactState = () => {
  const [counter, setCounter] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div>{counter}</div>;
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default ReactState;
