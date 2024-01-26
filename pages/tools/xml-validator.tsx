import { xml } from '@codemirror/lang-xml';
import { Diagnostic, forEachDiagnostic } from '@codemirror/lint';
import CodeMirror, {
  EditorSelection,
  ReactCodeMirrorRef
} from '@uiw/react-codemirror';
import { FunctionComponent, useRef, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { defaultCodeEditorConfig, xmlLinter } from '../../utils/code-editor';

const XmlValidator: FunctionComponent = function () {
  const [error, setError] = useState<Diagnostic>(null);
  const xmlEditor = useRef<ReactCodeMirrorRef>();

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
        title={'Online XML validator'}
        description="Mockoon's XML validator tool: validate your XML data in an online editor and get detailed error messages."
      />
      <Hero
        title='Online <span class="text-primary">XML validator</span>'
        subtitle='Validate your XML online and get detailed error messages'
      />

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 d-flex flex-column code-editor-container'>
              <CodeMirror
                {...defaultCodeEditorConfig([xml(), xmlLinter])}
                ref={xmlEditor}
                value={`<root>  \n  <!-- XML validator -->\n  <message>Paste your XML here</message>\n</root>`}
                lang='xml'
                onUpdate={(view) => {
                  setError(null);

                  forEachDiagnostic(view.state, (error) => {
                    setError(error);
                  });
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
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='fw-medium'>What is XML?</h3>
              <p>
                XML stands for <strong>eXtensible Markup Language</strong>. It
                is a <strong>markup language</strong> and{' '}
                <strong>file format</strong> to store and transport data between
                disparate systems. It is designed to be both human-readable and
                machine-readable. It is very similar to HTML.
              </p>
              <p>
                Several rules, defined by specifications, ensure that an XML
                document is well-formed and understandable by the recipient. It
                can be used to represent arbitrary data structures like lists or
                records.
              </p>

              <h3 className='mt-6 fw-medium'>XML syntax</h3>
              <p>
                XML is principally composed of a <strong>declaration</strong>,{' '}
                <strong>elements</strong>, <strong>attributes</strong>, and{' '}
                <strong>text or content</strong>.
              </p>
              <ul>
                <li>
                  <strong>Declaration</strong>: the first line of an XML
                  document is the declaration. It defines the XML version and
                  the encoding used. For example:{' '}
                  <code>{`<?xml version="1.0" encoding="UTF-8"?>`}</code>. It is
                  mandatory for XML version 1.1 but optional for XML version
                  1.0.
                </li>
                <li>
                  <strong>Elements</strong>: XML documents are composed of
                  elements. An element is defined by a start tag, an end tag,
                  and the content between them. For example:{' '}
                  <code>{`<element>content</element>`}</code>
                </li>
                <li>
                  <strong>Attributes</strong>: elements can have attributes that
                  are defined in the start tag. For example:{' '}
                  <code>{`<element attribute="value">content</element>`}</code>
                </li>
                <li>
                  <strong>Text or content</strong>: the content of an element
                  can be text or other elements. For example:{' '}
                  <code>{`<element>content</element>`}</code> or{' '}
                  <code>{`<element><child>content</child></element>`}</code>
                </li>
              </ul>

              <h3 className='mt-6 fw-medium'>Common errors</h3>
              <p>
                Here is a list of common errors you might encounter when writing
                XML:
              </p>
              <ul>
                <li>
                  <strong>Missing closing tag</strong>: elements must have an
                  opening and a closing tag. For example:{' '}
                  <code>{`<element>content</element>`}</code>
                </li>
                <li>
                  <strong>Missing closing bracket</strong>: each element must
                  have an opening and a closing bracket. For example:{' '}
                  <code>{`<element>content</element>`}</code>
                </li>
                <li>
                  <strong>Missing quotes</strong>: attributes value must be
                  enclosed in quotes. For example:{' '}
                  <code>{`<element attribute="value">content</element>`}</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default XmlValidator;
