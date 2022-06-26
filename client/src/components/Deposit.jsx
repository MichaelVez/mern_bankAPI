import React, { useState } from "react";
import { userAPI } from "../api";
import "./deposit.css";
export default function Deposit({ loadAllUsers }) {
  const [form, setForm] = useState({
    _id: "",
    deposit: 0,
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleClick = () => {
    console.log(form);

    userAPI.put("/deposit", form);
    setForm({
      _id: "",
      deposit: 0,
    });
    loadAllUsers();
  };
  return (
    <div className='deposit'>
      <input
        name='_id'
        type='text'
        placeholder='from ID'
        value={form._id}
        onChange={handleChange}
      />
      <input
        name='deposit'
        type='number'
        placeholder='Amount to deposit'
        value={form.deposit}
        onChange={handleChange}
      />
      <button onClick={handleClick}>deposit</button>
    </div>
  );
}
