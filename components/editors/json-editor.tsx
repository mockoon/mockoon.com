import { json } from '@codemirror/lang-json';
import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';
import { getErrorPosition, jsonLinter } from './json-utils';

const JsonEditor: FunctionComponent<{
  value: string;
  showValidMsg?: boolean;
  showErrors?: boolean;
  onValueChange?: (value: string) => void;
}> = function (props) {
  return (
    <BaseEditor
      lang='json'
      editorExtensions={[json(), jsonLinter]}
      onErrorChange={(currentValue: string, viewUpdate) => {
        try {
          JSON.parse(currentValue);

          return null;
        } catch (error) {
          return {
            message: error.message,
            ...getErrorPosition(error, viewUpdate.state.doc)
          };
        }
      }}
      {...props}
    />
  );
};

export default JsonEditor;
