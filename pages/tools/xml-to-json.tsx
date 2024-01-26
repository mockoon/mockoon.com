import { xml } from '@codemirror/lang-xml';
import { Diagnostic, forEachDiagnostic } from '@codemirror/lint';
import CodeMirror, {
  EditorSelection,
  ReactCodeMirrorRef
} from '@uiw/react-codemirror';
import Link from 'next/link';
import { FunctionComponent, useRef, useState } from 'react';
import { xml2json } from 'xml-js';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { defaultCodeEditorConfig, xmlLinter } from '../../utils/code-editor';

const XmlToJson: FunctionComponent = function () {
  const initialXml =
    '<root>  \n  <!-- XML to JSON converter -->\n  <message>Paste your XML here</message>\n</root>';
  const [error, setError] = useState<Diagnostic>(null);
  const xmlEditor = useRef<ReactCodeMirrorRef>();
  const [jsonContent, setJsonContent] = useState(
    xml2json(initialXml, {
      compact: true,
      spaces: 2
    })
  );

  const scrollDocToView = () => {
    if (!xmlEditor?.current?.state?.doc) {
      return;
    }

    xmlEditor.current.view?.dispatch({
      selection: EditorSelection.single(error.from, error.to),
      scrollIntoView: true
    });
  };

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
          <div className='row'>
            <div className='col-12 col-md-6 d-flex flex-column code-editor-container'>
              <CodeMirror
                {...defaultCodeEditorConfig([xml(), xmlLinter])}
                ref={xmlEditor}
                value={initialXml}
                lang='xml'
                onUpdate={(view) => {
                  setError(null);

                  forEachDiagnostic(view.state, (error) => {
                    setError(error);
                  });
                }}
                onChange={(value) => {
                  try {
                    setJsonContent(
                      xml2json(value, {
                        compact: true,
                        spaces: 2
                      })
                    );
                  } catch (error) {}
                }}
              ></CodeMirror>

              {error && (
                <div className='bg-danger-subtle border-start border-danger border-4 p-4 mt-4 position-relative d-flex justify-content-between'>
                  <div>
                    {error.message}
                    <span className='badge bg-danger rounded-pill badge-float badge-float-outside'></span>
                  </div>
                  <div className='flex-shrink-0'>
                    <a
                      href='#'
                      onClick={(e) => {
                        e.preventDefault();
                        scrollDocToView();
                      }}
                    >
                      Go to line
                    </a>
                  </div>
                </div>
              )}
              {!error && (
                <div className='bg-success-subtle border-start border-success border-4 p-4 mt-4'>
                  <div>XML is valid!</div>
                </div>
              )}
            </div>

            <div className='col-12 col-md-6 mt-4 mt-md-0 d-flex flex-column code-editor-container'>
              <CodeMirror
                {...defaultCodeEditorConfig()}
                value={jsonContent}
                lang='json'
              ></CodeMirror>
            </div>
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
