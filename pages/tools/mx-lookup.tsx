import { FunctionComponent, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

type dnsRecord = { name: string; type: number; TTL: number; data: string };

const MaxLookup: FunctionComponent = function () {
  const [domain, setDomain] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<dnsRecord[]>(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await (
        await fetch(
          `https://cloudflare-dns.com/dns-query?name=${domain}&type=MX`,
          {
            headers: { Accept: 'application/dns-json' }
          }
        )
      ).json();
      console.log(data);
      const allRecords = [];
      if (data.Status === 0 && data.Answer) {
        allRecords.push(
          ...data.Answer.filter(
            (answer: dnsRecord) => answer.type === data.Question[0].type
          )
        );
      }

      setData(allRecords);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Domain MX lookup'}
        description='Lookup MX DNS records of a domain name online with this free tool. Discover the mail servers of a domain name.'
      />
      <Hero
        title='Domain <span class="text-primary">MX lookup</span>'
        subtitle='Lookup MX DNS records of a domain name online'
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
                      MX Lookup
                    </button>
                  </div>
                </div>
              </form>
              <p className='text-gray-700 text-center'>
                This tool will scan the domain DNS records for the MX entries.
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
                      {data?.map((record, recordIndex) => (
                        <tr key={`record${recordIndex}`}>
                          <td>MX</td>
                          <td>{record.name}</td>
                          <td>{record.data}</td>
                          <td>{record.TTL}</td>
                        </tr>
                      ))}
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
                to fetch the MX DNS records of a domain name. It will return the
                mail servers responsible for receiving email messages on behalf
                of the domain.
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
              <h3 className='mt-6 fw-medium'>What is an MX record?</h3>
              <p>
                An MX record (Mail Exchange) is a type of DNS record that
                specifies the mail servers responsible for receiving email
                messages on behalf of a domain name. It is used to route emails
                to the correct mail servers.
              </p>
              <p>
                An MX record is composed of two parts: the priority and the
                domain name. The priority is a number that indicates the order
                in which mail servers should be used. The lower the number, the
                higher the priority. If two mail servers have the same priority,
                the sending mail server will choose one randomly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MaxLookup;
