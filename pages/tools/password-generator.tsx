import { FunctionComponent, useEffect, useState } from 'react';
import CodeBlock from '../../components/code-block';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const characters = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: "~!@#$%^&()_+-={}[];',."
};

const randomNumber = () => {
  if (!crypto) {
    return Math.random();
  }

  return crypto.getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32);
};

const PasswordGenerator: FunctionComponent = function () {
  const [length, setLength] = useState(15);
  const [password, setPassword] = useState(null);
  const [selectedCharacters, setSelectedCharacters] = useState({
    lower: true,
    upper: true,
    numbers: true,
    symbols: true
  });

  const generatePassword = () => {
    let password = '';
    const selectedCharactersArray = Object.keys(characters).filter(
      (key) => selectedCharacters[key]
    );

    if (selectedCharactersArray.length === 0) {
      return 'Please select at least one character type.';
    }

    for (let i = 0; i < length; i++) {
      const characterType =
        selectedCharactersArray[
          Math.floor(randomNumber() * selectedCharactersArray.length)
        ];
      const characterSet = characters[characterType];
      password +=
        characterSet[Math.floor(randomNumber() * characterSet.length)];
    }

    return password;
  };

  useEffect(() => {
    setPassword(generatePassword());
  }, [length, selectedCharacters]);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Passwords and random strings generator'}
        description='Generate complex and cryptographically secure random passwords and strings online using this free tool'
      />
      <Hero
        title='<span class="text-primary">Passwords</span> and random <span class="text-primary">strings generator</span>'
        subtitle='Generate complex and cryptographically secure random passwords and strings online using this free tool'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <CodeBlock code={password} lineBreak language='text' />
          <div className='d-flex align-items-center flex-wrap'>
            <div className='mt-4 w-50'>
              <label htmlFor='passwordLength' className='form-label'>
                Length (1-100) - Current: {length}
              </label>
              <input
                type='range'
                className='form-range'
                min='1'
                max='100'
                id='passwordLength'
                value={length}
                onChange={(event) => {
                  setLength(parseInt(event.target.value));
                }}
              />
            </div>
            <div className='d-flex flex-column mt-4 ms-md-auto'>
              <label className='d-block form-label'>Characters</label>
              <div className='d-flex flex-wrap align-items-center '>
                <div className='form-check me-6'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='enableLower'
                    checked={selectedCharacters.lower}
                    onChange={() => {
                      setSelectedCharacters({
                        ...selectedCharacters,
                        lower: !selectedCharacters.lower
                      });
                    }}
                  />
                  <label className='form-check-label' htmlFor='enableLower'>
                    a-b
                  </label>
                </div>
                <div className='form-check me-6'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='enableUpper'
                    checked={selectedCharacters.upper}
                    onChange={() => {
                      setSelectedCharacters({
                        ...selectedCharacters,
                        upper: !selectedCharacters.upper
                      });
                    }}
                  />
                  <label className='form-check-label' htmlFor='enableUpper'>
                    A-B
                  </label>
                </div>
                <div className='form-check me-6'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='enableNumbers'
                    checked={selectedCharacters.numbers}
                    onChange={() => {
                      setSelectedCharacters({
                        ...selectedCharacters,
                        numbers: !selectedCharacters.numbers
                      });
                    }}
                  />
                  <label className='form-check-label' htmlFor='enableNumbers'>
                    0-9
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='enableSymbols'
                    checked={selectedCharacters.symbols}
                    onChange={() => {
                      setSelectedCharacters({
                        ...selectedCharacters,
                        symbols: !selectedCharacters.symbols
                      });
                    }}
                  />
                  <label className='form-check-label' htmlFor='enableSymbols'>
                    ~-#
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            className='btn btn-primary mt-3'
            onClick={() => {
              setPassword(generatePassword());
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
                This tool generates cryptographically secure random passwords
                and strings. You can choose the length of the password and
                select the characters you want to include in the generated
                password: lowercase letters, uppercase letters, numbers, and
                symbols.
              </p>
              <p>
                This tool uses the browser's built-in{' '}
                <code>crypto.getRandomValues</code> function to generate random
                numbers. This function is available in most modern browsers. It
                will fall back to <code>Math.random</code> if the function is
                not available.
              </p>
              <h3 className='mt-6 fw-medium'> Why use a password generator?</h3>
              <p>
                Passwords generated by this tool are more secure than passwords
                that are easy to remember. They are also more secure than
                passwords that are easy to guess or that are based on personal
                information.
              </p>
              <p>
                Using a password generator can help you create strong passwords
                that are difficult to crack. This can help protect your online
                accounts from being hacked or compromised.
              </p>
              <h3 className='mt-6 fw-medium'>
                Best practices for using passwords
              </h3>
              <p>
                Here are some best practices for using passwords generated by
                this tool:
              </p>
              <ul>
                <li>
                  <strong>Use a unique password for each account:</strong> Do
                  not reuse passwords across multiple accounts. If one account
                  is compromised, all accounts with the same password are at
                  risk.
                </li>
                <li>
                  <strong> Generate strong passwords:</strong> Use a password
                  generator to create strong, random passwords that are
                  difficult to guess. Strong passwords typically include a mix
                  of lowercase letters, uppercase letters, numbers, and symbols.
                </li>
                <li>
                  <strong>Generate long passwords:</strong> Longer passwords are
                  generally more secure than shorter passwords. Consider
                  generating passwords that are at least 15 characters long.
                </li>
                <li>
                  <strong>Use a password manager:</strong> Consider using a
                  password manager to store and manage your passwords securely.
                  A password manager can help you generate strong passwords,
                  store them securely, and autofill them when needed.
                </li>
                <li>
                  <strong>Enable two-factor authentication:</strong> Enable
                  two-factor authentication (2FA) on your accounts whenever
                  possible. 2FA adds an extra layer of security by requiring
                  users to provide two forms of identification to access their
                  accounts.
                </li>
              </ul>
              <h3 className='mt-6 fw-medium'>
                Is it safe to use a password generator and this tool?
              </h3>
              <p>
                This tool generates passwords and strings directly in your
                browser using JavaScript. The generated passwords are not sent
                over the internet or stored on a server. The passwords are
                generated locally on your device and are not shared with anyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PasswordGenerator;
