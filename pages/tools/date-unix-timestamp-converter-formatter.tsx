import { format, isValid, parseISO } from 'date-fns';
import { FunctionComponent, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const DateConverter: FunctionComponent = function () {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [customFormat, setCustomFormat] = useState('yyyy-MM-dd');

  const updateDatePart = (
    part: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second',
    inputValue: string
  ) => {
    if (inputValue === '') {
      return;
    }

    const value = Number(inputValue);

    if (!Number.isInteger(value)) {
      return;
    }

    setCurrentDate((date) => {
      const updatedDate = new Date(date);

      if (part === 'year' || part === 'month') {
        const day = updatedDate.getDate();
        updatedDate.setDate(1);

        if (part === 'year') {
          updatedDate.setFullYear(value);
        } else if (value >= 1 && value <= 12) {
          updatedDate.setMonth(value - 1);
        } else {
          return date;
        }

        const lastDayOfMonth = new Date(
          updatedDate.getFullYear(),
          updatedDate.getMonth() + 1,
          0
        ).getDate();
        updatedDate.setDate(Math.min(day, lastDayOfMonth));
      } else if (part === 'day') {
        const lastDayOfMonth = new Date(
          updatedDate.getFullYear(),
          updatedDate.getMonth() + 1,
          0
        ).getDate();

        if (value < 1 || value > lastDayOfMonth) {
          return date;
        }

        updatedDate.setDate(value);
      } else if (part === 'hour' && value >= 0 && value <= 23) {
        updatedDate.setHours(value);
      } else if (part === 'minute' && value >= 0 && value <= 59) {
        updatedDate.setMinutes(value);
      } else if (part === 'second' && value >= 0 && value <= 59) {
        updatedDate.setSeconds(value);
      } else {
        return date;
      }

      return isValid(updatedDate) ? updatedDate : date;
    });
  };

  const formatDate = (date: Date, pattern: string) => {
    try {
      return (
        format(date, pattern, {
          useAdditionalDayOfYearTokens: true,
          useAdditionalWeekYearTokens: true
        }) ?? ''
      );
    } catch (error) {
      return '';
    }
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
                    value={currentDate.getFullYear()}
                    onChange={(event) =>
                      updateDatePart('year', event.target.value)
                    }
                  />
                </div>
                <div className='me-1'>
                  <label htmlFor='dateMonth'>Month</label>
                  <input
                    type='number'
                    id='dateMonth'
                    className='form-control border-secondary'
                    min='1'
                    max='12'
                    value={currentDate.getMonth() + 1}
                    onChange={(event) =>
                      updateDatePart('month', event.target.value)
                    }
                  />
                </div>
                <div className='me-1'>
                  <label htmlFor='dateDay'>Day</label>
                  <input
                    type='number'
                    id='dateDay'
                    className='form-control border-secondary'
                    min='1'
                    max='31'
                    value={currentDate.getDate()}
                    onChange={(event) =>
                      updateDatePart('day', event.target.value)
                    }
                  />
                </div>
                <div className='me-1'>
                  <label htmlFor='dateHour'>Hour (24h)</label>
                  <input
                    type='number'
                    id='dateHour'
                    className='form-control border-secondary'
                    min='0'
                    max='23'
                    value={currentDate.getHours()}
                    onChange={(event) =>
                      updateDatePart('hour', event.target.value)
                    }
                  />
                </div>
                <div className='me-1'>
                  <label htmlFor='dateMinutes'>Minutes</label>
                  <input
                    type='number'
                    id='dateMinutes'
                    className='form-control border-secondary'
                    min='0'
                    max='59'
                    value={currentDate.getMinutes()}
                    onChange={(event) =>
                      updateDatePart('minute', event.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor='dateSeconds'>Seconds</label>
                  <input
                    type='number'
                    id='dateSeconds'
                    className='form-control border-secondary'
                    min='0'
                    max='59'
                    value={currentDate.getSeconds()}
                    onChange={(event) =>
                      updateDatePart('second', event.target.value)
                    }
                  />
                </div>
              </div>
              <div className='mt-6'>
                <label htmlFor='iso'>ISO 8601</label>
                <input
                  id='iso'
                  className='form-control border-secondary'
                  placeholder=''
                  value={currentDate.toISOString()}
                  onChange={(event) => {
                    const parsedDate = parseISO(event.target.value);

                    if (isValid(parsedDate)) {
                      setCurrentDate(parsedDate);
                    }
                  }}
                />
              </div>

              <div className='mt-6'>
                <label htmlFor='unixS'>Unix timestamp (s)</label>
                <input
                  type='number'
                  id='unixS'
                  className='form-control border-secondary'
                  placeholder=''
                  value={Math.floor(currentDate.getTime() / 1000)}
                  onChange={(event) => {
                    if (event.target.value === '') {
                      return;
                    }

                    const timestamp = Number(event.target.value);
                    const date = new Date(timestamp * 1000);

                    if (Number.isFinite(timestamp) && isValid(date)) {
                      setCurrentDate(date);
                    }
                  }}
                />
              </div>
              <div className='mt-6'>
                <label htmlFor='unixMs'>Unix timestamp (ms)</label>
                <input
                  type='number'
                  id='unixMs'
                  className='form-control border-secondary'
                  placeholder=''
                  value={currentDate.getTime()}
                  onChange={(event) => {
                    if (event.target.value === '') {
                      return;
                    }

                    const timestamp = Number(event.target.value);
                    const date = new Date(timestamp);

                    if (Number.isFinite(timestamp) && isValid(date)) {
                      setCurrentDate(date);
                    }
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
