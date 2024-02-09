import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import { json2xml, xml2json } from 'xml-js';
import JsonEditor from '../../components/editors/json-editor';
import XmlEditor from '../../components/editors/xml-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const XmlToJson: FunctionComponent = function () {
  const [jsonContent, setJsonContent] = useState<string>(`{
  "root": {
    "_comment": " XML to JSON converter ",
    "message": {
      "_text": "Paste your XML here"
    }
  }
}`);
  const [xmlContent, setXmlContent] = useState<string>(
    `<root>
  <!-- XML to JSON converter -->
  <message>Paste your XML here</message>
</root>`
  );

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'XML to JSON converter'}
        description='Use Mockoon XML to JSON converter to transform your XML data to a JSON object and use it in your API mocks'
      />
      <Hero
        title='XML to JSON <span class="text-primary">converter</span>'
        subtitle='Convert your XML data to a JSON object and verify its validity'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <XmlEditor
              value={xmlContent}
              onValueChange={(value) => {
                try {
                  setJsonContent(
                    xml2json(value, {
                      compact: true,
                      spaces: 2
                    })
                  );
                } catch (error) {}
              }}
            />

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-sync'></i>
            </div>

            <JsonEditor
              value={jsonContent}
              onValueChange={(value) => {
                try {
                  setXmlContent(
                    json2xml(value, {
                      compact: true,
                      spaces: 2
                    })
                  );
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
              <h3 className='fw-medium'>How do we convert XML to JSON?</h3>
              <p>
                XML and JSON are popular formats to{' '}
                <strong>store or exchange data</strong> between systems. Both
                are <strong>text formats</strong> used to represent data in a
                structured way.
              </p>
              <p>
                Mockoon supports JSON in all its systems but is also capable of{' '}
                <Link href={'/docs/latest/response-configuration/xml-support/'}>
                  parsing the XML content
                </Link>{' '}
                from entering requests. Mockoon uses the{' '}
                <Link href={'https://www.npmjs.com/package/xml-js'}>
                  xml-js NPM library
                </Link>{' '}
                to convert XML. <br />
                This library is also used in the tool on this page to help you
                get a preview of the parsing result. It parses the XML in a way
                that ensures no data is lost during the conversion as there are
                some differences between XML and JSON.
              </p>

              <h3 className='mt-6 fw-medium'>
                Differences between XML and JSON
              </h3>
              <p></p>
              <ul>
                <li>
                  JSON uses mainly <strong>name/value pairs</strong>, while XML
                  uses a <strong>tree structure</strong> with nested elements.
                </li>
                <li>
                  XML supports <strong>comments</strong>, while JSON does not.
                </li>
                <li>
                  XML supports element <strong>attributes</strong>, while JSON
                  does not.
                </li>
                <li>
                  XML must have a single <strong>root element</strong>, while a
                  JSON root element could be an array or an object.
                </li>
                <li>
                  XML supports <strong>namespaces</strong>. Namespaces are a way
                  to avoid element name conflicts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default XmlToJson;
