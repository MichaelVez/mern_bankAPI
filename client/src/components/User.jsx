import React from "react";
import { userAPI } from "../api";
import "./user.css";

export default function User({ user, loadAllUsers }) {
  const handleClick = async (event) => {
    try {
      await userAPI.delete(`delete/${user._id}`);
      loadAllUsers();
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className='user'>
      <div>name: {user.name}</div>
      <div>passport ID:{user.passportID}</div>
      <div>cash: {user.cash}$</div>
      <div>credit: {user.credit}</div>
      <div>id: {user._id}</div>
      <button onClick={handleClick}>delete</button>
    </div>
  );
}
