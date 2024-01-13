import { lintGutter, linter } from '@codemirror/lint';
import { nordInit } from '@uiw/codemirror-theme-nord';
import {
  EditorView,
  Extension,
  ReactCodeMirrorProps
} from '@uiw/react-codemirror';
import { XMLValidator } from 'fast-xml-parser';

export const xmlLinter = linter(
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

export const defaultCodeEditorConfig = (
  extensions: Extension[] = []
): ReactCodeMirrorProps => ({
  theme: nordInit({
    settings: {
      fontFamily:
        '"Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
    }
  }),
  extensions: [EditorView.lineWrapping, lintGutter(), ...extensions],
  basicSetup: { lintKeymap: false },
  height: '100%',
  style: { minHeight: '0' },
  className: 'h-100'
});
