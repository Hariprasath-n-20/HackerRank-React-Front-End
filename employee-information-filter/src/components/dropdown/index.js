import React, { useState } from "react";
import "./index.css";

function Dropdown({ options, labelText, onChange }) {
  const [Option, setOption] = useState(labelText);

  const optionChange = (e) => {
    setOption(e.target.value);
    onChange(e);
  };

  return (
    <div className="elementSet">
      <select 
        onChange={optionChange} 
        data-testid="dropdown" 
        value={Option}
      >
        <option value={labelText} disabled>{labelText}</option>
        {
          options.map((option) => (
            <option value={option}>{option}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Dropdown;