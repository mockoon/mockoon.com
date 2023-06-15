import { FunctionComponent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

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
        htmlFor='work_address'
      ></label>
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
        autoComplete='off'
        type='text'
        id='work_address'
        name='work_address'
        placeholder='Your address here'
        {...inputRegister}
      ></input>
    </>
  );
};

export default FormHoneypot;
