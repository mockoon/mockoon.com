import { formatDuration, intervalToDuration } from 'date-fns';
import { FunctionComponent, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const SlaDowntimeCalculator: FunctionComponent = function () {
  const [sla, setSla] = useState<number>(99.99);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'SLA downtime and uptime calculator'}
        description='Calculate the downtime and uptime of your services based on the SLA level (Service Level Agreement) using this online tool.'
      />
      <Hero
        title='<span class="text-primary">SLA downtime and uptime</span> calculator'
        subtitle='Calculate the downtime and uptime of your services based on the SLA level'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <label htmlFor='sla' className='form-label'>
                SLA level (%)
              </label>
              <input
                type='number'
                id='sla'
                className='form-control border-secondary'
                value={sla}
                onChange={(event) => {
                  if (parseFloat(event.target.value) > 100) {
                    setSla(100);
                    return;
                  }

                  if (parseFloat(event.target.value) < 0) {
                    setSla(0);
                    return;
                  }

                  if (event.target.value === '') {
                    setSla(0);
                    return;
                  }

                  setSla(parseFloat(event.target.value));
                }}
              />
              <button
                type='button'
                className='btn btn-link btn-xs p-0 me-2'
                onClick={() => {
                  setSla(99);
                }}
              >
                99%
              </button>
              <button
                type='button'
                className='btn btn-link btn-xs p-0 me-2'
                onClick={() => {
                  setSla(99.9);
                }}
              >
                99.9%
              </button>
              <button
                type='button'
                className='btn btn-link btn-xs p-0 me-2'
                onClick={() => {
                  setSla(99.99);
                }}
              >
                99.99%
              </button>
              <button
                type='button'
                className='btn btn-link btn-xs p-0 me-2'
                onClick={() => {
                  setSla(99.999);
                }}
              >
                99.999%
              </button>
              <button
                type='button'
                className='btn btn-link btn-xs p-0 me-2'
                onClick={() => {
                  setSla(99.9999);
                }}
              >
                99.9999%
              </button>
              <button
                type='button'
                className='btn btn-link btn-xs p-0 me-2'
                onClick={() => {
                  setSla(99.99999);
                }}
              >
                99.99999%
              </button>
            </div>
            <div className='col-md-8'>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Downtime</th>
                      <th>Uptime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='fw-bold'>Daily</td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,

                            end:
                              Math.round((24 * 60 * 60 * (100 - sla)) / 100) *
                              1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ],
                            zero: true
                          }
                        ) || 'none'}
                      </td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end: Math.round((24 * 60 * 60 * sla) / 100) * 1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ],
                            zero: true
                          }
                        ) || 'none'}
                      </td>
                    </tr>
                    <tr>
                      <td className='fw-bold'>Weekly</td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end:
                              Math.round(
                                (24 * 60 * 60 * 7 * (100 - sla)) / 100
                              ) * 1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ],
                            zero: true
                          }
                        ) || 'none'}
                      </td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end:
                              Math.round((24 * 60 * 60 * 7 * sla) / 100) * 1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ],
                            zero: true
                          }
                        ) || 'none'}
                      </td>
                    </tr>
                    <tr>
                      <td className='fw-bold'>Monthly</td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end:
                              Math.round(
                                (24 * 60 * 60 * 30 * (100 - sla)) / 100
                              ) * 1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ],
                            zero: true
                          }
                        ) || 'none'}
                      </td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end:
                              Math.round((24 * 60 * 60 * 30 * sla) / 100) * 1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ],
                            zero: true
                          }
                        ) || 'none'}
                      </td>
                    </tr>
                    <tr>
                      <td className='fw-bold'>Quarterly</td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end:
                              Math.round(
                                (24 * 60 * 60 * 30 * 3 * (100 - sla)) / 100
                              ) * 1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ],
                            zero: true
                          }
                        ) || 'none'}
                      </td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end:
                              Math.round((24 * 60 * 60 * 30 * 3 * sla) / 100) *
                              1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ],
                            zero: true
                          }
                        ) || 'none'}
                      </td>
                    </tr>
                    <tr>
                      <td className='fw-bold'>Yearly</td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end:
                              Math.round(
                                (24 * 60 * 60 * 365 * (100 - sla)) / 100
                              ) * 1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ]
                          }
                        ) || 'none'}
                      </td>
                      <td>
                        {formatDuration(
                          intervalToDuration({
                            start: 0,
                            end:
                              Math.round((24 * 60 * 60 * 365 * sla) / 100) *
                              1000
                          }),
                          {
                            format: [
                              'years',
                              'months',
                              'days',
                              'hours',
                              'minutes',
                              'seconds'
                            ]
                          }
                        ) || 'none'}
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
                This tool calculates the <strong>downtime and uptime</strong> of
                your services based on the SLA level. The SLA level is the{' '}
                <strong>percentage of time</strong>
                that a service is guaranteed to be available. For example, a 99%
                SLA level means that the service is guaranteed to be available
                99% of the time. The downtime is the time when the service is
                not available, and the uptime is the time when the service is
                available. The tool calculates the downtime and uptime for
                different time periods (daily, weekly, monthly, quarterly, and
                yearly) based on the SLA level.
              </p>
              <h3 className='mt-6 fw-medium'>Uses in business</h3>
              <p>
                <strong>High availability is critical</strong> for many
                businesses, especially those that rely on online services.
                Downtime can result in lost revenue, decreased productivity, and
                damage to the company's reputation. By calculating the downtime
                and uptime based on the SLA level, businesses can better
                understand the impact of downtime on their operations and take
                steps to minimize it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SlaDowntimeCalculator;
