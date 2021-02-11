import { Fragment, FunctionComponent } from 'react';

const Terminal: FunctionComponent<{
  lines: string[];
}> = function (props) {
  return (
    <Fragment>
      <div className='terminal-container'>
        <div className='terminal'>
          <div className='terminal-controls'>
            <div className='terminal-control'></div>
            <div className='terminal-control'></div>
            <div className='terminal-control'></div>
          </div>
          {props.lines.map((line, lineIndex) => {
            return (
              <div className='terminal-line' key={'terminal-line-' + lineIndex}>
                <span className='terminal-dollar'>$</span>
                {line}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Terminal;
