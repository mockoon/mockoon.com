import { FunctionComponent, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

type dnsRecord = { name: string; type: number; TTL: number; data: string };
// prefix to keep order
const recordTypes = {
  k2: 'NS',
  k1: 'A',
  k28: 'AAAA',
  k5: 'CNAME',
  k15: 'MX',
  k16: 'TXT'
};

const DomainDnsLookup: FunctionComponent = function () {
  let currentColor = '';
  const [domain, setDomain] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<dnsRecord[]>(null);
  const genericRequestBuilder = async (type: string, index: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500 * index));

    return await (
      await fetch(
        `https://cloudflare-dns.com/dns-query?name=${domain}&type=${type}`,
        {
          headers: { Accept: 'application/dns-json' }
        }
      )
    ).json();
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      let promises = [];
      for (let i = 0; i < Object.keys(recordTypes).length; i++) {
        promises.push(
          genericRequestBuilder(Object.keys(recordTypes)[i].substring(1), i)
        );
      }

      const data = await Promise.all(promises);

      setData(
        data.reduce<dnsRecord[]>((allRecords, response) => {
          if (response.Status === 0 && response.Answer) {
            allRecords.push(
              ...response.Answer.filter(
                (answer: dnsRecord) => answer.type === response.Question[0].type
              )
            );
          }

          return allRecords;
        }, [])
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Domain DNS lookup online tool'}
        description='Lookup DNS records of a domain name online with this free tool. Discover the most common DNS records (A, NS, CNAME, MX, TXT, AAAA) of a domain name.'
      />
      <Hero
        title='Domain <span class="text-primary">DNS lookup</span>'
        subtitle='Lookup most commons DNS records of a domain name online'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  fetchData();
                }}
              >
                <div className='row mb-3'>
                  <label htmlFor='domain' className='col-auto col-form-label'>
                    Domain name
                  </label>
                  <div className='col'>
                    <input
                      type='text'
                      id='domain'
                      className='form-control border-secondary'
                      placeholder='example.org'
                      value={domain}
                      onChange={(event) => {
                        setDomain(event.target.value);
                      }}
                    />
                  </div>
                  <div className='col-auto'>
                    <button className='btn btn-primary-subtle' type='submit'>
                      Lookup
                    </button>
                  </div>
                </div>
              </form>
              <p className='text-gray-700 text-center'>
                This tool will scan the domain DNS records for the most common
                entries (A, NS, CNAME, MX, TXT, AAAA) and display them below.
              </p>
            </div>
          </div>
          {loading && <Spinner />}
          {!loading && data && (
            <div className='row'>
              <div className='col'>
                <div className='table-responsive'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Domain</th>
                        <th>Value</th>
                        <th>TTL (sec)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((record, recordIndex) => {
                        const previousRecordType = data[recordIndex - 1]?.type;

                        if (
                          previousRecordType &&
                          previousRecordType !== record.type
                        ) {
                          currentColor =
                            currentColor === '' ? 'bg-gray-200' : '';
                        }

                        return (
                          <tr key={`record${recordIndex}`}>
                            <td className={currentColor}>
                              {recordTypes[`k${record.type}`]}
                            </td>
                            <td className={currentColor}>{record.name}</td>
                            <td className={currentColor}>{record.data}</td>
                            <td className={currentColor}>{record.TTL}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
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
                This tool uses the{' '}
                <a href='https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/dns-json/'>
                  Cloudflare DNS over HTTPS API
                </a>{' '}
                to fetch the most common DNS records of a domain name. It will
                display the following records if they exist: NS, A, AAAA, CNAME,
                MX, TXT.
              </p>
              <h3 className='mt-6 fw-medium'>What are DNS records?</h3>
              <p>
                DNS records are used to translate human-readable domain names
                into IP addresses. It can also associates a domain name with
                various information like mail servers, SPF records, etc.
              </p>
              <h3 className='mt-6 fw-medium'>Most common DNS records types</h3>
              <ul>
                <li>
                  <strong>NS (Name Server)</strong>: Specifies the DNS servers
                  for a domain.
                </li>
                <li>
                  <strong>A (Address)</strong>: Maps a domain name to an IP
                  address.
                </li>
                <li>
                  <strong>AAAA (IPv6 Address)</strong>: Maps a domain name to an
                  IPv6 address.
                </li>
                <li>
                  <strong>CNAME (Canonical Name)</strong>: Maps an alias domain
                  name to a canonical domain name.
                </li>
                <li>
                  <strong>MX (Mail Exchange)</strong>: Specifies the mail
                  servers for a domain.
                </li>
                <li>
                  <strong>TXT (Text)</strong>: Holds text information for a
                  domain, often used for SPF records or domain ownership
                  validation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DomainDnsLookup;
