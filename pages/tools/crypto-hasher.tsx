import { Fragment, FunctionComponent, useState } from 'react';
import TextEditor from '../../components/editors/text-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const CryptoHasher: FunctionComponent = function () {
  const [inputText, setInputText] = useState<string>(
    'Hello, World! This is a sample text to be hashed.'
  );
  const [hashMethod, setHashMethod] = useState<string>('SHA-256');
  const [hashedText, setHashedText] = useState<string>(
    '888f4fd871ae8ee0c8dd62832f6edf15110151d8e441ccffe4ca4c0fdf2dfeb8'
  );

  const hashMethods = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];

  const generateHash = async (text: string, method: string) => {
    if (!text.trim()) {
      setHashedText('');
      return;
    }

    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      let algorithm: string;

      switch (method) {
        case 'SHA-1':
          algorithm = 'SHA-1';
          break;
        case 'SHA-256':
          algorithm = 'SHA-256';
          break;
        case 'SHA-384':
          algorithm = 'SHA-384';
          break;
        case 'SHA-512':
          algorithm = 'SHA-512';
          break;
        default:
          algorithm = 'SHA-256';
      }

      const hashBuffer = await crypto.subtle.digest(algorithm, data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
      setHashedText(hashHex);
    } catch (error) {
      setHashedText('Error generating hash');
    }
  };

  const handleTextChange = (value: string) => {
    //setInputText(value);
    generateHash(value, hashMethod);
  };

  const handleMethodChange = (method: string) => {
    setHashMethod(method);
    generateHash(inputText, method);
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online crypto hasher'}
        description='Generate cryptographic hashes online using SHA-1, SHA-256, SHA-384, or SHA-512 algorithms. Secure client-side hashing with no data transmission.'
      />
      <Hero
        title='Online <span class="text-primary">crypto hasher</span>'
        subtitle='Generate cryptographic hashes using various algorithms including SHA-1, SHA-256, SHA-384, and SHA-512'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row mb-4'>
            <div className='col-12'>
              <div className='form-group'>
                <label className='form-label fw-medium me-2'>
                  Hash Algorithm:
                </label>
                <div className='btn-group btn-group-sm' role='group'>
                  {hashMethods.map((method) => (
                    <Fragment key={method}>
                      <input
                        type='radio'
                        className='btn-check'
                        name='hashMethod'
                        id={`method-${method}`}
                        value={method}
                        checked={hashMethod === method}
                        onChange={(e) => handleMethodChange(e.target.value)}
                      />
                      <label
                        className='btn btn-outline-primary'
                        htmlFor={`method-${method}`}
                      >
                        {method}
                      </label>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='code-editor-layout-dual'>
            <div className='code-editor-container'>
              <div className='mb-2'>
                <label className='form-label fw-medium'>Input Text:</label>
              </div>
              <TextEditor value={inputText} onValueChange={handleTextChange} />
            </div>

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-arrow_forward'></i>
            </div>

            <div className='code-editor-container'>
              <div className='mb-2'>
                <label className='form-label fw-medium'>
                  {hashMethod} Hash:
                </label>
              </div>
              <TextEditor value={hashedText} />
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
              <h3 className='fw-medium'>What is cryptographic hashing?</h3>
              <p>
                Cryptographic hashing is a process that transforms input data of
                any size into a <strong>fixed-size string of characters</strong>
                , called a hash or digest. Hash functions are designed to be{' '}
                <strong>one-way functions</strong>, meaning it's computationally
                infeasible to reverse the process and obtain the original input
                from the hash.
              </p>
              <p>
                Cryptographic hash functions have several important properties:
                they are <strong>deterministic</strong> (same input always
                produces the same hash), have <strong>avalanche effect</strong>{' '}
                (small input changes result in drastically different hashes),
                and are <strong>collision-resistant</strong> (it's extremely
                difficult to find two different inputs that produce the same
                hash).
              </p>

              <h3 className='mt-6 fw-medium'>Supported hash algorithms</h3>
              <ul>
                <li>
                  <strong>SHA-1</strong>: Produces a 160-bit (20-byte) hash
                  value. While still widely used, SHA-1 is considered
                  cryptographically weak and should be avoided for
                  security-critical applications.
                </li>
                <li>
                  <strong>SHA-256</strong>: Part of the SHA-2 family, produces a
                  256-bit (32-byte) hash. Widely used and considered secure for
                  most applications. Used in Bitcoin and many other blockchain
                  technologies.
                </li>
                <li>
                  <strong>SHA-384</strong>: Part of the SHA-2 family, produces a
                  384-bit (48-byte) hash. Offers higher security than SHA-256
                  with longer hash output.
                </li>
                <li>
                  <strong>SHA-512</strong>: Part of the SHA-2 family, produces a
                  512-bit (64-byte) hash. Provides the highest security level
                  among the supported algorithms.
                </li>
              </ul>

              <h3 className='mt-6 fw-medium'>Common use cases</h3>
              <p>Cryptographic hashes are used in many applications:</p>
              <ul>
                <li>
                  <strong>Data integrity verification</strong>: Ensuring files
                  haven't been tampered with by comparing hash values before and
                  after transmission or storage.
                </li>
                <li>
                  <strong>Password storage</strong>: Storing hashed passwords
                  instead of plaintext to protect user credentials (typically
                  combined with salting).
                </li>
                <li>
                  <strong>Digital signatures</strong>: Creating compact
                  representations of documents for cryptographic signing.
                </li>
                <li>
                  <strong>Blockchain technology</strong>: Linking blocks and
                  creating proof-of-work mechanisms in cryptocurrencies.
                </li>
                <li>
                  <strong>Checksums</strong>: Verifying data transmission
                  accuracy and detecting corruption.
                </li>
              </ul>

              <h3 className='mt-6 fw-medium'>Security and privacy</h3>
              <p>
                This tool performs all hashing operations{' '}
                <strong>locally in your browser</strong> using the Web Crypto
                API. Your input data is never transmitted to any server,
                ensuring complete privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CryptoHasher;
