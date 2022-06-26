import React from "react";
import "./user.css";

export default function User({ user }) {
  return (
    <div className='user'>
      <div>name: {user.name}</div>
      <div>passport ID:{user.passportID}</div>
      <div>cash: {user.cash}$</div>
      <div>credit: {user.credit}</div>
      <div>id: {user._id}</div>
    </div>
  );
}
