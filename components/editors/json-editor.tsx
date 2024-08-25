import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';
import { Text } from '@uiw/react-codemirror';
import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';

const jsonLinter = linter(jsonParseLinter(), { delay: 100 });

function getErrorPosition(
  error: SyntaxError,
  doc: Text
): { line?: number; column?: number; position?: number } {
  let match;
  if ((match = error.message.match(/at position (\d+)/)))
    return { position: Math.min(+match[1], doc.length) };
  if ((match = error.message.match(/at line (\d+) column (\d+)/)))
    return {
      position: Math.min(doc.line(+match[1]).from + +match[2] - 1, doc.length)
    };

  return {
    position: 1
  };
}

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
