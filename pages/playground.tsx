import Link from 'next/link';
import { FunctionComponent } from 'react';
import Accordion from '../components/accordion';
import CodeBlock from '../components/code-block';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Quote from '../components/quote';
import Layout from '../layout/layout';
import { AccordionData } from '../models/common.model';

const meta = {
  title: "Mockoon's Playground API",
  description:
    "Mockoon's playground is a ready-to-use mock API for all your prototyping needs: fake JSON data, JSON placeholders, realistic CRUD API mock, etc."
};

const keyPoints = [
  'Learning and teaching APIs',
  'Quick prototyping',
  'Discovering Mockoon features'
];

const faq: AccordionData = [
  {
    items: [
      {
        title: 'Are there any rate limits?',
        content:
          "While the playground offers a lot of flexibility, it's not meant to be used in production. We monitor the playground's usage and apply rate limiting (you may get 429 \"Too Many Requests\" errors). Please don't abuse it and use it only for prototyping purposes."
      },
      {
        title: 'Are the data persistent?',
        content:
          "All the methods like POST, PUT or DELETE work as expected and will modify the data or return a 404 after deletion. Be kind and don't abuse it, the data is shared between all the users. Work with your own objects! 😉"
      },
      {
        title: 'Are the data reset regularly?',
        content:
          'The service is frequently reset to its initial state and goes to sleep after ~15 minutes of inactivity, which also resets its state.'
      },
      {
        title: 'Some requests are slow, why?',
        content:
          'The playground goes to sleep after ~15 minutes of inactivity. The first request after this period may be slow (up to 10-20 seconds) as the service is waking up. But it should be fast enough after that.'
      },
      {
        title: 'How was the playground built?',
        content:
          'The playground data were created using <a href="/download/">Mockoon Desktop</a>. It is running with the <a href="/cli/">CLI</a> in a <a href="https://github.com/mockoon/mockoon/tree/main/packages/cli#dockerize-command">Docker container</a>. It principally uses the <a href="/docs/latest/api-endpoints/crud-routes/">CRUD routes</a> and <a href="/docs/latest/data-buckets/overview/">data buckets</a> features.'
      },
      {
        title:
          'I found a bug/have a suggestion for the playground API, what should I do?',
        content:
          'You can ask for help or discuss ideas and improvements on our <a href="https://github.com/mockoon/mockoon/discussions">GitHub Discussion forum</a>. You are also welcome on our <a href="https://discord.gg/FtJjkejKGp">Discord server</a>. If you found an issue with the playground, you can open an issue on the <a href="https://github.com/mockoon/playground">playground repository</a>.'
      }
    ]
  }
];

const resources: AccordionData = [
  {
    items: [
      {
        title: 'Companies <code>/companies</code>',
        subtitle:
          'Fake companies JSON data including name, industry, location, number of employees, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "c408c0de-c0ba-40f3-8a4f-f1acb561de03",
  "name": "Botsford Group",
  "industry": "monetize compelling mindshare",
  "location": {
    "city": "South Valley",
    "country": "American Samoa"
  },
  "employees": 23895,
  "is_public": false
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Contacts <code>/contacts</code>',
        subtitle:
          'Fake contacts JSON data including name, email, phone, complete address, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "d421a174-8a96-4f42-addb-dccf00872970",
  "name": "Devyn Stamm",
  "email": "Raleigh_Ankunding77@gmail.com",
  "phone": "991-570-7464 x620",
  "address": {
    "street": "664 Baumbach Port",
    "city": "Fort Vanessa",
    "state": "Maine",
    "zip": "72249-8454"
  },
  "age": 56
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Customers <code>/customers</code>',
        subtitle:
          'Fake customers JSON data including name, email, phone, address, age, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={` {
  "id": "f724b18e-0165-452f-8256-0803f100f779",
  "name": "Pierce Schinner",
  "email": "Alexis85@yahoo.com",
  "phone": "1-492-539-2953 x1943",
  "address": "496 Maggio Gardens, Port Bufordville, KS 76070",
  "age": 50,
  "isVip": true
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Movies <code>/movies</code>',
        subtitle:
          'Fake movies JSON data including title, genre, director, release year, rating, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "c476c2ce-f138-459d-9b7f-00781e550460",
  "title": "necessitatibus brevis vicissitudo",
  "genre": "vulgus",
  "director": "Stewart Kiehn",
  "releaseYear": 1954,
  "rating": 7,
  "isPopular": false
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Notifications <code>/notifications</code>',
        subtitle: 'Fake notifications JSON data including title, message, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "23d78578-0c20-4ff0-9e37-a6b6ae83e164",
  "title": "Sophismata careo statim auditor audentia expedita.",
  "message": "Adsum bestia ante sortitus balbus cultura sunt vaco voluptates. Paulatim utique rem architecto demulceo thema verecundia. Verto vomito curriculum arbitro sint amita.",
  "read": false,
  "timestamp": "Wed Jun 05 2024 04:28:45 GMT+0200 (Central European Summer Time)"
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Photos <code>/photos</code>',
        subtitle: 'Fake photos JSON data including URL, caption, likes, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "f50bf6e1-fbb2-4096-aff1-dad2a3dda30f",
  "url": "https://loremflickr.com/1024/768",
  "caption": "Adsidue amplexus quam pecco armarium [...]",
  "likes": 12,
  "isFeatured": true
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Pokemons <code>/pokemons</code> (read-only)',
        subtitle:
          'List of Pokemons with their name, type, base stats, etc. This dataset is read-only, you can only GET the full list or a single Pokemon by its id (<code>GET /pokemons</code> or <code>GET /pokemons/{id}</code>). ',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": 5,
  "name": {
    "english": "Charmeleon",
    "japanese": "リザード",
    "chinese": "火恐龙",
    "french": "Reptincel"
  },
  "type": [
    "Fire"
  ],
  "base": {
    "HP": 58,
    "Attack": 64,
    "Defense": 58,
    "Sp. Attack": 80,
    "Sp. Defense": 65,
    "Speed": 80
  }
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 809
      },
      {
        title: 'Posts <code>/posts</code>',
        subtitle:
          'Fake blog posts JSON data including title, author, date, content, number of views, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "0fd57703-4755-40a1-bbf7-2bee858c3a67",
  "title": "Sumptus appono tametsi [...]",
  "author": "Jermaine Daniel",
  "date": "2023-04-30T10:10:02.970Z",
  "content": "Crustulum consequatur ut audacia [...]",
  "views": 1289,
  "isPublished": true
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Current time <code>/time</code>',
        subtitle:
          'Fake time JSON data including UTC date time, Unix time, milliseconds, day of week, day of month, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "utcDateTime": "2024-12-23T00:19:26.876+01:00",
  "unixTimeS": 1734909566,
  "unixTimeMS": 1734909566876,
  "milliseconds": 876,
  "seconds": 26,
  "minutes": 19,
  "hours": 0,
  "dayOfWeekNumber": 1,
  "dayOfWeekName": "Monday",
  "dayOfMonth": 23,
  "dayOfYear": 358,
  "monthNumber": 12,
  "monthName": "December",
  "quarter": 4,
  "year": 2024,
  "weekOfYear": 52
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        )
      },
      {
        title: 'Todos <code>/todos</code>',
        subtitle:
          'Fake todos JSON data including title, completion status, priority, due date, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "c7266f89-b777-45aa-83ad-01d4bad47eb7",
  "title": "optimize real-time architectures",
  "completed": true,
  "priority": 0,
  "dueDate": "2024-09-24T10:13:39.649Z"
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Sales <code>/sales</code>',
        subtitle:
          'Fake sales JSON data including country, item type, unit cost, number of units, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "485d91e9-1042-458c-a977-47e48ae2d83e",
  "country": "Guernsey",
  "itemType": "Ball",
  "salesChannel": "Movies",
  "group": "Recycled",
  "orderData": "Mon Oct 07 2024 04:05:36 GMT+0200 (Central European Summer Time)",
  "shippingDate": "Fri Nov 15 2024 06:49:01 GMT+0100 (Central European Standard Time)",
  "units": 16,
  "unitPrice": "138.69",
  "unitCost": "186.09",
  "totalRevenue": "2219.04",
  "totalCost": "2977.44",
  "totalProfit": "-758.4000000000001"
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      },
      {
        title: 'Users <code>/users</code>',
        subtitle:
          'Fake users JSON data including name, email, phone, address, birthdate, etc.',
        content: (
          <div className='px-4'>
            <CodeBlock
              code={`{
  "id": "dabf8912-0eb2-4648-98df-7d113a15bbfc",
  "name": "Sean Kris",
  "email": "Carlotta66@gmail.com",
  "phone": "271-410-4874 x85762",
  "address": "623 Jailyn Village, Pasadena, IA 54138",
  "birthdate": "2005-07-26",
  "isActive": true
}`}
              language='json'
              lineBreak
            ></CodeBlock>
          </div>
        ),
        count: 100
      }
    ]
  }
];

const Course: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <Hero
        title='Mockoon <span class="text-primary">Playground API</span>'
        subtitle="Mockoon's playground is a ready-to-use mock API for all your prototyping needs: fake JSON data, JSON placeholders, realistic CRUD API mock, etc."
        mainPictureWidth={1200}
        mainPictureHeight={783}
      />

      <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center g-10'>
            <div className='col-12 col-lg-7'>
              <p>
                Mockoon's playground is a ready-to-use mock API for all your
                prototyping needs: <strong>fake JSON data</strong>,{' '}
                <strong>JSON placeholders</strong>,{' '}
                <strong>realistic CRUD API mock</strong>, etc. It is also a good
                way to discover Mockoon's features. The playground offers the
                resources below, populated with fake data (generated using{' '}
                <a href='https://fakerjs.dev/' target='_blank'>
                  Faker.js
                </a>
                ).
              </p>
              <p>You can use this playground for:</p>
              <div className='mt-6'>
                {keyPoints.map((keyPoint, keyPointIndex) => (
                  <div
                    key={`taskcomingsoon${keyPointIndex}`}
                    className='d-flex'
                  >
                    <div className='badge badge-rounded-circle text-bg-success-subtle mt-1 me-4'>
                      <i className='icon icon-check'></i>
                    </div>
                    <p className='text-gray-800'>{keyPoint}</p>
                  </div>
                ))}
              </div>
              <Quote colorScheme='warning'>
                ☁️ <strong>Deploy</strong> your own mock APIs in the cloud and{' '}
                <strong>share</strong> them with your team with Mockoon Cloud{' '}
                <br />
                <div className='mt-4'>
                  <a href='/cloud/'>Learn more</a>
                </div>
              </Quote>

              <h3 className='my-6'>Available resources</h3>

              <Accordion
                data={resources}
                openFirst
                counterSuffix={{ singular: 'item', plural: 'items' }}
              />
            </div>

            <div className='col-12 col-lg-5 sticky-top'>
              <div className='card shadow-light-lg mb-6 mb-md-0'>
                <div className='card-body'>
                  <h3 className='fw-medium'>Playground API base URL</h3>
                  <p>
                    <code>https://playground.mockoon.com/</code>
                  </p>
                  <h4 className='my-6'>
                    Available routes/methods for each resource (replace{' '}
                    <code>
                      {'{'}
                      resources{'}'}
                    </code>{' '}
                    with the resource name on the left, e.g.{' '}
                    <code>/contacts</code>):
                  </h4>
                  <ul className='list-group list-group-flush mb-6'>
                    <li className='list-group-item d-flex justify-content-between align-items-start pb-2'>
                      <div className='ms-2 me-auto'>
                        <div className='d-flex align-items-center'>
                          <span className='badge text-bg-primary me-2'>
                            GET
                          </span>
                          <code>
                            /{'{'}resources{'}'}
                          </code>
                        </div>
                        Returns the entire array
                      </div>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-start py-2'>
                      <div className='ms-2 me-auto'>
                        <div className='d-flex align-items-center'>
                          <span className='badge text-bg-primary me-2'>
                            GET
                          </span>
                          <code>
                            /{'{'}resources{'}'}/:id
                          </code>
                        </div>
                        Returns an object by its id property
                      </div>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-start py-2'>
                      <div className='ms-2 me-auto'>
                        <div className='d-flex align-items-center'>
                          <span className='badge text-bg-success me-2'>
                            POST
                          </span>
                          <code>
                            /{'{'}resources{'}'}{' '}
                          </code>
                        </div>
                        Inserts a new object in the array (autogenerate the id
                        (UUID) if not provided)
                      </div>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-start py-2'>
                      <div className='ms-2 me-auto'>
                        <div className='d-flex align-items-center'>
                          <span className='badge text-bg-warning me-2'>
                            PUT
                          </span>
                          <code>
                            /{'{'}resources{'}'}/:id
                          </code>
                        </div>
                        Performs a full object update by its id (replace)
                      </div>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-start py-2'>
                      <div className='ms-2 me-auto'>
                        <div className='d-flex align-items-center'>
                          <span className='badge text-bg-warning me-2'>
                            PATCH
                          </span>
                          <code>
                            /{'{'}resources{'}'}/:id
                          </code>
                        </div>
                        Performs a partial object update by its id (merge)
                      </div>
                    </li>
                    <li className='list-group-item d-flex justify-content-between align-items-start pt-2'>
                      <div className='ms-2 me-auto'>
                        <div className='d-flex align-items-center'>
                          <span className='badge text-bg-danger me-2'>
                            DELETE
                          </span>
                          <code>
                            /{'{'}resources{'}'}/:id
                          </code>
                        </div>
                        Deletes an object by its id
                      </div>
                    </li>
                  </ul>

                  <Quote colorScheme='secondary'>
                    💡 You can also use the sorting, searching and filtering
                    query parameters on the main GET route, example:{' '}
                    <code className='p-0'>
                      ?property_eq=test&page=2&limit=50
                    </code>
                    . You will find more information about the CRUD routes
                    behavior in our{' '}
                    <Link href={'/docs/latest/api-endpoints/crud-routes/'}>
                      documentation
                    </Link>
                    .
                  </Quote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='py-6 py-md-8 border-bottom bg-gradient-light-white'
        id='faq'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 align-items-center'>
              <h2 className='fw-bold mb-6 text-center'>Playground FAQ</h2>
              <Accordion data={faq} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Course;
