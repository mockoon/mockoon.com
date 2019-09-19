function Image(props) {

  return (
    <div className="columns">
      <div className={props.size === 'medium' ? 'column is-6 is-offset-3' : 'column is-8 is-offset-2'}>
        <figure className="image">
          <img src={props.src} alt={props.alt} />
        </figure>
      </div>
    </div>
  );
}

export default Image;
