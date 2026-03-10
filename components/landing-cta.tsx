import { FunctionComponent } from 'react';
import { useAuth } from '../utils/auth';

const LandingCta: FunctionComponent = function () {
  const { isAuth } = useAuth();

  const cta = () => {
    if (isAuth) {
      window.location.href = '/account/subscribe/';
    } else {
      localStorage.setItem('redirect', '/account/subscribe/');
      window.location.href = `/signup/`;
    }
  };

  return (
    <section className='py-6 py-md-8'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 text-center'>
            <h2 className='fw-bold mb-4'>
              Ready to accelerate your API development?
            </h2>
            <p className='text-muted mb-6'>
              Join thousands of developers who trust Mockoon for API mocking
            </p>
            <a
              href=''
              className='btn btn-primary btn-lg lift me-3'
              onClick={(event) => {
                event.preventDefault();
                cta();
              }}
            >
              Try Mockoon Cloud <i className='icon-arrow_forward ms-2'></i>
            </a>
            <a
              href='/download/'
              className='btn btn-outline-primary btn-lg lift'
            >
              Download desktop app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCta;
