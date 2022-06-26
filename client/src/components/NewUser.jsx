import React from "react";
import { useState } from "react";
import { userAPI } from "../api";
import "./newUser.css";
export default function NewUser({ loadAllUsers }) {
  const [form, setForm] = useState({
    name: "",
    passportID: "",
    cash: "",
    credit: "",
  });
  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log(form);
      // userAPI.post("/newUser", form);
      await userAPI.post("/newUser", form);
      setForm({
        name: "",
        passportID: "",
        cash: "",
        credit: "",
      });
      loadAllUsers();
    } catch (e) {
      console.log("here");

      console.log(e);
    }
  };
  const onChangeFunc = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='newUser'>
      <form onSubmit={submit}>
        <input
          value={form.name}
          name='name'
          type='text'
          onChange={onChangeFunc}
          placeholder='Full name'
        />
        <input
          value={form.passportID}
          name='passportID'
          type='number'
          onChange={onChangeFunc}
          placeholder='passport ID'
        />
        <input
          value={form.cash}
          name='cash'
          type='number'
          onChange={onChangeFunc}
          placeholder='Cash'
        />
        <input
          value={form.credit}
          name='credit'
          type='number'
          onChange={onChangeFunc}
          placeholder='Credit'
        />
        <button type='submit'>Create new</button>
      </form>
    </div>
  );
}
