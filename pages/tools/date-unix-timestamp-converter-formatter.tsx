import {
  format,
  setDate,
  setHours,
  setMinutes,
  setMonth,
  setSeconds,
  setYear
} from 'date-fns';
import { FunctionComponent, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const DateConverter: FunctionComponent = function () {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [customFormat, setCustomFormat] = useState('yyyy-MM-dd');

  const formatDate = (date: Date, pattern: string) => {
    try {
      return format(date, pattern, {
        useAdditionalDayOfYearTokens: true,
        useAdditionalWeekYearTokens: true
      });
    } catch (error) {}
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Date and unix timestamp converter and formatter'}
        description='Convert a date to and from a unix timestamp and view the date in different formats (ISO 8601, RFC 3339, RFC 822/2822). You can also format the date in a custom format using the date-fns library patterns.'
      />
      <Hero
        title='<span class="text-primary">Date and unix timestamp</span> converter and formatter'
        subtitle='Convert a date to and from a unix timestamp and view the date in different formats (ISO 8601, RFC 3339, RFC 822/2822). You can also format the date in a custom format using the date-fns library patterns.'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='d-flex'>
                <div className='me-1'>
                  <label htmlFor='dateYear'>Year</label>
                  <input
                    type='number'
                    id='dateYear'
                    className='form-control border-secondary'
                    value={formatDate(currentDate, 'yyyy')}
                    onChange={(event) => {
                      try {
                        setCurrentDate(
                          setYear(currentDate, parseInt(event.target.value))
                        );
                      } catch (error) {}
                    }}
                  />
                </div>
                <div className='me-1'>
                  <label htmlFor='dateMonth'>Month</label>
                  <input
                    type='number'
                    id='dateMonth'
                    className='form-control border-secondary'
                    value={formatDate(currentDate, 'MM')}
                    onChange={(event) => {
                      try {
                        setCurrentDate(
                          setMonth(currentDate, parseInt(event.target.value))
                        );
                      } catch (error) {}
                    }}
                  />
                </div>
                <div className='me-1'>
                  <label htmlFor='dateDay'>Day</label>
                  <input
                    type='number'
                    id='dateDay'
                    className='form-control border-secondary'
                    value={formatDate(currentDate, 'dd')}
                    onChange={(event) => {
                      try {
                        setCurrentDate(
                          setDate(currentDate, parseInt(event.target.value))
                        );
                      } catch (error) {}
                    }}
                  />
                </div>
                <div className='me-1'>
                  <label htmlFor='dateHour'>Hour (24h)</label>
                  <input
                    type='number'
                    id='dateHour'
                    className='form-control border-secondary'
                    value={formatDate(currentDate, 'HH')}
                    onChange={(event) => {
                      try {
                        setCurrentDate(
                          setHours(currentDate, parseInt(event.target.value))
                        );
                      } catch (error) {}
                    }}
                  />
                </div>
                <div className='me-1'>
                  <label htmlFor='dateMinutes'>Minutes</label>
                  <input
                    type='number'
                    id='dateMinutes'
                    className='form-control border-secondary'
                    value={formatDate(currentDate, 'mm')}
                    onChange={(event) => {
                      try {
                        setCurrentDate(
                          setMinutes(currentDate, parseInt(event.target.value))
                        );
                      } catch (error) {}
                    }}
                  />
                </div>
                <div>
                  <label htmlFor='dateSeconds'>Seconds</label>
                  <input
                    type='number'
                    id='dateSeconds'
                    className='form-control border-secondary'
                    value={formatDate(currentDate, 'ss')}
                    onChange={(event) => {
                      try {
                        setCurrentDate(
                          setSeconds(currentDate, parseInt(event.target.value))
                        );
                      } catch (error) {}
                    }}
                  />
                </div>
              </div>
              <div className='mt-6'>
                <label htmlFor='unixS'>Unix timestamp (s)</label>
                <input
                  type='number'
                  id='unixS'
                  className='form-control border-secondary'
                  placeholder=''
                  value={formatDate(currentDate, 't')}
                  onChange={(event) => {
                    try {
                      setCurrentDate(
                        new Date(parseInt(event.target.value) * 1000)
                      );
                    } catch (error) {}
                  }}
                />
              </div>
              <div className='mt-6'>
                <label htmlFor='unixS'>Unix timestamp (ms)</label>
                <input
                  type='number'
                  id='unixS'
                  className='form-control border-secondary'
                  placeholder=''
                  value={formatDate(currentDate, 'T')}
                  onChange={(event) => {
                    try {
                      setCurrentDate(new Date(parseInt(event.target.value)));
                    } catch (error) {}
                  }}
                />
              </div>
            </div>
            <div className='col-6'>
              <div>
                <label htmlFor='customFormat'>
                  Custom{' '}
                  <a
                    href='https://date-fns.org/v3.6.0/docs/format'
                    target='_blank'
                  >
                    date-fns format
                  </a>
                  :
                </label>
                <input
                  type='text'
                  id='customFormat'
                  className='form-control border-secondary'
                  placeholder='e.g. yyyy-MM-dd HH:mm:ss'
                  value={customFormat}
                  onChange={(event) => {
                    try {
                      setCustomFormat(event.target.value);
                    } catch (error) {}
                  }}
                />
                <h4 className='mt-2'>
                  Result:{' '}
                  {customFormat ? formatDate(currentDate, customFormat) : ''}
                </h4>
              </div>
              <div className='table-responsive'>
                <table className='table mt-8'>
                  <thead>
                    <tr>
                      <th>Format</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href='https://en.wikipedia.org/wiki/ISO_8601'
                          target='_blank'
                        >
                          ISO 8601, RFC 3339
                        </a>
                      </td>
                      <td suppressHydrationWarning>
                        {formatDate(
                          currentDate,
                          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
                        )}
                        <br />
                        <span className='fs-sm'>
                          date-fns format:{' '}
                          <code>
                            <small>yyyy-MM-dd'T'HH:mm:ss.SSSxxx</small>
                          </code>
                        </span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          href='https://datatracker.ietf.org/doc/rfc822/'
                          target='_blank'
                        >
                          RFC 822/2822
                        </a>
                      </td>
                      <td suppressHydrationWarning>
                        {formatDate(
                          currentDate,
                          'EEE, dd MMM yyyy HH:mm:ss xx'
                        )}
                        <br />
                        <span className='fs-sm'>
                          date-fns format:{' '}
                          <code>
                            <small>EEE, dd MMM yyyy HH:mm:ss xx</small>
                          </code>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Unix timestamp (s)</td>
                      <td suppressHydrationWarning>
                        {Math.floor(currentDate.getTime() / 1000)}
                        <br />
                        <span className='fs-sm'>
                          date-fns format:{' '}
                          <code>
                            <small>t</small>
                          </code>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Unix timestamp (ms)</td>
                      <td suppressHydrationWarning>
                        {currentDate.getTime()}
                        <br />
                        <span className='fs-sm'>
                          date-fns format:{' '}
                          <code>
                            <small>T</small>
                          </code>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <ToolsCta />
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='mt-6 fw-medium'>About this tool</h3>
              <p>
                This tool allows you to convert a date to a unix timestamp
                (seconds or milliseconds) and vice versa, and view the date in
                different formats (ISO 8601, RFC 3339, RFC 822/2822). You can
                also format the date in a custom format using the{' '}
                <a
                  href='https://date-fns.org/v3.6.0/docs/format'
                  target='_blank'
                >
                  date-fns library format
                </a>
                .
              </p>
              <h3 className='mt-6 fw-medium'>About Unix timestamps</h3>
              <p>
                A Unix timestamp (or epoch time) is the number of seconds or
                milliseconds that have elapsed since 00:00:00 Coordinated
                Universal Time (UTC), Thursday, 1 January 1970. It is used in
                many programming languages and systems to represent dates and
                times.
                <br />
                <br />
                Unix timestamps are often used in APIs to represent dates and
                times because they are easy to work with and can be converted to
                any time zone.
              </p>
              <h3 className='mt-6 fw-medium'>About date-fns library</h3>
              <p>
                <strong>date-fns</strong> is a modern JavaScript date utility
                library that provides comprehensive, yet simple and consistent
                toolset for manipulating JavaScript dates in a browser or
                Node.js environment.
                <br />
                <br />
                It is used in this tool to format dates and unix timestamps in
                different formats using predefined patterns. You can find the
                list of available patterns in the{' '}
                <a
                  href='https://date-fns.org/v3.6.0/docs/format'
                  target='_blank'
                >
                  date-fns documentation
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DateConverter;
