import { markdown } from '@codemirror/lang-markdown';
import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';

const MarkdownEditor: FunctionComponent<{
  value: string;
  showValidMsg?: boolean;
  onValueChange?: (value: string) => void;
  onErrorChange?: (
    currentValue: string,
    viewUpdate: any
  ) => { message: string };
  hideGoToLine?: boolean;
}> = function (props) {
  return (
    <BaseEditor lang='markdown' editorExtensions={[markdown()]} {...props} />
  );
};

export default MarkdownEditor;
