import { FunctionComponent, useState } from 'react';
import JsonEditor from '../../components/editors/json-editor';
import TextEditor from '../../components/editors/text-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const CsvParserJsonConverter: FunctionComponent = function () {
  const initialValue = `name,age,city,occupation,company,location,phone,email
John,25,New York,Software Engineer,Google,Mountain View,123-456-7890
Jane,30,Los Angeles,Product Manager,Facebook,Menlo Park,234-567-8901
Alice,35,Chicago,Data Scientist,Amazon,Seattle,345-678-9012`;
  const [parsedLines, setParsedLines] = useState([
    [
      'John',
      '25',
      'New York',
      'Software Engineer',
      'Google',
      'Mountain View',
      '123-456-7890'
    ],
    [
      'Jane',
      '30',
      'Los Angeles',
      'Product Manager',
      'Facebook',
      'Menlo Park',
      '234-567-8901'
    ],
    [
      'Alice',
      '35',
      'Chicago',
      'Data Scientist',
      'Amazon',
      'Seattle',
      '345-678-9012'
    ]
  ]);
  const [parsedHeaders, setParsedHeaders] = useState([
    'name',
    'age',
    'city',
    'occupation',
    'company',
    'location',
    'phone'
  ]);
  const [jsonContent, setJsonContent] = useState(`[
  {
    "name": "John",
    "age": "25",
    "city": "New York",
    "occupation": "Software Engineer",
    "company": "Google",
    "location": "Mountain View",
    "phone": "123-456-7890",
    "email": "[email protected]",
    "website": "https://example.com",
    "linkedin": "https://linkedin.com/in/johndoe"
  },
  {
    "name": "Jane",
    "age": "30",
    "city": "Los Angeles",
    "occupation": "Product Manager",
    "company": "Facebook",
    "location": "Menlo Park",
    "phone": "234-567-8901",
    "email": "[email protected]",
    "website": "https://example.com",
    "linkedin": "https://linkedin.com/in/janedoe"
  },
  {
    "name": "Alice",
    "age": "35",
    "city": "Chicago",
    "occupation": "Data Scientist",
    "company": "Amazon",
    "location": "Seattle",
    "phone": "345-678-9012",
    "email": "[email protected]",
    "website": "https://example.com",
    "linkedin": "https://linkedin.com/in/alicedoe"
  }
]`);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online CSV parser and JSON converter'}
        description='View and parse your comma separated values (CSV) data online and convert them to formatted JSON'
      />
      <Hero
        title='Online <span class="text-primary">CSV parser</span> and <span class="text-primary">JSON converter</span>'
        subtitle='View and parse your CSV data online and convert them to JSON'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <TextEditor
              value={initialValue}
              onValueChange={(csv) => {
                let lines = [];
                let headers = [];

                csv.split('\n').forEach((line, index) => {
                  if (!line.trim()) {
                    return;
                  }

                  if (index === 0) {
                    headers = line.split(',');

                    return;
                  } else {
                    const items = line.split(',');

                    lines.push(items);
                  }
                });

                setParsedHeaders(headers);
                setParsedLines(lines);

                // Convert to JSON
                const json = [];
                lines.forEach((line) => {
                  const obj = {};

                  headers.forEach((header, index) => {
                    obj[header] = line[index];
                  });

                  json.push(obj);
                });

                console.log(json);

                setJsonContent(JSON.stringify(json, null, 2));
              }}
            />

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-sync'></i>
            </div>

            <JsonEditor value={jsonContent} />
          </div>

          <div className='table-responsive mt-8'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  {parsedHeaders.map((header, headerIndex) => (
                    <th
                      style={{ textTransform: 'capitalize' }}
                      key={`header${headerIndex}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {parsedLines.map((line, lineIndex) => (
                  <tr key={`line${lineIndex}`}>
                    {line.map((item, itemIndex) => (
                      <td key={`data${lineIndex}${itemIndex}`}>{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='mt-6 fw-medium'>About this tool</h3>
              <p>
                This tool allows you to parse and view your CSV data online and
                convert it to JSON. Simply paste your CSV data in the left
                editor and the JSON data will be generated in the right editor.
                The CSV data will be parsed and displayed in a table below the
                editors.
              </p>
              <h3 className='fw-medium'>What is CSV?</h3>
              <p>
                CSV (Comma Separated Values) is a simple text file format used
                to store tabular data, such as a spreadsheet or database. A CSV
                file contains a list of data separated by commas, with each line
                representing a row of data.
              </p>
              <p>
                CSV is a common format for data exchange between different types
                of applications, such as spreadsheets, databases, and other data
                processing tools. Most spreadsheet and database programs can
                import and export CSV files.
              </p>
              <h3 className='fw-medium'>What is JSON?</h3>
              <p>
                JSON (JavaScript Object Notation) is a lightweight{' '}
                <strong>data interchange format</strong>. It is easy to read and
                write and easy to parse and generate using code.
                <br />
                It is based on a{' '}
                <strong>subset of the JavaScript programming language</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CsvParserJsonConverter;
