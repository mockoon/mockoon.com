import { FunctionComponent, useState } from 'react';
import CodeBlock from '../../components/code-block';
import JsonEditor from '../../components/editors/json-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { getValueFromPath } from '../../utils/tools';

const JsonPathPlayground: FunctionComponent = function () {
  const [jsonContent, setJsonContent] = useState<string>(
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
  const [extractedContent, setExtractedContent] = useState<string>(`[
  "value_1"
]`);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'JSONPath and object-path online evaluator'}
        description='Extract values from JSON data using JSONPath or object-path syntaxes in an online editor and view the results in real-time'
      />
      <Hero
        title='<span class="text-primary">JSONPath</span> and <span class="text-primary">object-path</span> online evaluator'
        subtitle='Extract values from JSON data using JSONPath or object-path syntaxes in an online editor and view the results in real-time'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <input
            type='text'
            id='path'
            className='form-control mb-2 border-secondary'
            placeholder='e.g. $.property.list_of_properties[*].property_1'
            defaultValue='$.property.list_of_properties[*].property_1'
            onChange={(event) => {
              try {
                setExtractedContent(
                  JSON.stringify(
                    getValueFromPath(
                      JSON.parse(jsonContent),
                      event.target.value,
                      ''
                    ),
                    null,
                    2
                  )
                );
              } catch (error) {}
            }}
          />
          <p>
            <small>
              Supports both{' '}
              <a
                href='https://www.npmjs.com/package/jsonpath-plus'
                target='_blank'
              >
                JSONPath-plus
              </a>{' '}
              and{' '}
              <a
                href='https://www.npmjs.com/package/object-path'
                target='_blank'
              >
                object-path
              </a>{' '}
              syntaxes. Examples: <code>$.property.value</code> or{' '}
              <code>property.value</code>
            </small>
          </p>
        </div>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div>
              <JsonEditor
                value={jsonContent}
                onValueChange={(value) => {
                  try {
                    setJsonContent(value);
                    setExtractedContent(
                      JSON.stringify(
                        getValueFromPath(
                          JSON.parse(value),
                          (document.querySelector('#path') as HTMLInputElement)
                            .value,
                          ''
                        ),
                        null,
                        2
                      )
                    );
                  } catch (error) {}
                }}
              />
            </div>

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-arrow_forward'></i>
            </div>

            <JsonEditor value={extractedContent} />
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='fw-medium'>About this tool</h3>
              <p>
                This online tool allows you to extract values from JSON data
                using{' '}
                <a
                  href='https://www.npmjs.com/package/jsonpath-plus'
                  target='_blank'
                >
                  JSONPath
                </a>{' '}
                or{' '}
                <a
                  href='https://www.npmjs.com/package/object-path'
                  target='_blank'
                >
                  object-path
                </a>{' '}
                syntaxes. The extracted content is updated in real time as you
                type your path.
              </p>
              <p>
                This playground uses the same logic as the Mockoon features that
                support JSONPath and object-path syntaxes:
              </p>
              <ul>
                <li>Templating helpers:</li>
                <ul>
                  <li>
                    <a href='/docs/latest/templating/mockoon-request-helpers/#body'>
                      <code>body</code>
                    </a>
                  </li>
                  <li>
                    <a href='/docs/latest/templating/mockoon-request-helpers/#bodyraw'>
                      <code>bodyRaw</code>
                    </a>
                  </li>
                  <li>
                    <a href='/docs/latest/templating/mockoon-request-helpers/#queryparam'>
                      <code>queryParam</code>
                    </a>
                  </li>
                  <li>
                    <a href='/docs/latest/templating/mockoon-request-helpers/#queryparamraw'>
                      <code>queryParamRaw</code>
                    </a>
                  </li>
                  <li>
                    <a href='/docs/latest/templating/mockoon-helpers/#data'>
                      <code>data</code>
                    </a>
                  </li>
                  <li>
                    <a href='/docs/latest/templating/mockoon-helpers/#dataraw'>
                      <code>dataRaw</code>
                    </a>
                  </li>
                  <li>
                    <a href='/docs/latest/templating/mockoon-variables-helpers/#getglobalvar'>
                      <code>getGlobalVar</code>
                    </a>
                  </li>
                </ul>
                <li>
                  <a href='/docs/latest/route-responses/dynamic-rules/#2-property-name-or-path'>
                    Response rules targets
                  </a>
                </li>
              </ul>

              <h3 className='mt-6 fw-medium'>About JSONPath</h3>
              <p>
                JSONPath is a query language for JSON data. It allows you to
                analyze, transform, and extract data from JSON documents.
                <br />
                JSONPath is used in many programming languages and data
                processing tools. It is similar to XPath for XML documents.
              </p>

              <h4 className='mt-6 fw-medium'>Syntax cheat sheet</h4>

              <table className='table'>
                <thead>
                  <tr>
                    <th>Symbol</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>$</td>
                    <td>the root object/element</td>
                  </tr>
                  <tr>
                    <td>@</td>
                    <td>the current object/element</td>
                  </tr>
                  <tr>
                    <td>. or []</td>
                    <td>child operator</td>
                  </tr>
                  <tr>
                    <td>..</td>
                    <td>nested descendants</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>
                      wildcard, all objects/elements regardless of their names
                    </td>
                  </tr>
                  <tr>
                    <td>[]</td>
                    <td>subscript operator</td>
                  </tr>
                  <tr>
                    <td>[,]</td>
                    <td>
                      JSONPath allows alternate names or array indices as a set.
                    </td>
                  </tr>
                  <tr>
                    <td>[start:end:step]</td>
                    <td>array slice operator</td>
                  </tr>
                  <tr>
                    <td>?()</td>
                    <td>applies a filter (script) expression</td>
                  </tr>
                </tbody>
              </table>

              <h4 className='mt-6 fw-medium'>JSONPath examples</h4>

              <CodeBlock
                code={`{
  "store": {
    "book": [
      { "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95
      },
      { "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 19.95
    }
  }
}`}
                lineBreak
                language='json'
              />
              <table className='table'>
                <thead>
                  <tr>
                    <th>JSONPath</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>$.store.book[*].author</code>
                    </td>
                    <td>the authors of all books in the store</td>
                  </tr>
                  <tr>
                    <td>
                      <code>$..author</code>
                    </td>
                    <td>all authors</td>
                  </tr>
                  <tr>
                    <td>
                      <code>$.store.*</code>
                    </td>
                    <td>
                      all things in store, which are some books and a red
                      bicycle
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>$.store..price</code>
                    </td>
                    <td>the price of everything in the store</td>
                  </tr>
                  <tr>
                    <td>
                      <code>$..book[2]</code>
                    </td>
                    <td>the third book</td>
                  </tr>
                  <tr>
                    <td>
                      <code>$..book[(@.length-1)]</code>
                      <br />
                      <code>$..book[-1:]</code>
                    </td>
                    <td>the last book in order</td>
                  </tr>
                  <tr>
                    <td>
                      <code>$..book[0,1]</code>
                      <br />
                      <code>$..book[:2]</code>
                    </td>
                    <td>the first two books</td>
                  </tr>
                  <tr>
                    <td>
                      <code>$..book[?(@.isbn)]</code>
                    </td>
                    <td>filter all books with isbn number</td>
                  </tr>
                  <tr>
                    <td>
                      <code>{`$..book[?(@.price<10)]`}</code>
                    </td>
                    <td>filter all books cheapier than 10</td>
                  </tr>
                  <tr>
                    <td>
                      <code>$..*</code>
                    </td>
                    <td> All members of JSON data item</td>
                  </tr>
                </tbody>
              </table>

              <h3 className='mt-6 fw-medium'>About object-path</h3>
              <p>
                object-path is a simpler library to access and manipulate
                properties on objects using paths. It is similar to JSONPath but
                less powerful and more straightforward to use.
                <br />
                object-path is mainly using the dot and bracket notations to
                access nested properties. However, it doesn't support all the
                features of JSONPath.
              </p>

              <h4 className='mt-6 fw-medium'>object-path examples</h4>

              <CodeBlock
                code={`{
  "store": {
    "book": [
      { "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95
      },
      { "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 19.95
    }
  }
}`}
                lineBreak
                language='json'
              />
              <table className='table'>
                <thead>
                  <tr>
                    <th>object-path</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>store.book</code>
                    </td>
                    <td>
                      the books in the store, which are an array of objects
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>store.bicycle.color</code>
                    </td>
                    <td>the color of the bicycle</td>
                  </tr>
                  <tr>
                    <td>
                      <code>store.book[0].author</code>
                    </td>
                    <td>the author of the first book</td>
                  </tr>
                  <tr>
                    <td>
                      <code>store.book[1].title</code>
                    </td>
                    <td>the title of the second book</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JsonPathPlayground;
