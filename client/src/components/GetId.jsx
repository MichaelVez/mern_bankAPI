import React from "react";
import { useState } from "react";
import { userAPI } from "../api";
import "./getId.css";
export default function GetId({ mapUsers }) {
  const [text, setText] = useState("");
  const handleClick = async () => {
    console.log(text);
    const { data } = await userAPI.get(`/getID/${text}`);
    console.log(data);
    mapUsers([data]);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className='getId'>
      <input
        type='text'
        placeholder='userId'
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>fetch user</button>
    </div>
  );
}
