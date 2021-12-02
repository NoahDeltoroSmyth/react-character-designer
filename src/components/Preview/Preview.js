import React from 'react';
import './Preview.css';

export default function Preview({ head }) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}${head}-head.png`}></img>
    </div>
  );
}
