import React from 'react';
import './Preview.css';

export default function Preview({ head, middle, bottom }) {
  return (
    <div className="images">
      <img alt={head} height="100" src={`${process.env.PUBLIC_URL}${head}-head.png`}></img>
      <img alt={middle} height="100" src={`${process.env.PUBLIC_URL}${middle}-middle.png`}></img>
      <img alt={bottom} height="100" src={`${process.env.PUBLIC_URL}${bottom}-pants.png`}></img>
    </div>
  );
}
