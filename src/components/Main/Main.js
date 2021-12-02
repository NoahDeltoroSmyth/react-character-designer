import { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('');
  const [middle, setMiddle] = useState('');
  const [bottom, setBottom] = useState('');

  return (
    <main>
      <Preview />
      <Editor {...{ head, setHead, middle, setMiddle, bottom, setBottom }} />
    </main>
  );
}
