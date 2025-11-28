import { FunctionComponent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { useHoneypotFieldName } from '../utils/form-hooks';

const FormHoneypot: FunctionComponent<{
  inputRegister: UseFormRegisterReturn;
}> = function ({ inputRegister }) {
  const { honeypotFieldName, mounted } = useHoneypotFieldName();

  if (!mounted) {
    return null;
  }

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
