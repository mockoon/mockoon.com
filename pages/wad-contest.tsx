import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormHoneypot from '../components/form-honeypot';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';

const WadContest: FunctionComponent = function () {
  const {
    register: registerFormField,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
  const [apiError, setApiError] = useState(false);
  const [secretUrl, setSecretUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [counter, setCounter] = useState(0);
  const randomTexts = [
    '🎲 Shuffling JSONs...',
    '🤡 Mocking the unmockable...',
    '🥸 Calling fake endpoints...',
    '🕶️ Bypassing reality...',
    '🍀 Generating random luck...',
    '💽 Injecting test data...',
    '🎉 Simulating success...',
    '⏱️ Adding latency for realism...',
    '👺 Faking a 200 OK...',
    '🦝 Mockooning your prize...',
    '⌚ Waiting for backend (not really)...',
    '🏗️ Building fake responses...',
    '🧙‍♂️ Templating your destiny...',
    '🎭 Playing with mock data...',
    '🎈 Inflating your expectations...',
    '🎊 Celebrating your participation...'
  ];
  const messages = {
    LOST: '🥲 No prize this time. But hey, you just used a mock API!',
    '3_MONTHS': "🎉 Congrats! You've won 3 months of Mockoon Cloud Solo.",
    '1_YEAR': '🎉 You hit the jackpot! Enjoy 1 year of Mockoon Cloud Solo.'
  };
  const randomTextsElem = useRef(null);

  function change() {
    setCounter((prevCounter) => {
      const nextCounter =
        prevCounter + 1 >= randomTexts.length ? 0 : prevCounter + 1;
      if (randomTextsElem.current) {
        randomTextsElem.current.innerHTML = randomTexts[nextCounter];
      }
      return nextCounter;
    });
  }

  const onSubmitEmail = async (data) => {
    if (!data['work_address']) {
      delete data['work_address'];

      try {
        const response = await fetch(
          `https://wad-conf-contest-5g6r8x3s2.us2.mockoon.app/register`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }
        );

        if (response.status === 200) {
          setSecretUrl((await response.json()).url);
          reset();
        } else {
          setApiError(true);
        }
      } catch {
        setApiError(true);
      }
    }
  };

  useEffect(() => {
    let interval;

    if (secretUrl) {
      fetch(secretUrl, {
        method: 'GET'
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setSecretUrl(null);
            reset();
          }
        })
        .then((data) => {
          if (data?.message) {
            setResult(data.message);
          } else {
            setResult(null);
          }
        });

      // Show the first sentence right away
      if (randomTextsElem.current) {
        randomTextsElem.current.innerHTML = randomTexts[0];
      }

      interval = setInterval(() => {
        change();
      }, 2000);
    }
    return () => {
      clearInterval(interval);
      if (randomTextsElem.current) {
        randomTextsElem.current.innerHTML = '';
      }
    };
  }, [secretUrl]);

  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title='Mockoon @ WeAreDevelopers <span class="text-primary">Contest</span>'
        description='Participate in the Mockoon contest at WeAreDevelopers and stand a chance to win free Mockoon Cloud Solo subscriptions!'
      />

      <Hero
        title='Mockoon @ WeAreDevelopers <span class="text-primary">Contest</span>'
        subtitle='Participate in the Mockoon contest at WeAreDevelopers and stand a chance to win free Mockoon Cloud Solo subscriptions!'
      />
      <section
        id='form'
        className='pt-4 pb-8 pb-md-14 border-top bg-gradient-light-white'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-10 col-lg-8 text-center'>
              <p className='fs-lg text-gray-700 mb-7 mb-md-9'></p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              {!secretUrl && !result && (
                <form
                  onSubmit={(e) => {
                    setSecretUrl(false);
                    setApiError(false);
                    handleSubmit(onSubmitEmail)(e);
                  }}
                >
                  <div className='row'>
                    <div className='form-group mb-5'>
                      <label className='form-label' htmlFor='email'>
                        Email*
                      </label>

                      <input
                        className='form-control'
                        name='email'
                        id='email'
                        type='email'
                        placeholder='hello@example.org'
                        required
                        {...registerFormField('email')}
                      />
                    </div>
                  </div>
                  <FormHoneypot
                    inputRegister={registerFormField('work_address')}
                  />
                  {apiError && (
                    <div className='row justify-content-center'>
                      <div className='col-auto text-danger text-center fw-bold pb-4'>
                        Something went wrong! We are sorry for the
                        inconvenience.
                      </div>
                    </div>
                  )}

                  {isSubmitting && <Spinner />}
                  <div className='form-check mb-2'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='terms'
                      required
                      {...registerFormField('terms')}
                    />
                    <label className='form-check-label' htmlFor='terms'>
                      In order to participate in this contest, I agree to
                      subscribe to Mockoon's newsletter and receive updates
                      about the WeAreDevelopers Contest. You can unsubscribe at
                      any time.
                    </label>
                  </div>
                  <div className='row justify-content-center'>
                    <div className='col-auto'>
                      <button
                        type='submit'
                        className='btn btn-primary-subtle lift'
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}
              {secretUrl && !result && (
                <div className='text-center fs-1'>
                  <span ref={randomTextsElem} className='text-show'></span>
                </div>
              )}
              {result && (
                <div className='alert bg-gray-300 text-center fs-1'>
                  <span>{messages[result]}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WadContest;
