import { FunctionComponent } from 'react';
import YamlEditor from '../../components/editors/yaml-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const YamlValidator: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online YAML validator'}
        description="Mockoon's YAML validator tool: validate your YAML configuration in an online editor and get detailed error messages."
      />
      <Hero
        title='Online <span class="text-primary">YAML validator</span>'
        subtitle='Validate your YAML configuration online and get detailed error messages'
      />

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-container'>
            <YamlEditor
              value={`property:
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
    - value_3`}
              showValidMsg
            />
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='fw-medium'>What is YAML?</h3>
              <p>
                YAML (YAML Ain't Markup Language) is a{' '}
                <strong>human-readable data serialization language</strong> used
                for configuration files and data storage or exchange. It uses a
                minimal syntax that relies on indentation to define the
                structure of the data.
              </p>
              <p>
                The official recommended extension for YAML files is{' '}
                <code>.yaml</code>.
              </p>

              <h3 className='mt-6 fw-medium'>The YAML syntax</h3>

              <ul>
                <li>
                  <strong>Indentation</strong>: YAML uses indentation to
                  represent data structure, similar to how Python uses
                  indentation. Indentation is used to indicate nesting.
                </li>

                <li>
                  <strong>Scalars</strong>: Scalars are simple data types like
                  strings, numbers, and booleans. They can be written as plain
                  scalars (unquoted), single-quoted scalars, or double-quoted
                  scalars.
                </li>

                <li>
                  <strong>Lists</strong>: Lists are ordered collections of
                  items. In YAML, lists are represented using dashes{' '}
                  <code>- </code> followed by a space for each item.
                </li>

                <li>
                  <strong>Dictionaries (Mappings)</strong>: Dictionaries, also
                  known as mappings or associative arrays, are collections of
                  key-value pairs. In YAML, mappings are represented using
                  key-value pairs separated by a colon <code>:</code>, with each
                  pair on a new line and the key and value separated by
                  whitespace.
                </li>

                <li>
                  <strong>Comments</strong>: Comments in YAML start with the
                  hash symbol <code>#</code>.
                </li>

                <li>
                  <strong>Anchors and Aliases</strong>: YAML allows the reuse of
                  data using anchors <code>&</code> and aliases <code>*</code>.
                  An anchor is defined using the & symbol, and an alias refers
                  back to that anchor using the * symbol.
                </li>

                <li>
                  <strong>Multi-line Strings</strong>: YAML supports multi-line
                  strings. Multi-line strings can be represented using the pipe
                  <code>|</code> character, which preserves newlines, or the
                  greater than <code>{'>'}</code> character, which folds
                  newlines into spaces.
                </li>
              </ul>
              <h3 className='mt-6 fw-medium'>Common errors</h3>
              <p>
                Here is a list of common errors you might encounter when writing
                YAML:
              </p>
              <ul>
                <li>
                  <strong>Indentation Errors</strong>: YAML relies heavily on
                  indentation to denote structure. Mixing spaces and tabs for
                  indentation or inconsistent indentation levels can lead to
                  syntax errors.
                </li>

                <li>
                  <strong>Missing or Misplaced Colon</strong>: In mappings
                  (key-value pairs), a colon separates the key from the value.
                  Forgetting to include the colon or placing it incorrectly can
                  cause parsing errors.
                </li>

                <li>
                  <strong>Incorrect Quoting</strong>: Strings that contain
                  special characters, such as colons or spaces, need to be
                  properly quoted. Forgetting to quote strings or using the
                  wrong type of quotes (single vs. double) can lead to
                  interpretation errors.
                </li>

                <li>
                  <strong>Improper List Formatting</strong>: Lists are denoted
                  by using a dash (-) followed by a space for each item.
                  Forgetting the space after the dash or mixing up list item
                  formats can cause parsing issues.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default YamlValidator;
