import { FunctionComponent, useState } from 'react';
import JsonSchemaContentEditor from '../../components/editors/json-schema-content-editor';
import JsonSchemaEditor from '../../components/editors/json-schema-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const JsonSchemaValidator: FunctionComponent = function () {
  const [jsonSchema, setJsonSchema] = useState<string>(`{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "password": {
      "type": "string",
      "minLength": 6
    }
  },
  "required": ["username", "email", "password"]
}`);
  const [jsonContent, setJsonContent] = useState<string>(`{
  "username": "John",
  "email": "john@example.org",
  "password": "123456"
}`);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online JSON Schema validator'}
        description='Validate your JSON schema and JSON data against a JSON schema with this free online tool.'
      />
      <Hero
        title='Online <span class="text-primary">JSON Schema validator</span>'
        subtitle='Validate your JSON against a JSON schema online'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div className='code-editor-container'>
              <JsonSchemaEditor
                value={jsonSchema}
                onValueChange={(value) => {
                  try {
                    setJsonSchema(value);
                  } catch (error) {}
                }}
              />
            </div>

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'></div>

            <div className='code-editor-container'>
              <JsonSchemaContentEditor
                value={jsonContent}
                schema={jsonSchema}
                showValidMsg={true}
                onValueChange={(value) => {
                  try {
                    setJsonContent(value);
                  } catch (error) {}
                }}
              />
            </div>
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
              <h3 className='fw-medium'>About this tool</h3>
              <p>
                This tool allows you to validate your JSON data against a JSON
                schema. It uses the [ajv](https://ajv.js.org/) library to
                perform the validation.
              </p>
              <p>
                To use this tool, paste your JSON schema in the left editor and
                your JSON data in the right editor. The tool will automatically
                validate your JSON data against the schema and display any
                errors.
                <br />
                It will also display errors if your JSON schema is invalid.
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
              <p>
                JSON is a <strong>text format</strong> that is completely
                language independent but uses conventions that are familiar to
                programmers of many languages like C, C++, C#, Java or
                JavaScript. These properties make JSON an ideal data-interchange
                language.
              </p>
              <h3 className='mt-6 fw-medium'>What is a JSON schema?</h3>
              <p>
                A JSON schema is a JSON document that defines the structure of
                your JSON data. It allows you to specify the type of each field,
                the required fields, and any constraints on the data.
              </p>
              <p>
                The JSON schema format is defined by the{' '}
                <a href='https://json-schema.org/'>JSON Schema standard</a>.
              </p>
              <p>
                JSON schemas are useful for validating JSON data, generating
                documentation, and providing a contract for APIs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JsonSchemaValidator;
