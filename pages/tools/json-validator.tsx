import { FunctionComponent } from 'react';
import JsonEditor from '../../components/editors/json-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const JsonValidator: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online JSON validator'}
        description="Mockoon's JSON validator tool: validate your JSON data in an online editor and get detailed error messages"
      />
      <Hero
        title='Online <span class="text-primary">JSON validator</span>'
        subtitle='Validate your JSON online and get detailed error messages'
      />
      <section>
        <div className='container'>
          <div className='code-editor-container'>
            <JsonEditor
              value={`{\n  "message": "Paste your JSON here"\n}`}
              showValidMsg
            />
          </div>
        </div>
      </section>

      <section className='py-5 py-lg-10'>
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
