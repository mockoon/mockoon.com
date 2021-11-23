import { FunctionComponent, MouseEvent } from 'react';
import Card from '../components/card';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';
import { CardData } from '../models/common.model';

const clickHandler = (target) => (event: MouseEvent) => {
  event.preventDefault();

  const command = target.split('clipboardcopy://')[1];

  navigator.clipboard
    .writeText(command)
    .then(() => {
      (event.target as HTMLLinkElement).childNodes[1].textContent = 'Copied!';

      setTimeout(() => {
        (event.target as HTMLLinkElement).childNodes[1].textContent = 'CLI';
      }, 5000);
    })
    .catch(() => {});
};

const mockSamples: CardData[] = [
  {
    title: '1Password Connect',
    description: 'REST API interface for 1Password Connect.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/1password-connect.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/1password-connect.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/1password-connect.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/1password.svg'
  },
  {
    title: 'Archive.org Search v1',
    description: "API for Internet Archive's Search-related services.",
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/archive-search-services.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/archive-search-services.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/archive-search-services.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/internet-archive.svg'
  },
  {
    title: 'Archive.org Wayback v1',
    description: "API for Internet Archive's Wayback Machine",
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/archives-wayback.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/archives-wayback.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/archives-wayback.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/internet-archive.svg'
  },
  {
    title: 'BitBucket API',
    description:
      'Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/bitbucket.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/bitbucket.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/bitbucket.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/bitbucket.svg'
  },
  {
    title: 'BufferApp API',
    description: 'Social media management for marketers and agencies.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/bufferapp.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/bufferapp.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/bufferapp.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/buffer.svg'
  },
  {
    title: 'Circle CI',
    description:
      'The CircleCI API is a RESTful, fully-featured API that allows you to do almost anything in CircleCI. You can access all information and trigger all actions.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/circleci.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/circleci.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/circleci.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/circle-ci.svg'
  },
  {
    title: 'Dev.to API',
    description: 'Access articles, users and other resources via API.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/dev-to.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/dev-to.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/dev-to.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/devto.svg'
  },
  {
    title: 'DigitalOcean API',
    description:
      'The DigitalOcean API allows you to manage Droplets and resources within the DigitalOcean cloud in a simple, programmatic way using conventional HTTP requests..',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/digitalocean.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/digitalocean.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/digitalocean.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/digitalocean.svg'
  },
  {
    title: 'Discourse',
    description:
      "Check out our mock sample of Discourse's API. Fast and easy to use.",
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/discourse.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/discourse.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/discourse.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/discourse.svg'
  },
  {
    title: 'DocuSign REST API',
    description:
      'The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/docusign.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/docusign.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/docusign.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/docusign.svg'
  },

  {
    title: 'ReadMe.io',
    description:
      'Create beautiful product and API documentation with our developer friendly platform.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/readme-io.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/readme-io.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/readme-io.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/readmeio.svg'
  },
  {
    title: 'Giphy v1',
    description:
      'Get instant access to millions of gifs either by trends, categories or even random.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/giphy.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/giphy.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/giphy.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/giphy.svg'
  },
  {
    title: 'Gitlab v3',
    description:
      'The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/gitlab.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/gitlab.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/gitlab.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/gitlab.svg'
  },
  {
    title: 'Healthcare.gov',
    description:
      'Start working with Healthcare.gov API easily and rapidly using this mock sample.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/healthcare-gov.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/healthcare-gov.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/healthcare-gov.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/healthcare-gov.svg'
  },
  {
    title: 'Jira API 7.6.1',
    description:
      "Mock Jira's API in a matter of seconds with this premade mock sample.",
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/jira.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/jira.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/jira.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/jira.svg'
  },
  {
    title: 'Linode API',
    description:
      'The Linode API provides the ability to programmatically manage the full range of Linode products and services.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/linode.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/linode.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/linode.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/linode.svg'
  },
  {
    title: 'Lyft API',
    description: "Drive your app to success with Lyft's API.",
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/lyft.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/lyft.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/lyft.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/lyft.svg'
  },
  {
    title: 'Mastodon API',
    description: 'API for GNU Social-compatible microblogging server.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/mastodon.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/mastodon.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/mastodon.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/mastodon.svg'
  },
  {
    title: 'Notion API',
    description:
      'Work faster with Notion API pages and much more by using our mock sample.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/notion.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/notion.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/notion.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/notion.svg'
  },
  {
    title: 'Docker',
    description:
      'The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/docker.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/docker.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/docker.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/docker.svg'
  },
  {
    title: 'Netlify API',
    description:
      'Netlify is a hosting service for the programmable web. It understands your documents and provides an API to handle atomic deploys of websites, manage form submissions, inject JavaScript snippets, and much more.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/netlify.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/netlify.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/netlify.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/netlify.svg'
  },
  {
    title: 'Slack Web API',
    description:
      'One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/slack.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/slack.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/slack.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/slack.svg'
  },
  {
    title: 'Okta Users API',
    description:
      'The Okta User API provides operations to manage users in your organization.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/okta-users.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/okta-users.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/okta-users.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/okta.svg'
  },
  {
    title: 'Open Weather',
    description:
      'Access current weather data for any location on Earth as well as the hourly forecast for 4 days ahead.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/open-weather.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/open-weather.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/open-weather.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/open-weather.svg'
  },
  {
    title: 'Data.gov Regulations',
    description: 'Provides public users access to federal regulatory content.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/data-gov-regulations.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/data-gov-regulations.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/data-gov-regulations.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/regulations-gov.svg'
  },
  {
    title: 'Sendgrid Email activity',
    description: 'The Beta endpoints for the new Email Activity APIs.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/sendgrid-email-activity.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/sendgrid-email-activity.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/sendgrid-email-activity.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/sendgrid.svg'
  },
  {
    title: 'Spotify v1',
    description: 'Mock sample for Spotify Web API: artists, albums, etc.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/spotify.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/spotify.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/spotify.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/spotify.svg'
  },
  {
    title: 'Stripe',
    description:
      'Go through your Stripe charges and balance instantly with this mock sample.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/stripe.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/stripe.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/stripe.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/stripe.svg'
  },
  {
    title: 'Twitter API',
    description: 'Twitter API v2 available endpoints.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/twitter.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/twitter.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/twitter.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/twitter.svg'
  },
  {
    title: 'Vercel API',
    description: "Mock sample for Vercel's webhooks and domains APIs.",
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/vercel.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/vercel.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/vercel.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/vercel.svg'
  },
  {
    title: 'Zoom API',
    description:
      'The Zoom API allows developers to access information from Zoom. You can use this API to build private services or public applications on the Zoom App Marketplace.',
    links: [
      {
        src: 'https://github.com/mockoon/mock-samples/blob/main/apis/zoom.json',
        text: 'Download',
        icon: 'icon-download'
      },
      {
        src: 'mockoon://load-export-data?url=https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/zoom.json',
        text: 'Open',
        icon: 'icon-open'
      },
      {
        src: 'clipboardcopy://mockoon-cli start --data https://raw.githubusercontent.com/mockoon/mock-samples/main/apis/zoom.json',
        text: 'CLI',
        icon: 'icon-copy',
        clickHandler
      }
    ],
    imageSrc: '/images/mock-samples/zoom.svg'
  }
];

const MockSamples: FunctionComponent = function () {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Mock API samples for your project'
        description="Create your mock API server in no time with Mockoon's ready to use mock samples for Stripe, Giphy, Open weather, and more"
        ogType='article'
      />
      <Hero
        title='Mock API samples for your project'
        subtitle="Create your mock API server in no time with Mockoon's ready to use mock samples for Stripe, Giphy, Open weather, and more"
      />

      <div className='section'>
        <div className='container'>
          <div className='alert alert-light border'>
            <p className='pb-2'>
              You have three choices to use our mock samples:
            </p>
            <p className='pb-2'>
              <button
                type='button'
                className='btn-xs btn btn-primary-soft'
                disabled
              >
                <i className='icon-download'></i> Download
              </button>{' '}
              Download them manually before{' '}
              <a href='/docs/latest/mockoon-data-files/import-export-mockoon-format/#import-from-a-json-file'>
                importing
              </a>{' '}
              them into the application or{' '}
              <a href='/tutorials/run-mock-api-anywhere-cli/'>run them</a> with
              the CLI.
            </p>
            <p className='pb-2'>
              <button
                type='button'
                className='btn-xs btn btn-primary-soft'
                disabled
              >
                <i className='icon-open'></i> Open
              </button>{' '}
              Open them directly in Mockoon if you already{' '}
              <a href='/download/'>installed the application</a>. You will be
              prompted by the application to save the mock API.
            </p>
            <p>
              <button
                type='button'
                className='btn-xs btn btn-primary-soft'
                disabled
              >
                <i className='icon-copy'></i> CLI
              </button>{' '}
              Copy the CLI command to run them immediately. Make sure that you{' '}
              <a href='/cli/'>installed the CLI</a> on your machine before
              running this command.
            </p>
          </div>
          <div className='row'>
            {mockSamples
              .sort((sampleA, sampleB) =>
                sampleA.title.toLowerCase() >= sampleB.title.toLowerCase()
                  ? 1
                  : -1
              )
              .map((sample, sampleIndex) => {
                return (
                  <div
                    key={`sample${sampleIndex}`}
                    className='mx-auto my-lg-3 col-12 col-lg-6 col-xl-4 d-flex'
                  >
                    <Card
                      data={sample}
                      vertical
                      cover={false}
                      indexPrefix={`sample${sampleIndex}`}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MockSamples;
