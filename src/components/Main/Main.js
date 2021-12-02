import { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '..3/Preview/Preview';

import './Main.css';

export default function Main() {
  return (
    <main>
      <Preview />
      <Editor />
    </main>
  );
}
