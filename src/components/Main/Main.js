import { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import background from '../../../src/bart.jpeg';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Preview {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
      <Editor
        {...{
          head,
          setHead,
          middle,
          setMiddle,
          bottom,
          setBottom,
          phrase,
          setPhrase,
          phraseList,
          setPhraseList,
          setHeadCount,
          setMiddleCount,
          setBottomCount,
        }}
      />
      {!!phraseList && <p>{phraseList}</p>}
      {!!headCount && <p>You have changed the head {headCount}</p>}
      {!!middleCount && <p>You have changed the middle {middleCount}</p>}
      {!!bottomCount && <p>You have changed the bottom {bottomCount}</p>}
    </main>
  );
}
