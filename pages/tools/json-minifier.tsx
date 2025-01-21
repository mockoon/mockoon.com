import { FunctionComponent, useState } from 'react';
import JsonEditor from '../../components/editors/json-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const JsonMinifier: FunctionComponent = function () {
  const [originalJsonContent] = useState<string>(
    `{
  "property": {
    "value": "example_value",
    "list_of_properties": [
      {
        "property_1": "value_1"
      },
      {
        "property_2": "value_2"
      },
      {
        "property_3": "value_3"
      }
    ],
    "nested_properties": {
      "nested_property": {
        "nested_value": "nested_example_value"
      }
    },
    "multiple_values_for_property": [
      "value_1",
      "value_2",
      "value_3"
    ]
  }
}`
  );
  const [formattedJsonContent, setFormattedJsonContent] = useState<string>(
    `{"property":{"value":"example_value","list_of_properties":[{"property_1":"value_1"},{"property_2":"value_2"},{"property_3":"value_3"}],"nested_properties":{"nested_property":{"nested_value":"nested_example_value"}},"multiple_values_for_property":["value_1","value_2","value_3"]}}`
  );

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online JSON minifier'}
        description='Minify your JSON data online and make it more compact and lightweight by removing unnecessary spaces, characters and line returns.'
      />
      <Hero
        title='Online <span class="text-primary">JSON minifier</span>'
        subtitle='Minify your JSON data online and make it more compact and lightweight by removing unnecessary characters'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div className='code-editor-container'>
              <JsonEditor
                value={originalJsonContent}
                onValueChange={(value) => {
                  try {
                    setFormattedJsonContent(JSON.stringify(JSON.parse(value)));
                  } catch (error) {}
                }}
              />
            </div>

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-arrow_forward'></i>
            </div>

            <div className='code-editor-container'>
              <JsonEditor value={formattedJsonContent} />
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <ToolsCta />
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
              <h3 className='mt-6 fw-medium'>Effects of JSON minification</h3>
              <p>
                Minification is the process of removing unnecessary characters
                from the source code without changing its functionality. JSON
                minification removes:
              </p>
              <ul>
                <li>
                  <strong>Spaces</strong>: all spaces are removed from the JSON
                  data including spaces preceding the colon and following the
                  comma. This makes the JSON data more compact by removing all
                  the indentation.
                </li>
                <li>
                  <strong>Line breaks</strong>: all line breaks are removed from
                  the JSON data which is transformed into a single line.
                </li>
                <li>
                  <strong>Tabs</strong>: all tabs are removed from the JSON
                  data.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JsonMinifier;
