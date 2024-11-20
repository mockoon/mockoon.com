import { FunctionComponent, useEffect, useState } from 'react';
import CodeBlock from '../../components/code-block';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const UuidGenerator: FunctionComponent = function () {
  const generateUuid = () => {
    return crypto.randomUUID();
  };
  const [uuid, setUuid] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUuid(generateUuid());
    }
  }, []);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'UUIDs v4 generator'}
        description='Generate unique UUIDs v4 with this free online tool: UUIDs are unique identifiers that are used in software development to identify resources.'
      />
      <Hero
        title='<span class="text-primary">UUIDs</span> generator'
        subtitle='Generate unique UUIDs v4 with this free online tool'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <CodeBlock code={uuid} lineBreak language='text' />
          <button
            className='btn btn-primary mt-3'
            onClick={() => {
              setUuid(generateUuid());
            }}
          >
            Generate
          </button>
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
              <h3 className='mt-6 fw-medium'>About this tool</h3>
              <p>
                This tool generates unique UUIDs v4. Click on the "Generate"
                button to get a new UUID.
              </p>
              <h3 className='mt-6 fw-medium'>About UUIDs</h3>
              <p>
                UUIDs are unique identifiers that are used in software
                development to identify resources. UUIDs are 128-bit numbers
                represented as 32 hexadecimal digits separated by hyphens. Their
                uniqueness and low probability of duplication make them ideal
                for use in distributed systems.
              </p>
              <p>
                UUIDs are commonly used in databases, APIs, and other systems to
                uniquely identify resources. They are also used in various
                programming languages and frameworks to generate unique
                identifiers.
              </p>
              <h3 className='mt-6 fw-medium'>About UUID v4</h3>
              <p>
                UUID v4 is one of the four versions of UUIDs defined in RFC
                4122. It is a randomly generated UUID that is based on random
                numbers. UUID v4 is the most commonly used version of UUIDs and
                is suitable for most use cases.
              </p>
              <p>
                UUIDs v4 are not guaranteed to be unique, but the probability of
                generating duplicate UUIDs is extremely low and can usually be
                ignored.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UuidGenerator;
