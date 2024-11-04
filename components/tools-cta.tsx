import { FunctionComponent } from 'react';
import Quote from './quote';

const ToolsCta: FunctionComponent = function () {
  return (
    <Quote colorScheme='secondary'>
      <h4 className='fw-medium'>
        💡 This tool is provided for free by Mockoon!
      </h4>
      <p>
        Mockoon is a{' '}
        <strong>powerful and user-friendly API mocking tool</strong> designed
        for developers and teams to streamline their development process. With
        Mockoon, you can effortlessly{' '}
        <strong>create and manage mock APIs</strong>, allowing for rapid
        prototyping and testing without the need for a live backend.
      </p>
      <p>
        Its intuitive interface lets you quickly set up mock servers, customize
        responses, and simulate different scenarios, all in real-time. By
        integrating Mockoon into your workflow, you can{' '}
        <strong>enhance collaboration</strong> among team members,{' '}
        <strong>reduce development time</strong>, and ensure a smoother,{' '}
        <strong>more efficient testing phase</strong>.
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
