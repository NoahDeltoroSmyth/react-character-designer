import React from 'react';

import './Editor.css';

export default function Editor({ head, setHead, middle, setMiddle, bottom, setBottom }) {
  return (
    <div>
      <select value={head} onChange={(e) => setHead(e.target.value)}>
        <option value="bird">Bird</option>
        <option value="duck">Duck</option>
        <option value="dog">Dog</option>
        <option value="horse">Horse</option>
      </select>
      <select value={middle} onChange={(e) => setMiddle(e.target.value)}>
        <option value="blue">Blue</option>
        <option value="fancy">Fancy</option>
        <option value="pink">Pink</option>
        <option value="red">Red</option>
      </select>
      <select value={bottom} onChange={(e) => setBottom(e.target.value)}>
        <option value="single-leg">Single Leg</option>
        <option value="white-pants">White Pants</option>
        <option value="blue-jeans">Blue Jeans</option>
      </select>
      <input name="phrase" type="text"></input>
      <button>Add</button>
    </div>
  );
}
