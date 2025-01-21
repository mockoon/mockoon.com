import { FunctionComponent } from 'react';
import Card from '../../components/card';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';

const tools = [
  {
    title: 'JSON validator',
    description: 'Validate your JSON online and get detailed error messages',
    links: [{ src: '/tools/json-validator/', text: 'Validate' }],
    imageSrc: '/images/illustrations/json-valid.svg'
  },
  {
    title: 'XML validator',
    description: 'Validate your XML online and get detailed error messages',
    links: [{ src: '/tools/xml-validator/', text: 'Validate' }],
    imageSrc: '/images/illustrations/xml-valid.svg'
  },
  {
    title: 'YAML validator',
    description:
      'Validate your YAML configuration online and get detailed error messages',
    links: [{ src: '/tools/yaml-validator/', text: 'Validate' }],
    imageSrc: '/images/illustrations/yaml-valid.svg'
  },
  {
    title: 'XML to JSON converter',
    description:
      'Convert your data from XML to JSON and back and verify their validity',
    links: [{ src: '/tools/xml-to-json/', text: 'Convert' }],
    imageSrc: '/images/illustrations/xml-to-json.svg'
  },
  {
    title: 'Base64 encoder/decoder',
    description: 'Encode or decode your data to/from the Base64 format',
    links: [{ src: '/tools/base64-encode-decode/', text: 'Encode/decode' }],
    imageSrc: '/images/illustrations/base64-encode-decode.svg'
  },
  {
    title: 'JSON to YAML converter',
    description:
      'Convert your data from JSON to YAML and back and verify their validity',
    links: [{ src: '/tools/json-to-yaml/', text: 'Convert' }],
    imageSrc: '/images/illustrations/json-to-yaml.svg'
  },
  {
    title: 'JSONPath and object-path online evaluator',
    description:
      'Extract values from JSON data using JSONPath or object-path syntaxes',
    links: [
      { src: '/tools/json-object-path-evaluator/', text: 'Extract data' }
    ],
    imageSrc: '/images/illustrations/json-path-evaluator.svg'
  },
  {
    title: 'String length and word counter',
    description:
      'Count the number of characters, words, and lines in your text',
    links: [{ src: '/tools/string-length-word-counter/', text: 'Count' }],
    imageSrc: '/images/illustrations/string-length-word-counter.svg'
  },
  {
    title: 'Date and unix timestamp converter and formatter',
    description:
      'Convert and format dates and unix timestamps online using date-fns library',
    links: [
      {
        src: '/tools/date-unix-timestamp-converter-formatter/',
        text: 'Convert and format'
      }
    ],
    imageSrc:
      '/images/illustrations/date-unix-timestamp-converter-formatter.svg'
  },
  {
    title: 'Online HTTP headers analyzer',
    description:
      'Analyze and extract information from HTTP headers of a request or response',
    links: [
      {
        src: '/tools/http-headers-analyzer/',
        text: 'Analyze'
      }
    ],
    imageSrc: '/images/illustrations/http-headers-analyzer.svg'
  },
  {
    title: 'Online JSON beautifier and formatter',
    description: 'Format and beautify your JSON data online',
    links: [
      {
        src: '/tools/json-formatter-beautifier/',
        text: 'Format JSON'
      }
    ],
    imageSrc: '/images/illustrations/json-formatter-beautifier.svg'
  },
  {
    title: 'Online CSV parser and JSON converter',
    description: 'View and parse CSV data online and convert it to JSON',
    links: [
      {
        src: '/tools/csv-parser-json-converter/',
        text: 'Convert CSV'
      }
    ],
    imageSrc: '/images/illustrations/csv-parser-json-converter.svg'
  },
  {
    title: 'Online JWT decoder',
    description:
      'Decode your JWT tokens online and extract the header and payload data',
    links: [
      {
        src: '/tools/jwt-decode/',
        text: 'Decode'
      }
    ],
    imageSrc: '/images/illustrations/jwt-decode.svg'
  },
  {
    title: 'Markdown to HTML converter',
    description:
      'Parse your Markdown content and convert it to HTML using marked library',
    links: [
      {
        src: '/tools/markdown-to-html/',
        text: 'Convert'
      }
    ],
    imageSrc: '/images/illustrations/markdown-to-html.svg'
  },
  {
    title: 'Passwords and random strings generator',
    description:
      'Generate cryptographically secure random passwords and strings',
    links: [
      {
        src: '/tools/password-generator/',
        text: 'Generate'
      }
    ],
    imageSrc: '/images/illustrations/password-string-generator.svg'
  },
  {
    title: 'Online SLA downtime and uptime calculator',
    description:
      'Calculate the downtime and uptime of your services with this online SLA calculator',
    links: [
      {
        src: '/tools/sla-downtime-calculator/',
        text: 'Calculate'
      }
    ],
    imageSrc: '/images/illustrations/sla-downtime-calculator.svg'
  },
  {
    title: 'Domain DNS lookup',
    description: 'Lookup DNS records of a domain name online',
    links: [
      {
        src: '/tools/domain-dns-lookup/',
        text: 'DNS Lookup'
      }
    ],
    imageSrc: '/images/illustrations/domain-dns-lookup.svg'
  },
  {
    title: 'MX lookup',
    description: 'Lookup MX records of a domain name online',
    links: [
      {
        src: '/tools/mx-lookup/',
        text: 'MX Lookup'
      }
    ],
    imageSrc: '/images/illustrations/mx-lookup.svg'
  },
  {
    title: 'UUID generator',
    description: 'Generate unique UUIDs online',
    links: [
      {
        src: '/tools/uuid-generator/',
        text: 'Generate'
      }
    ],
    imageSrc: '/images/illustrations/uuid-generator.svg'
  },
  {
    title: 'JSON schema validator',
    description: 'Validate your JSON data against a JSON schema online',
    links: [
      {
        src: '/tools/json-schema-validator/',
        text: 'Generate'
      }
    ],
    imageSrc: '/images/illustrations/json-schema-validator.svg'
  },
  {
    title: 'JSON minifier',
    description: 'Minify your JSON data online',
    links: [
      {
        src: '/tools/json-minifier/',
        text: 'Minify'
      }
    ],
    imageSrc: '/images/illustrations/json-minifier.svg'
  }
];

const Tools: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Mockoon useful online tools'}
        description='Discover our set of useful online tools to help you with your API development and testing: XML to JSON converter, JSON validator, XML validator'
      />

      <Hero
        title='🛠️ Mockoon <span class="text-primary">useful tools</span>'
        subtitle='Discover our set of useful online tools to help you with your API development and testing'
      />

      <section className='py-6 py-md-8'>
        <div className='container'>
          <div className='row justify-content-center'>
            {tools.map((tool, toolIndex) => (
              <div
                key={`tool${toolIndex}`}
                className='col-12 col-lg-4 mb-4 d-flex'
              >
                <Card
                  data={{
                    ...tool
                  }}
                  vertical
                  cover={false}
                  border
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
