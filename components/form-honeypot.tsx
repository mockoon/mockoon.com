import { FunctionComponent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { honeypotFieldName } from '../utils/utils';

const FormHoneypot: FunctionComponent<{
  inputRegister: UseFormRegisterReturn;
}> = function ({ inputRegister }) {
  return (
    <>
      <label
        style={{
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          height: 0,
          width: 0,
          zIndex: -1
        }}
        htmlFor={honeypotFieldName}
        aria-hidden='true'
      >
        Provide information:
      </label>
      <input
        style={{
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          height: 0,
          width: 0,
          zIndex: -1
        }}
        aria-hidden='true'
        tabIndex={-1}
        autoComplete='off'
        type='text'
        id={honeypotFieldName}
        name={honeypotFieldName}
        {...inputRegister}
      ></input>
    </>
  );
};

export default FormHoneypot;
