import { MouseEvent, useState } from "react";

function ReactEventHandler() {
  const [name, setName] = useState("");
  const ButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    setName("Hello World");
    console.log(e);
  };

  return (
    <div>
      <button onClick={ButtonClick}>Click me</button>
      <h4>{name}</h4>
    </div>
  );
}

function InputHandler() {
  const [name, setName] = useState("");
  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={InputChange} />
    </div>
  );
}

export default { ReactEventHandler, InputHandler };
