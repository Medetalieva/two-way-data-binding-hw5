import { useState } from "react";
import "./GetValue.css";
import React from "react";


const GetValue = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [select, setSelect] = useState("");

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const writeHandler = (event) => {
    setText(event.target.value);
  };

  const selectHandler = (event) => {
    setSelect(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(value, text, select);
    setText("");
    setValue("");
    setSelect("");
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={value} placeholder='Input' />
        <select onChange={selectHandler} value={select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <textarea onChange={writeHandler} value={text} placeholder='Text' />
        <div>
        <button type="submit">Get value</button>
        </div>
      </form>
    </div>
  );
};

export default GetValue;