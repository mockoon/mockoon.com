import { Fragment, FunctionComponent } from 'react';

const Testimonial: FunctionComponent<{
  link: string;
  imgSrc: string;
  name: string;
  username: string;
}> = function (props) {
  return (
    <Fragment>
      <style>{`.card {height:100%}`}</style>
      <div className='card'>
        <div className='card-content'>
          <div className='content'>{props.children}</div>
          <div>
            <a href={props.link} rel='noopener' target='_blank'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-32x32'>
                    <img
                      className='is-rounded'
                      src={props.imgSrc}
                      alt={props.username + ' profile picture'}
                      loading='lazy'
                    />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-6'>{props.name}</p>
                  <p className='subtitle content is-small'>{props.username}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
