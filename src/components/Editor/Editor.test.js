import { render } from '@testing-library/react';
import Editor from './Editor';

test('testing for classname editor', () => {
  const container = render(<Editor className="editor" />);
  expect(container).toMatchSnapshot();
});
