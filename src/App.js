import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isError, setError] = useState(false);
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColor((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    if (value < 0 || value > 255) {
      console.log(value);
      setError(true);
    } else {
      setError(false);
    }
    console.log(isError);
  };
  return (
    <div className="App">
      <h1>Color Changer</h1>
      <label> Red:</label>
      <input
        type="number"
        name="red"
        value={color.red}
        onChange={handleChange}
      />
      <label>Green:</label>
      <input
        type="number"
        name="green"
        value={color.green}
        onChange={handleChange}
      />
      <label>Blue:</label>
      <input
        type="number"
        name="blue"
        value={color.blue}
        onChange={handleChange}
      />
      <div className="error">{isError ? "Error" : null}</div>
      <div
        className="box"
        style={{
          backgroundColor: `rgba(${color.red}, ${color.green}, ${color.blue})`
        }}
      >
        hello
      </div>
    </div>
  );
}
