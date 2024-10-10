import { html } from '@codemirror/lang-html';
import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';

const HtmlEditor: FunctionComponent<{
  value: string;
  showValidMsg?: boolean;
  onValueChange?: (value: string) => void;
  onErrorChange?: (
    currentValue: string,
    viewUpdate: any
  ) => { message: string };
  hideGoToLine?: boolean;
}> = function (props) {
  return <BaseEditor lang='html' editorExtensions={[html()]} {...props} />;
};

export default HtmlEditor;
