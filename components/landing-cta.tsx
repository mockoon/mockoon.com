import { FunctionComponent } from 'react';

const LandingCta: FunctionComponent = function () {
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
            <a href='/pro/' className='btn btn-primary btn-lg lift me-3'>
              Try Mockoon Pro <i className='icon-arrow_forward ms-2'></i>
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
