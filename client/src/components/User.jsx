import React from "react";
import "./user.css";

export default function User({ user }) {
  return (
    <div className='user'>
      <div>id:{user._id}</div>
      <div>name:{user.name}</div>
      <div>cash:{user.cash}</div>
      <div>credit:{user.credit}</div>
    </div>
  );
}
