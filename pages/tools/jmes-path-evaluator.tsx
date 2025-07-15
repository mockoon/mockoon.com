import { search } from '@jmespath-community/jmespath';
import { FunctionComponent, useState } from 'react';
import CodeBlock from '../../components/code-block';
import JsonEditor from '../../components/editors/json-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const evaluateJMESPath = (data: any, expression: string) => {
  try {
    return search(data, expression);
  } catch (error) {
    throw error;
  }
};

const JMESPathPlayground: FunctionComponent = function () {
  const [jsonContent, setJsonContent] = useState<string>(
    `{
  "people": [
    {
      "name": "John",
      "age": 30,
      "city": "New York",
      "skills": ["JavaScript", "Python", "React"]
    },
    {
      "name": "Jane",
      "age": 25,
      "city": "San Francisco",
      "skills": ["Java", "Spring", "Docker"]
    },
    {
      "name": "Bob",
      "age": 35,
      "city": "Seattle",
      "skills": ["C#", ".NET", "Azure"]
    }
  ],
  "company": {
    "name": "Tech Corp",
    "founded": 2010,
    "locations": ["US", "UK", "Germany"]
  }
}`
  );
  const [extractedContent, setExtractedContent] = useState<string>(`[
  "John",
  "Jane",
  "Bob"
]`);

  const handleExpressionChange = (expression: string) => {
    try {
      const result = evaluateJMESPath(JSON.parse(jsonContent), expression);
      setExtractedContent(JSON.stringify(result, null, 2));
    } catch (error) {
      // Handle error silently
    }
  };

  const handleJsonChange = (value: string) => {
    try {
      setJsonContent(value);
      const expression =
        (document.querySelector('#jmespath-expression') as HTMLInputElement)
          ?.value || '';
      const result = evaluateJMESPath(JSON.parse(value), expression);
      setExtractedContent(JSON.stringify(result, null, 2));
    } catch (error) {
      // Handle error silently
    }
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'JMESPath online evaluator'}
        description='Extract and transform JSON data using JMESPath expressions in an online editor and view the results in real-time'
      />
      <Hero
        title='<span class="text-primary">JMESPath</span> online evaluator'
        subtitle='Extract and transform JSON data using JMESPath expressions in an online editor and view the results in real-time'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <input
            type='text'
            id='jmespath-expression'
            className='form-control mb-2 border-secondary'
            placeholder='e.g. people[*].name'
            defaultValue='people[*].name'
            onChange={(event) => handleExpressionChange(event.target.value)}
          />
          <p>
            <small>
              Uses{' '}
              <a href='https://jmespath.org/' target='_blank'>
                JMESPath
              </a>{' '}
              syntax for JSON data transformation and extraction. Examples:{' '}
              <code>people[*].name</code> or{' '}
              <code>people[?age {`>`} `25`].name</code>
            </small>
          </p>
        </div>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div className='code-editor-container'>
              <JsonEditor
                value={jsonContent}
                onValueChange={handleJsonChange}
              />
            </div>

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-arrow_forward'></i>
            </div>

            <div className='code-editor-container'>
              <JsonEditor value={extractedContent} />
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
              <h3 className='fw-medium'>About this tool</h3>
              <p>
                This online tool allows you to extract and transform values from
                JSON data using{' '}
                <a href='https://jmespath.site/' target='_blank'>
                  JMESPath
                </a>{' '}
                expressions. The extracted content is updated in real time as
                you type your expression.
              </p>

              <h3 className='mt-6 fw-medium'>About JMESPath</h3>
              <p>
                JMESPath is a query language for JSON data. It allows you to
                declaratively specify how to extract elements from a JSON
                document. JMESPath has built-in functions and powerful features
                for filtering, transforming, and projecting data.
              </p>

              <h4 className='mt-6 fw-medium'>Basic syntax</h4>
              <p>
                JMESPath expressions consist of keys, array indices, and
                functions. Here are some basic examples:
              </p>

              <table className='table'>
                <thead>
                  <tr>
                    <th>Expression</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>key</code>
                    </td>
                    <td>Access object key</td>
                  </tr>
                  <tr>
                    <td>
                      <code>key.subkey</code>
                    </td>
                    <td>Access nested object</td>
                  </tr>
                  <tr>
                    <td>
                      <code>array[0]</code>
                    </td>
                    <td>Access array element by index</td>
                  </tr>
                  <tr>
                    <td>
                      <code>array[*]</code>
                    </td>
                    <td>Wildcard - all array elements</td>
                  </tr>
                  <tr>
                    <td>
                      <code>array[*].key</code>
                    </td>
                    <td>Project - extract key from all array elements</td>
                  </tr>
                  <tr>
                    <td>
                      <code>array[?condition]</code>
                    </td>
                    <td>Filter array elements</td>
                  </tr>
                  <tr>
                    <td>
                      <code>array[:2]</code>
                    </td>
                    <td>Array slice - first 2 elements</td>
                  </tr>
                  <tr>
                    <td>
                      <code>array[-1]</code>
                    </td>
                    <td>Last element of array</td>
                  </tr>
                </tbody>
              </table>

              <h4 className='mt-6 fw-medium'>JMESPath examples</h4>

              <CodeBlock
                code={`{
  "people": [
    {
      "name": "John",
      "age": 30,
      "city": "New York",
      "skills": ["JavaScript", "Python", "React"]
    },
    {
      "name": "Jane",
      "age": 25,
      "city": "San Francisco",
      "skills": ["Java", "Spring", "Docker"]
    },
    {
      "name": "Bob",
      "age": 35,
      "city": "Seattle",
      "skills": ["C#", ".NET", "Azure"]
    }
  ],
  "company": {
    "name": "Tech Corp",
    "founded": 2010,
    "locations": ["US", "UK", "Germany"]
  }
}`}
                lineBreak
                language='json'
              />
              <table className='table'>
                <thead>
                  <tr>
                    <th>JMESPath Expression</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>people[*].name</code>
                    </td>
                    <td>All names from people array</td>
                  </tr>
                  <tr>
                    <td>
                      <code>people[0].name</code>
                    </td>
                    <td>Name of first person</td>
                  </tr>
                  <tr>
                    <td>
                      <code>people[?age {`>`} `25`].name</code>
                    </td>
                    <td>Names of people older than 25</td>
                  </tr>
                  <tr>
                    <td>
                      <code>people[?city == 'New York']</code>
                    </td>
                    <td>People living in New York</td>
                  </tr>
                  <tr>
                    <td>
                      <code>people[*].skills[0]</code>
                    </td>
                    <td>First skill of each person</td>
                  </tr>
                  <tr>
                    <td>
                      <code>people[*].skills[]</code>
                    </td>
                    <td>All skills from all people (flattened)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>company.name</code>
                    </td>
                    <td>Company name</td>
                  </tr>
                  <tr>
                    <td>
                      <code>company.locations[*]</code>
                    </td>
                    <td>All company locations</td>
                  </tr>
                  <tr>
                    <td>
                      <code>length(people)</code>
                    </td>
                    <td>Number of people</td>
                  </tr>
                  <tr>
                    <td>
                      <code>max(people[*].age)</code>
                    </td>
                    <td>Maximum age</td>
                  </tr>
                  <tr>
                    <td>
                      <code>sort_by(people, &age)</code>
                    </td>
                    <td>People sorted by age</td>
                  </tr>
                </tbody>
              </table>

              <h4 className='mt-6 fw-medium'>Built-in functions</h4>
              <p>
                JMESPath provides many built-in functions for data manipulation:
              </p>
              <ul>
                <li>
                  <strong>Array functions:</strong> <code>length()</code>,{' '}
                  <code>sort()</code>, <code>sort_by()</code>,{' '}
                  <code>reverse()</code>, <code>join()</code>
                </li>
                <li>
                  <strong>Math functions:</strong> <code>min()</code>,{' '}
                  <code>max()</code>, <code>sum()</code>, <code>avg()</code>
                </li>
                <li>
                  <strong>String functions:</strong> <code>starts_with()</code>,{' '}
                  <code>ends_with()</code>, <code>contains()</code>
                </li>
                <li>
                  <strong>Type functions:</strong> <code>type()</code>,{' '}
                  <code>keys()</code>, <code>values()</code>
                </li>
              </ul>

              <h4 className='mt-6 fw-medium'>Comparison operators</h4>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Operator</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>==</code>
                    </td>
                    <td>Equal to</td>
                  </tr>
                  <tr>
                    <td>
                      <code>!=</code>
                    </td>
                    <td>Not equal to</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;</code>
                    </td>
                    <td>Less than</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;=</code>
                    </td>
                    <td>Less than or equal to</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&gt;</code>
                    </td>
                    <td>Greater than</td>
                  </tr>
                  <tr>
                    <td>
                      <code>&gt;=</code>
                    </td>
                    <td>Greater than or equal to</td>
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

export default JMESPathPlayground;
