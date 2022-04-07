import { useEffect, useRef, VoidFunctionComponent } from 'react';
import { default as TypedLib } from 'typed.js';

const Typed: VoidFunctionComponent<{ options: any }> = ({ options }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const typed = new TypedLib(ref.current, options);

    return () => {
      if (!typed) {
        return;
      }
      typed.destroy();
    };
  }, [ref, options]);

  return (
    <div>
      <span ref={ref} />
    </div>
  );
};

export default Typed;
