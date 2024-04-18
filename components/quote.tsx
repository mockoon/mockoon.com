const Quote = function (props) {
  return (
    <div
      className='quote bg-primary-subtle border-start border-secondary border-4 p-4 my-4'
      role='alert'
    >
      {props.children}
    </div>
  );
};

export default Quote;
