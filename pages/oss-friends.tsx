import { FunctionComponent } from 'react';
import Card from '../components/card';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

export async function getStaticProps() {
  const res = await fetch('https://formbricks.com/api/oss-friends');
  const data = await res.json();

  // By returning { props: { OSSFriends } }, the OSSFriendsPage component
  // will receive `OSSFriends` as a prop at build time
  return {
    props: {
      ossFriends: data.data
    }
  };
}

const OssFriends: FunctionComponent<{
  ossFriends: { name: string; description: string; href: string }[];
}> = function ({ ossFriends }) {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Our OSS friends'
        description='Discover other open-source software projects that we love and support.'
        ogType='article'
      />
      <Hero
        title='Our <span class="text-primary">OSS friends</span>'
        subtitle='Discover other open-source software projects that we love and support.'
      />

      <section className='py-5 py-lg-10'>
        <div className='container'>
          <div className='row'>
            {ossFriends.map((friend, friendIndex) => {
              return (
                !friend.name.toLowerCase().includes('mockoon') && (
                  <div
                    className='mx-auto my-4 col-12 col-lg-4 d-flex'
                    key={`friend${friendIndex}`}
                  >
                    <Card
                      data={{
                        title: friend.name,
                        description: friend.description,
                        links: [
                          {
                            src: friend.href,
                            text: 'Website',
                            icon: 'icon-open',
                            iconAfter: true,
                            blank: true
                          }
                        ]
                      }}
                      cover={false}
                      border
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OssFriends;
