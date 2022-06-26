import React, { useState } from "react";
import { userAPI } from "../api";
import "./withdraw.css";
export default function Withdraw({ loadAllUsers }) {
  const [form, setForm] = useState({
    _id: "",
    withdraw: 0,
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleClick = async () => {
    console.log(form);
    const res = await userAPI.put("/withdraw", form);
    console.log(res);
    setForm({
      _id: "",
      withdraw: 0,
    });
    loadAllUsers();
  };
  return (
    <div className='withdraw'>
      <input
        name='_id'
        type='text'
        placeholder='from ID'
        value={form._id}
        onChange={handleChange}
      />
      <input
        name='withdraw'
        type='number'
        placeholder='Amount to withdraw'
        value={form.withdraw}
        onChange={handleChange}
      />
      <button onClick={handleClick}> Withdraw</button>
    </div>
  );
}
