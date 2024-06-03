import { xml } from '@codemirror/lang-xml';
import { linter } from '@codemirror/lint';
import { XMLValidator } from 'fast-xml-parser';
import { FunctionComponent } from 'react';
import BaseEditor from './base-editor';

const xmlLinter = linter(
  (view) => {
    const validation = XMLValidator.validate(view.state.doc.toString());

    if (validation !== true && validation.err) {
      const startChar =
        view.state.doc.line(validation.err.line).from + validation.err.col;

      return [
        {
          from: startChar,
          to: startChar,
          severity: 'error',
          message: validation.err.msg
        }
      ];
    } else {
      return [];
    }
  },
  { delay: 100 }
);

const XmlEditor: FunctionComponent<{
  value: string;
  showValidMsg?: boolean;
  onValueChange?: (value: string) => void;
}> = function (props) {
  return (
    <BaseEditor
      lang='xml'
      editorExtensions={[xml(), xmlLinter]}
      onErrorChange={(currentValue: string, viewUpdate) => {
        const validation = XMLValidator.validate(currentValue);

        if (validation !== true && validation.err) {
          const position =
            viewUpdate.state.doc.line(validation.err.line).from +
            validation.err.col;

          return {
            message: validation.err.msg,
            position
          };
        }

        return null;
      }}
      {...props}
    />
  );
};

export default XmlEditor;
