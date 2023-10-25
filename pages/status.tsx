import { useQuery } from '@tanstack/react-query';
import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Spinner from '../components/spinner';
import Layout from '../layout/layout';

const incidents: {
  title: string;
  desc: string;
  dateStart: string;
  dateEnd: string;
  status: 'inprogress' | 'resolved';
}[] = [
  {
    title: 'Main API outage',
    desc: 'Our main API was down for several hours due to an SSL misconfiguration. The issue has been fixed and the configuration documented to avoid future issues.',
    dateStart: '2023-10-18 16:00:00 UTC',
    dateEnd: '2023-10-19 06:30:00 UTC',
    status: 'resolved'
  }
];

const statusTitles = {
  maintenance: 'Partial maintenance',
  incident: 'Partial outage',
  outage: 'Major outage',
  up: 'All services operational'
};
const Status: FunctionComponent = function () {
  const { data, isFetching } = useQuery<{
    indicator: 'up' | 'maintenance' | 'outage' | 'incident';
    uptime: string;
  }>({
    queryKey: ['servicesStatus'],
    refetchOnMount: false,
    queryFn: async () => {
      return fetch('https://mockoon.hyperping.app/status.json', {}).then(
        (res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error();
        }
      );
    },
    refetchOnWindowFocus: true
  });

  const incidentsInProgress = incidents.filter(
    (incident) => incident.status === 'inprogress'
  );
  const incidentsResolved = incidents.filter(
    (incident) => incident.status !== 'inprogress'
  );

  return (
    <Layout footerBanner='newsletter'>
      <Meta
        title='Mockoon Cloud status'
        description='Mockoon Cloud services status'
        ogType='article'
      />

      <Hero
        title='Mockoon Cloud <span class="text-primary">status</span>'
        subtitle='Having trouble? Email us at <a href="mailto:support@mockoon.com">support@mockoon.com</a>'
      />

      <div className='container pb-8'>
        <div className='row d-flex flex-column align-items-center '>
          <div className='col-12 col-lg-10 pt-5'>
            <div className='card card-bleed shadow-light-lg mb-6'>
              <div className='card-header'>
                <div className='row align-items-center'>
                  {isFetching && <Spinner />}
                  {!isFetching && (
                    <>
                      <div className='col'>
                        <h4 className='mb-0'>
                          {(data?.indicator === 'maintenance' ||
                            data?.indicator === 'incident') && (
                            <span className='badge badge-rounded-circle bg-warning me-2'>
                              <i className='icon-remove'></i>
                            </span>
                          )}
                          {data?.indicator === 'outage' && (
                            <span className='badge badge-rounded-circle bg-danger me-2'>
                              <i className='icon-clear'></i>
                            </span>
                          )}
                          {data?.indicator === 'up' && (
                            <span className='badge badge-rounded-circle bg-success me-2'>
                              <i className='icon-check'></i>
                            </span>
                          )}{' '}
                          {statusTitles[data?.indicator]}
                        </h4>
                      </div>
                      <div className='col-auto'>
                        <a
                          className='btn btn-xs btn-primary-soft'
                          href='https://mockoon.hyperping.app/'
                          target='_blank'
                        >
                          More details <i className='icon-open'></i>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className='card-body'>
                <div className='row mb-5'>
                  <div className='col'>
                    <h4 className='mb-0'>Average uptime (last 90 days)</h4>
                  </div>
                  <div className='col-auto'>
                    <span className='badge badge-rounded bg-secondary-soft'>
                      <span className='h6 text-uppercase fw-bold'>
                        {data?.uptime}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {incidentsInProgress.length > 0 && (
              <div className='card card-bleed shadow-light-lg mb-6'>
                <div className='card-header'>
                  <h4 className='mb-0'>Current incidents</h4>
                </div>
                <div className='card-body'>
                  <div className='list-group list-group-flush'>
                    {incidentsInProgress.map((incident, incidentIndex) => {
                      return (
                        <div
                          key={`currentincident${incidentIndex}`}
                          className='list-group-item'
                        >
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>{incident.title}</p>
                              <small className='text-gray-700'>
                                Started at {incident.dateStart}
                              </small>
                              <p className='mb-0 mt-2'>
                                <small>{incident.desc}</small>
                              </p>
                            </div>
                            <div className='col-auto'>
                              <span className='badge badge-lg badge-rounded-circle bg-warning'>
                                <i className='icon-hourglass_empty'></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {incidentsResolved.length > 0 && (
              <div className='card card-bleed shadow-light-lg'>
                <div className='card-header'>
                  <h4 className='mb-0'>Incidents History</h4>
                </div>
                <div className='card-body'>
                  <div className='list-group list-group-flush'>
                    {incidentsResolved.map((incident, incidentIndex) => {
                      return (
                        <div
                          key={`pastincident${incidentIndex}`}
                          className='list-group-item'
                        >
                          <div className='row align-items-center'>
                            <div className='col'>
                              <p className='mb-0'>{incident.title}</p>

                              <small className='text-gray-700'>
                                {incident.dateStart} - {incident.dateEnd}
                              </small>
                              <p className='mb-0 mt-2'>
                                <small>{incident.desc}</small>
                              </p>
                            </div>
                            <div className='col-auto'>
                              <span className='badge badge-lg badge-rounded-circle bg-success'>
                                <i className='icon-check'></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Status;
