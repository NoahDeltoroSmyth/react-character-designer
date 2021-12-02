import React from 'react';

import './Editor.css';

export default function Editor({
  head,
  setHead,
  middle,
  setMiddle,
  bottom,
  setBottom,
  phrase,
  setPhrase,
  setPhraseList,
}) {
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };

  const handleSetHead = (e) => {
    setHead(e.target.value);
  };

  const handleSetMiddle = (e) => {
    setMiddle(e.target.value);
  };

  const handleSetBottom = (e) => {
    setBottom(e.target.value);
  };

  return (
    <div>
      <div className="head">
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="bird-head">Bird</option>
          <option value="duck">Duck</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
        </select>
      </div>
      <select value={middle} onChange={handleSetMiddle}>
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
      <input value={phrase} onChange={handleSetBottom} type="text"></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
