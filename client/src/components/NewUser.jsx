import axios from "axios";
import React from "react";
import { useState } from "react";
import { User } from "../";
import { userAPI } from "../api";
import "./newUser.css";
export default function NewUser({ loadAllUsers }) {
  const [form, setForm] = useState({
    name: "",
    passportID: 0,
    cash: 0,
    credit: 0,
  });
  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log(form);
      // userAPI.post("/newUser", form);
      const data = await userAPI.post("/newUser", form);
      console.log(data);
      setForm({
        name: "",
        passportID: "",
        cash: 0,
        credit: 0,
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
          name='name'
          type='text'
          onChange={onChangeFunc}
          placeholder='Full name'
        />
        <input
          name='passportID'
          type='number'
          onChange={onChangeFunc}
          placeholder='passport ID'
        />
        <input
          name='cash'
          type='number'
          onChange={onChangeFunc}
          placeholder='Cash'
        />
        <input
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
