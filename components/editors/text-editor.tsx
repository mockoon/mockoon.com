import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';

const TextEditor: FunctionComponent<{
  value: string;
  showValidMsg?: boolean;
  onValueChange?: (value: string) => void;
  onErrorChange?: (
    currentValue: string,
    viewUpdate: any
  ) => { message: string };
  hideGoToLine?: boolean;
}> = function (props) {
  return <BaseEditor lang='text' editorExtensions={[]} {...props} />;
};

export default TextEditor;
