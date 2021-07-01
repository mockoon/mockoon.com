import { Fragment, FunctionComponent } from 'react';

const Terminal: FunctionComponent<{
  lines: string[];
}> = function (props) {
  return (
    <Fragment>
      <section className='terminal-container terminal-fixed-top'>
        <header className='terminal'>
          <span className='button red'></span>
          <span className='button yellow'></span>
          <span className='button green'></span>
        </header>

        <div className='terminal-home'>
          {props.lines.map((line, lineIndex) => {
            return (
              <p className='console mb-1' key={'terminal-line-' + lineIndex}>
                <span className='ps-2'>{line}</span>
              </p>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Terminal;
