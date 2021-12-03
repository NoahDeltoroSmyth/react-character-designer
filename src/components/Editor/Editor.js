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
  setHeadCount,
  setMiddleCount,
  setBottomCount,
}) {
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };

  const handleSetHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  const handleSetMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };
  const handleSetBottom = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevState) => prevState + 1);
  };

  return (
    <div className="editor">
      <div className="head">
        <select value={head} onChange={handleSetHead}>
          <option value="bird">Bird</option>
          <option value="duck">Duck</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
        </select>
      </div>
      <div className="middle">
        <select value={middle} onChange={handleSetMiddle}>
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
        </select>
      </div>
      <div className="bottom">
        <select value={bottom} onChange={handleSetBottom}>
          <option value="leg">Single Leg</option>
          <option value="white">White Pants</option>
          <option value="blue">Blue Pants</option>
        </select>
      </div>
      <div className="catch-phrase">
        <label>Add a catchphrase!</label>
        <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)}></input>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}
