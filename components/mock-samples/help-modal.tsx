import { FunctionComponent } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  MockSamplesCLIButton,
  MockSamplesDownloadButton,
  MockSamplesOpenButton
} from './buttons';

const HelpModal: FunctionComponent<{
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
}> = function ({ showHelp, setShowHelp }) {
  return (
    <Modal
      show={showHelp}
      onHide={() => setShowHelp(false)}
      centered
      scrollable={false}
    >
      <Modal.Header closeButton className='p-6'>
        <Modal.Title>📖 How to use our mock API samples?</Modal.Title>
      </Modal.Header>

      <Modal.Body className='p-6'>
        <div className='pb-4'>
          You have three choices to use our mock samples:
        </div>
        <div className='pb-6'>
          <MockSamplesDownloadButton disabled />
          <div className='ps-4'>
            Download them manually before opening them with the desktop
            application or{' '}
            <a href='/tutorials/run-mock-api-anywhere-cli/'>run them</a> with
            the CLI.
          </div>
        </div>
        <div className='pb-6'>
          <MockSamplesOpenButton disabled />

          <div className='ps-4'>
            Open them directly in Mockoon if you already{' '}
            <a href='/download/'>installed the application</a>. You will be
            prompted by the application to save the mock API.
          </div>
        </div>
        <div>
          <MockSamplesCLIButton disabled />
          <div className='ps-4'>
            Copy the CLI command to run them immediately. Make sure that you{' '}
            <a href='/cli/'>installed the CLI</a> on your machine before running
            this command.
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HelpModal;
