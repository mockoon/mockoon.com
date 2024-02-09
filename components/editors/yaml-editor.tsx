import { yaml } from '@codemirror/lang-yaml';
import { linter } from '@codemirror/lint';
import jsyaml from 'js-yaml';
import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';

const yamlLinter = linter(
  (view) => {
    try {
      jsyaml.load(view.state.doc.toString());

      return [];
    } catch (error) {
      // errors are 0-based, but codemirror is 1-based
      error.mark.line = error.mark.line + 1;

      let startChar: number;

      // some errors are reported on a final extra line. If this is the case, we put the cursor at the end of the previous line
      if (view.state.doc.lines < error.mark.line) {
        startChar = view.state.doc.line(error.mark.line - 1).to;
      } else {
        startChar =
          view.state.doc.line(error.mark.line).from + error.mark.column;
      }

      return [
        {
          from: startChar,
          to: startChar,
          severity: 'error',
          message: error.reason
        }
      ];
    }
  },
  { delay: 100 }
);

const YamlEditor: FunctionComponent<{
  value: string;
  showValidMsg?: boolean;
  onValueChange?: (value: string) => void;
}> = function (props) {
  return (
    <BaseEditor
      lang='yaml'
      editorExtensions={[yaml(), yamlLinter]}
      onErrorChange={(currentValue: string) => {
        try {
          jsyaml.load(currentValue);

          return null;
        } catch (error) {
          return {
            message: error.message,
            line: error.mark.line,
            column: error.mark.column
          };
        }
      }}
      {...props}
    />
  );
};

export default YamlEditor;
