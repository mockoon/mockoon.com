import { FunctionComponent, useState } from 'react';
import JsonEditor from '../../components/editors/json-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const JsonFormatterBeautifier: FunctionComponent = function () {
  const [originalJsonContent] = useState<string>(
    `{  "property": {    "value": "example_value",    "list_of_properties": [
      {


        "property_1": "value_1"      },
      {        "property_2": "value_2"
},
      {
        "property_3": "value_3"      }
    ],
    "nested_properties": {
"nested_property": {
        "nested_value": "nested_example_value"
      }
    },

    "multiple_values_for_property": [
      "value_1",      "value_2",      "value_3"    ]
  }
}`
  );
  const [formattedJsonContent, setFormattedJsonContent] = useState<string>(`{
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
}`);
  const [spacesOrTabs, setSpacesOrTabs] = useState<'spaces' | 'tabs'>('spaces');
  const [numberOfSpaces, setNumberOfSpaces] = useState<number>(2);

  const format = (
    json: string,
    spOrT: 'spaces' | 'tabs',
    nbSpaces?: number
  ) => {
    try {
      return JSON.stringify(
        JSON.parse(json),
        null,
        spOrT === 'spaces' ? nbSpaces : '\t'
      );
    } catch (error) {}
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online JSON beautifier and formatter'}
        description='Format and beautify your JSON data online with this free tool. Beautify JSON data by adding spaces or tabs and line returns to make it more readable.'
      />
      <Hero
        title='Online <span class="text-primary">JSON beautifier and formatter</span>'
        subtitle='Format and beautify your JSON data online with this free tool. Beautify JSON data by adding spaces or tabs and line returns to make it more readable.'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div className='code-editor-container'>
              <JsonEditor
                value={originalJsonContent}
                onValueChange={(value) => {
                  try {
                    setFormattedJsonContent(
                      format(value, spacesOrTabs, numberOfSpaces)
                    );
                  } catch (error) {}
                }}
              />
            </div>

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-sync'></i>
            </div>

            <div className='code-editor-container'>
              <JsonEditor value={formattedJsonContent} />
            </div>
          </div>
          <div className='d-flex mt-4 align-items-center'>
            <div
              className='btn-group-sm'
              role='group'
              aria-label='radio toggle button group for spaces or tabs'
            >
              <input
                type='radio'
                className='btn-check'
                name='spaces-or-tabs'
                id='spaces'
                value='spaces'
                checked={spacesOrTabs === 'spaces'}
                onChange={(event) => {
                  try {
                    setSpacesOrTabs('spaces');
                    setFormattedJsonContent(
                      format(originalJsonContent, 'spaces', numberOfSpaces)
                    );
                  } catch (error) {}
                }}
              />
              <label className='btn btn-outline-dark me-2' htmlFor='spaces'>
                Spaces
              </label>
              <input
                type='radio'
                className='btn-check'
                name='spaces-or-tabs'
                id='tabs'
                value='tabs'
                checked={spacesOrTabs === 'tabs'}
                onChange={(event) => {
                  try {
                    setSpacesOrTabs('tabs');
                    setFormattedJsonContent(
                      format(originalJsonContent, 'tabs', numberOfSpaces)
                    );
                  } catch (error) {}
                }}
              />
              <label className='btn btn-outline-dark' htmlFor='tabs'>
                Tabs
              </label>
            </div>
            {spacesOrTabs === 'spaces' && (
              <div className='d-flex ms-4 align-items-center'>
                <label htmlFor='dateYear'>Number of spaces</label>
                <input
                  type='number'
                  id='numberOfSpaces'
                  className='form-control form-control-sm border-secondary'
                  value={numberOfSpaces}
                  onChange={(event) => {
                    try {
                      const newNumberOfSpaces = !Number.isNaN(
                        parseInt(event.target.value, 10)
                      )
                        ? parseInt(event.target.value, 10)
                        : 0;
                      setNumberOfSpaces(newNumberOfSpaces);
                      setFormattedJsonContent(
                        format(
                          originalJsonContent,
                          spacesOrTabs,
                          newNumberOfSpaces
                        )
                      );
                    } catch (error) {}
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <ToolsCta />
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
              <h3 className='mt-6 fw-medium'>Most common JSON formatting </h3>
              <p>
                Formatting JSON data is a common task when working with JSON. It
                makes the JSON data more readable and easier to understand. Here
                are some common formatting rules:
              </p>
              <ul>
                <li>
                  <strong>Indentation</strong>: Indentation is usually done
                  using spaces or tabs. The most common indentation is 2 spaces
                  or 4 spaces, or a tab. There is no strict rule for the
                  indentation as JSON is a serialization format not a
                  presentation format.
                </li>
                <li>
                  <strong>Line breaks</strong>: Line breaks are used to separate
                  different objects or arrays. Extra line breaks are usually not
                  used as they add unnecessary space to the JSON data.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JsonFormatterBeautifier;
