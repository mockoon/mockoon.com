import jsyaml from 'js-yaml';
import { FunctionComponent, useState } from 'react';
import JsonEditor from '../../components/editors/json-editor';
import YamlEditor from '../../components/editors/yaml-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const JsonToYaml: FunctionComponent = function () {
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
  const [yamlContent, setYamlContent] = useState<string>(
    `property:
  value: example_value

  list_of_properties:
    - property_1: value_1
    - property_2: value_2
    - property_3: value_3

  nested_properties:
    nested_property:
      nested_value: nested_example_value

  multiple_values_for_property:
    - value_1
    - value_2
    - value_3`
  );

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online JSON to YAML converter'}
        description='Convert your data from JSON to YAML and back using this free online tool, and verify their validity.'
      />
      <Hero
        title='Online <span class="text-primary">JSON to YAML converter</span>'
        subtitle='Convert your data from JSON to YAML and back and verify their validity.'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <JsonEditor
              value={jsonContent}
              onValueChange={(value) => {
                try {
                  const obj = JSON.parse(value);
                  setYamlContent(jsyaml.dump(obj));
                } catch (error) {}
              }}
            />

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-sync'></i>
            </div>

            <YamlEditor
              value={yamlContent}
              onValueChange={(value: string) => {
                try {
                  setJsonContent(JSON.stringify(jsyaml.load(value), null, 2));
                } catch (error) {}
              }}
            />
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
                <strong>subset of the JavaScript programming language</strong>.
              </p>
              <h3 className='fw-medium'>What is YAML?</h3>
              <p>
                YAML (YAML Ain't Markup Language) is a{' '}
                <strong>human-readable data serialization language</strong> used
                for configuration files and data storage or exchange. It uses a
                minimal syntax that relies on indentation to define the
                structure of the data.
              </p>
              <h3 className='fw-medium'>Differences between JSON and YAML</h3>
              <p>
                JSON and YAML are both used to represent data in a structured
                way but their syntax and features are different:
              </p>
              <ul>
                <li>
                  JSON uses braces <code>{'{}'}</code> to define objects and
                  square brackets <code>[]</code> to define arrays. YAML uses
                  indentation, colons and dashes to denote key-value pairs and
                  lists.
                </li>
                <li>
                  YAML supports comments, while JSON does not. A comment in YAML
                  is indicated by the <code>#</code> character.
                </li>
                <li>
                  YAML allows for more flexibility in quoting strings,
                  supporting both single and double quotes as well as literal
                  blocks of text. JSON requires double quotes around keys and
                  string values, and does not support multi-line strings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JsonToYaml;
