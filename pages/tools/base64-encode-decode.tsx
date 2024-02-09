import { FunctionComponent, useState } from 'react';
import Base64Editor, {
  base64ToBytes,
  bytesToBase64
} from '../../components/editors/base64-editor';
import TextEditor from '../../components/editors/text-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const Base64EncodeDecode: FunctionComponent = function () {
  const [error, setError] = useState<string>(null);
  const [base64, setBase64] = useState<string>('SGVsbG8gd29ybGQh');
  const [text, setText] = useState<string>('Hello world!');

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Base64 online encoder/decoder'}
        description='Encode and decode your data to/from the Base64 format using this free online tool.'
      />
      <Hero
        title='Online <span class="text-primary">Base64 encoder/decoder</span>'
        subtitle='Encode or decode your data to/from the Base64 format'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <TextEditor
              value={text}
              onValueChange={(value) => {
                try {
                  setBase64(bytesToBase64(new TextEncoder().encode(value)));
                } catch (error) {}
              }}
            />

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-sync'></i>
            </div>

            <Base64Editor
              value={base64}
              onValueChange={(value) => {
                try {
                  setText(new TextDecoder().decode(base64ToBytes(value)));
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
              <h3 className='fw-medium'>What is Base64 encoding?</h3>
              <p>
                Base64 is a binary-to-text encoding scheme that transforms
                binary data into a sequence of characters limited to a set of 64
                unique ASCII characters. Base64 is designed to transport data
                stored in binary format (such as images) over systems that are
                designed to only handle data in a plain-text format. Base64 is
                also used to encode email attachments.
              </p>

              <h3 className='mt-6 fw-medium'>How does Base64 encoding work?</h3>
              <p>
                Base64 encoding works by converting a binary string to a
                64-character subset of the ASCII character set. The 64
                characters in the subset are common to most encodings and
                printable. They are comprised of 26 lowercase letters, 26
                uppercase letters, 10 numbers, and the "+" and "/" symbols. The
                "=" symbol is also used as padding at the end of the encoded
                string.
              </p>
              <p>
                Example of a Base64 encoded string:
                <br />
                <code>SGVsbG8gd29ybGQh</code>
                <br />
                The above-encoded string is decoded to the following binary
                string:
                <br />
                <code>Hello world!</code>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Base64EncodeDecode;
