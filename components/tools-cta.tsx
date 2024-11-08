import { FunctionComponent } from 'react';
import Quote from './quote';

const ToolsCta: FunctionComponent = function () {
  return (
    <Quote colorScheme='secondary'>
      <h4 className='fw-medium'>
        💡 This tool is provided for free by Mockoon!
      </h4>
      <p>
        Mockoon is a <strong>powerful API mocking tool</strong> that makes it
        easy to <strong>create and manage mock APIs</strong> for prototyping and
        testing. With an intuitive interface, you can quickly set up mock
        servers, customize responses, and simulate scenarios in real-time,{' '}
        <strong>enhancing team collaboration</strong> and{' '}
        <strong>speeding up development</strong>.
      </p>
      <div className='mt-4'>
        <a href='/download/' className='btn btn-primary-subtle btn-xs'>
          <i className='icon-download me-2'></i> Download
        </a>
      </div>
    </Quote>
  );
};

export default ToolsCta;
