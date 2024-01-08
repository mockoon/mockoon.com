import { json, jsonParseLinter } from '@codemirror/lang-json';
import {
  Diagnostic,
  diagnosticCount,
  forEachDiagnostic,
  lintGutter,
  linter
} from '@codemirror/lint';
import { nordInit } from '@uiw/codemirror-theme-nord';
import CodeMirror, {
  EditorSelection,
  ReactCodeMirrorRef
} from '@uiw/react-codemirror';
import { FunctionComponent, useRef, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const linterExtension = linter(jsonParseLinter(), { delay: 10 });
const JsonValidator: FunctionComponent = function () {
  const [error, setError] = useState<Diagnostic>(null);
  const [errorCount, setErrorCount] = useState(0);
  const editor = useRef<ReactCodeMirrorRef>();

  const scrollDocToView = () => {
    if (!editor?.current?.state?.doc) {
      return;
    }

    editor.current.view?.dispatch({
      selection: EditorSelection.single(error.from, error.to),
      scrollIntoView: true
    });
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'JSON validator'}
        description="Mockoon's JSON validator tool: validate your JSON online and get detailed error messages."
      />
      <Hero
        title='JSON validator'
        subtitle='Validate your JSON online and get detailed error messages'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <CodeMirror
                theme={nordInit({
                  settings: {
                    fontFamily:
                      '"Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
                  }
                })}
                ref={editor}
                extensions={[json(), linterExtension, lintGutter()]}
                height='50vh'
                value={`{\n  "message": "Paste your JSON here"\n}`}
                lang='json'
                basicSetup={{ lintKeymap: false }}
                onUpdate={(view) => {
                  setError(null);
                  setErrorCount(diagnosticCount(view.state));

                  forEachDiagnostic(view.state, (error) => {
                    setError(error);
                  });
                }}
              ></CodeMirror>

              {error && (
                <div className='bg-danger-subtle border-start border-danger border-4 p-4 my-4 position-relative d-flex justify-content-between'>
                  <div>
                    {error.message}
                    <span className='badge bg-danger rounded-pill badge-float badge-float-outside'>
                      {errorCount} error{errorCount > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div>
                    <button
                      type='button'
                      className='btn btn-link p-0'
                      onClick={() => {
                        scrollDocToView();
                      }}
                    >
                      Go to line
                    </button>
                  </div>
                </div>
              )}
              {!error && (
                <div className='bg-success-subtle border-start border-success border-4 p-4 my-4'>
                  <div>JSON is valid!</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='fw-medium'>What is JSON?</h3>
              <p>
                JSON (JavaScript Object Notation) is a lightweight{' '}
                <strong>data interchange format</strong>. It is easy to read and
                write and easy to parse and generate using code.
                <br />
                It is based on a{' '}
                <strong>
                  subset of the JavaScript programming language
                </strong>.{' '}
              </p>
              <p>
                JSON is a <strong>text format</strong> that is completely
                language independent but uses conventions that are familiar to
                programmers of many languages like C, C++, C#, Java or
                JavaScript. These properties make JSON an ideal data-interchange
                language.
              </p>

              <h3 className='mt-6 fw-medium'>JSON syntax</h3>
              <p>JSON is built on two universal data structures:</p>
              <ul>
                <li>
                  A collection of <strong>unordered name/value pairs</strong>:
                  usually called in other languages, object, record, struct,
                  dictionary, hash table, keyed list, or associative array.
                </li>
                <li>
                  An <strong>ordered list of values</strong>: called in other
                  languages, array, vector, list, or sequence.
                </li>
              </ul>

              <p>
                The JSON syntax is derived from the JavaScript object notation
                syntax:
              </p>

              <ul>
                <li>
                  <strong>Curly braces</strong> hold <strong>objects</strong>{' '}
                  name/value pairs{' '}
                  <code className='ms-2'>
                    {'{'}...{'}'}
                  </code>
                </li>
                <li>
                  <strong>Square brackets</strong> hold <strong>arrays</strong>{' '}
                  <code className='ms-2'>[...]</code>
                </li>
                <li>
                  <strong>Object name/value pairs</strong> are{' '}
                  <strong>separated by a colon</strong>
                  <code className='ms-2'>"name": "value"</code>
                </li>
                <li>
                  Object and array <strong>members</strong> are{' '}
                  <strong>separated by commas</strong>{' '}
                  <code className='ms-2'>[1,2,3]</code>
                </li>
                <li>
                  <strong>Object names</strong> are enclosed in{' '}
                  <strong>double quotes</strong>{' '}
                  <code className='ms-2'>"name"</code>
                </li>
                <li>
                  <strong>Object names</strong> must be <strong>unique</strong>{' '}
                  within the object
                </li>
                <li>
                  <strong>String</strong> values must be{' '}
                  <strong>enclosed in double quotes</strong>
                </li>

                <li>
                  Values can be one of the following data types:
                  <ul>
                    <li>
                      a string <code className='ms-2'>"value"</code>
                    </li>
                    <li>
                      a number
                      <code className='ms-2'>-5.56e7</code>
                    </li>
                    <li>
                      an object
                      <code className='ms-2'>
                        {'{'}...{'}'}
                      </code>
                    </li>
                    <li>
                      an array <code className='ms-2'>[...]</code>
                    </li>
                    <li>
                      a boolean <code className='ms-2'>true</code> or
                      <code className='ms-2'>false</code>
                    </li>
                    <li>
                      null
                      <code className='ms-2'>null</code>
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 className='mt-6 fw-medium'>Commons errors</h3>
              <p>Some common errors that can be found in JSON files:</p>
              <ul>
                <li>
                  <strong>Missing comma</strong> between two elements.
                </li>
                <li>
                  <strong>Missing quotes</strong> around keys or string values.
                </li>
                <li>
                  Objects and arrays members must be separated by a comma, but{' '}
                  <strong>trailing commas are not allowed </strong>after the
                  last member: <code className='ms-2'>[1,2,3,]</code> should be{' '}
                  <code className='ms-2'>[1,2,3]</code>
                </li>
                <li>
                  <strong>Comments are not allowed</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JsonValidator;
