import { lintGutter } from '@codemirror/lint';
import { nordInit } from '@uiw/codemirror-theme-nord';
import CodeMirror, {
  EditorSelection,
  EditorView,
  Extension,
  ReactCodeMirrorRef,
  ViewUpdate
} from '@uiw/react-codemirror';
import { FunctionComponent, useRef, useState } from 'react';

type parseError = {
  message: string;
  line?: number;
  column?: number;
  position?: number;
};

const BaseEditor: FunctionComponent<{
  value: string;
  lang: string;
  showValidMsg?: boolean;
  showErrors?: boolean;
  hideGoToLine?: boolean;
  editorExtensions: Extension[];
  onErrorChange?: (value: string, view?: ViewUpdate) => parseError;
  onValueChange?: (value: string, view?: ViewUpdate) => void;
}> = function ({
  value,
  lang,
  showValidMsg,
  showErrors,
  editorExtensions,
  hideGoToLine,
  onErrorChange,
  onValueChange
}) {
  const [error, setError] = useState<parseError>(null);
  const editor = useRef<ReactCodeMirrorRef>(null);
  showErrors = showErrors ?? true;

  const scrollDocToView = (error: parseError) => {
    if (!editor?.current?.state?.doc) {
      return;
    }
    const position =
      error.position !== undefined
        ? error.position
        : editor.current.view.state.doc.line(error.line + 1).from +
          error.column;

    editor.current.view?.dispatch({
      selection: EditorSelection.single(position, position),
      scrollIntoView: true
    });
  };

  return (
    <div className='d-flex flex-column h-100'>
      <CodeMirror
        theme={nordInit({
          settings: {
            fontFamily:
              '"Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
          }
        })}
        extensions={[
          EditorView.lineWrapping,
          lintGutter(),
          ...editorExtensions
        ]}
        basicSetup={{ lintKeymap: false }}
        height={'100%'}
        style={{ minHeight: '0' }}
        className={'h-100'}
        value={value}
        lang={lang}
        ref={editor}
        onChange={(value, view) => {
          if (onErrorChange) {
            setError(onErrorChange(value, view));
          }

          if (onValueChange) {
            onValueChange(value, view);
          }
        }}
      ></CodeMirror>
      {error && showErrors && (
        <div className='bg-danger-subtle border-start border-danger border-4 p-4 mt-4 position-relative d-flex justify-content-between'>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              fontFamily:
                '"Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
            }}
          >
            {error.message}
          </div>
          {!hideGoToLine && (
            <div className='flex-shrink-0'>
              <a
                href='#'
                onClick={(a) => {
                  a.preventDefault();
                  scrollDocToView(error);
                }}
              >
                Go to line
              </a>
            </div>
          )}
        </div>
      )}
      {!error && showValidMsg && (
        <div className='bg-success-subtle border-start border-success border-4 p-4 mt-4'>
          <div>{lang.toUpperCase()} is valid!</div>
        </div>
      )}
    </div>
  );
};

export default BaseEditor;
