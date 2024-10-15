import { FunctionComponent, useState } from 'react';
import JsonEditor from '../../components/editors/json-editor';
import TextEditor from '../../components/editors/text-editor';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const decodeJwt = (token: string) => {
  const parts = token.split('.');
  const header = parts[0];
  const payload = parts[1];

  if (parts.length < 2 || !header || !payload) {
    throw new Error('Invalid JWT token');
  }

  return {
    header: JSON.parse(atob(header)),
    payload: JSON.parse(atob(payload))
  };
};

const JwtEncodeDecode: FunctionComponent = function () {
  const [textContent] = useState<string>(
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0IiwibmFtZSI6Ik1vY2sgT29uIiwiaWF0IjoxNzI0NTcwMzkxfQ.VB0POLK_cNMijO0tDinXN3Z9C2Zy3l0MPtBqs-af_48`
  );
  const [headerContent, setHeaderContent] = useState<string>(`{
  "alg": "HS256",
  "typ": "JWT"
}`);
  const [payloadContent, setPayloadContent] = useState<string>(`{
  "sub": "1234",
  "name": "Mock Oon",
  "iat": 1724570391
}`);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online JWT decoder'}
        description='Use this tool to decode your JSON Web Tokens online and extract the header and payload data'
      />
      <Hero
        title='Online <span class="text-primary">JWT decoder</span>'
        subtitle='Use this tool to decode your JSON Web Tokens online and extract the header and payload data'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div className='code-editor-container'>
              <TextEditor
                value={textContent}
                hideGoToLine
                onValueChange={(value) => {
                  try {
                    const { header, payload } = decodeJwt(value);

                    setHeaderContent(JSON.stringify(header, null, 2));
                    setPayloadContent(JSON.stringify(payload, null, 2));
                  } catch (error) {}
                }}
                onErrorChange={(currentValue: string, viewUpdate) => {
                  try {
                    decodeJwt(currentValue);

                    return null;
                  } catch (error) {
                    return {
                      message: 'Invalid JWT token'
                    };
                  }
                }}
              />
            </div>

            <div className='code-editor-sync m-2 fs-1 text-gray-600 align-self-center text-center'>
              <i className='icon-arrow_forward'></i>
            </div>

            <div className=''>
              <div className='code-editor-container-half d-flex flex-column'>
                <div>
                  <h3 className='fw-bold'>Header:</h3>
                </div>
                <div className='flex-fill' style={{ minHeight: 0 }}>
                  <JsonEditor
                    value={headerContent}
                    onValueChange={(value) => {
                      console.log(value);
                    }}
                    showValidMsg={false}
                    showErrors={false}
                  />
                </div>
              </div>
              <div className='code-editor-container-half d-flex flex-column'>
                <div>
                  <h3 className='fw-bold mt-2'>Payload:</h3>
                </div>
                <div className='flex-fill' style={{ minHeight: 0 }}>
                  <JsonEditor
                    value={payloadContent}
                    showValidMsg={false}
                    showErrors={false}
                  />
                </div>
              </div>
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
              <h3 className='fw-medium'>About this tool</h3>
              <p>
                This tool allows you to decode your{' '}
                <strong>JSON Web Tokens (JWT)</strong> and extract the{' '}
                <strong>header and payload data</strong>. Simply paste your JWT
                token in the input field on the left and the tool will
                automatically decode it and display the header and payload data
                in the right-hand side JSON editors.
              </p>

              <h3 className='mt-6 fw-medium'>About JSON Web Tokens</h3>
              <p>
                JSON Web Tokens (JWT) are an open standard that defines a
                compact and self-contained way for securely transmitting
                information between parties as a JSON object.
              </p>
              <p>
                The token is composed of three parts: the{' '}
                <strong>header</strong>, the <strong>payload</strong>, and the{' '}
                <strong>signature</strong>. The content of a JWT is encoded
                using Base64 encoding, which makes it readable to humans but
                still secure. The information in the header and payload is not
                encrypted, but it is signed using a secret key or a
                public/private key pair. This allows the recipient to verify
                that the token has not been tampered with.
              </p>
              <p>
                JWTs are commonly used for <strong>authentication</strong> and{' '}
                <strong>authorization</strong> in web applications, APIs, and
                microservices. They are often used as a replacement for
                traditional session-based authentication systems because they
                are stateless, scalable, and secure.
              </p>
              <p>
                The header typically consists of two parts: the type of the
                token, which is JWT, and the signing algorithm being used, such
                as HMAC SHA256 or RSA. <br />
                Example: <code>{"{ 'alg': 'HS256', 'typ': 'JWT' }"}</code>
              </p>
              <p>
                The payload contains the claims, which are statements about an
                entity (typically, the user) and additional data.
                <br />
                Example:{' '}
                <code>
                  {"{ 'sub': '1234567890', 'name': 'John Doe', 'admin': true }"}
                </code>
              </p>
              <h3 className='mt-6 fw-medium'>
                Usual claims in the payload are:
              </h3>
              <ul>
                <li>
                  <strong>iss</strong> (issuer): The issuer of the token,
                  usually a URL or the name of the service that issued the
                  token.
                </li>
                <li>
                  <strong>sub</strong> (subject): The subject of the token,
                  usually the user ID or a unique identifier for the user.
                </li>
                <li>
                  <strong>aud</strong> (audience): The audience of the token,
                  identifying the recipients for which the token is intended.
                </li>
                <li>
                  <strong>exp</strong> (expiration time): The expiration time of
                  the token, after which it is no longer valid.
                </li>
                <li>
                  <strong>nbf</strong> (not before): The time before which the
                  token is not valid.
                </li>
                <li>
                  <strong>iat</strong> (issued at): The time the token was
                  issued.
                </li>
                <li>
                  <strong>jti</strong> (JWT ID): A unique identifier for the
                  token.
                </li>
              </ul>

              <p>
                Aside from these standard claims, you can also include custom
                claims in the payload to store additional information about the
                user or the token itself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JwtEncodeDecode;
