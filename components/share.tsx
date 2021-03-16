import { FunctionComponent } from 'react';

const Share: FunctionComponent<{
  title: string;
  url: string;
  text: string;
}> = function (props) {
  const url = encodeURIComponent(props.url);
  const text = encodeURIComponent(props.text);

  return (
    <div>
      <style jsx>
        {`
          .resp-sharing-button__link,
          .resp-sharing-button__icon {
            display: inline-block;
          }

          .resp-sharing-button__link {
            text-decoration: none;
            color: #fff;
            margin: 0.5em;
          }

          .resp-sharing-button {
            border-radius: 5px;
            transition: 25ms ease-out;
            padding: 0.5em 0.75em;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }

          .resp-sharing-button__icon svg {
            width: 1em;
            height: 1em;
            margin-right: 0.4em;
            vertical-align: top;
          }

          .resp-sharing-button--small svg {
            margin: 0;
            vertical-align: middle;
          }

          /* Non solid icons get a stroke */
          .resp-sharing-button__icon {
            stroke: #fff;
            fill: none;
          }

          /* Solid icons get a fill */
          .resp-sharing-button__icon--solid,
          .resp-sharing-button__icon--solidcircle {
            fill: #fff;
            stroke: none;
          }

          .resp-sharing-button--twitter {
            background-color: #55acee;
          }

          .resp-sharing-button--twitter:hover {
            background-color: #2795e9;
          }

          .resp-sharing-button--pinterest {
            background-color: #bd081c;
          }

          .resp-sharing-button--pinterest:hover {
            background-color: #8c0615;
          }

          .resp-sharing-button--facebook {
            background-color: #3b5998;
          }

          .resp-sharing-button--facebook:hover {
            background-color: #2d4373;
          }

          .resp-sharing-button--tumblr {
            background-color: #35465c;
          }

          .resp-sharing-button--tumblr:hover {
            background-color: #222d3c;
          }

          .resp-sharing-button--reddit {
            background-color: #5f99cf;
          }

          .resp-sharing-button--reddit:hover {
            background-color: #3a80c1;
          }

          .resp-sharing-button--google {
            background-color: #dd4b39;
          }

          .resp-sharing-button--google:hover {
            background-color: #c23321;
          }

          .resp-sharing-button--linkedin {
            background-color: #0077b5;
          }

          .resp-sharing-button--linkedin:hover {
            background-color: #046293;
          }

          .resp-sharing-button--email {
            background-color: #777;
          }

          .resp-sharing-button--email:hover {
            background-color: #5e5e5e;
          }

          .resp-sharing-button--xing {
            background-color: #1a7576;
          }

          .resp-sharing-button--xing:hover {
            background-color: #114c4c;
          }

          .resp-sharing-button--whatsapp {
            background-color: #25d366;
          }

          .resp-sharing-button--whatsapp:hover {
            background-color: #1da851;
          }

          .resp-sharing-button--hackernews {
            background-color: #ff6600;
          }
          .resp-sharing-button--hackernews:hover,
          .resp-sharing-button--hackernews:focus {
            background-color: #fb6200;
          }

          .resp-sharing-button--vk {
            background-color: #507299;
          }

          .resp-sharing-button--vk:hover {
            background-color: #43648c;
          }

          .resp-sharing-button--facebook {
            background-color: #3b5998;
            border-color: #3b5998;
          }

          .resp-sharing-button--facebook:hover,
          .resp-sharing-button--facebook:active {
            background-color: #2d4373;
            border-color: #2d4373;
          }

          .resp-sharing-button--twitter {
            background-color: #55acee;
            border-color: #55acee;
          }

          .resp-sharing-button--twitter:hover,
          .resp-sharing-button--twitter:active {
            background-color: #2795e9;
            border-color: #2795e9;
          }

          .resp-sharing-button--email {
            background-color: #777777;
            border-color: #777777;
          }

          .resp-sharing-button--email:hover,
          .resp-sharing-button--email:active {
            background-color: #5e5e5e;
            border-color: #5e5e5e;
          }

          .resp-sharing-button--linkedin {
            background-color: #0077b5;
            border-color: #0077b5;
          }

          .resp-sharing-button--linkedin:hover,
          .resp-sharing-button--linkedin:active {
            background-color: #046293;
            border-color: #046293;
          }
        `}
      </style>
      <hr />
      <h5>{props.title}</h5>
      <a
        className='resp-sharing-button__link'
        href={`https://twitter.com/intent/tweet/?text=${text}&url=${url}`}
        target='_blank'
        rel='noopener'
        aria-label=''
      >
        <div className='resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small'>
          <div
            aria-hidden='true'
            className='resp-sharing-button__icon resp-sharing-button__icon--solid'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
            </svg>
          </div>
        </div>
      </a>

      <a
        className='resp-sharing-button__link'
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target='_blank'
        rel='noopener'
        aria-label=''
      >
        <div className='resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small'>
          <div
            aria-hidden='true'
            className='resp-sharing-button__icon resp-sharing-button__icon--solid'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
            </svg>
          </div>
        </div>
      </a>

      <a
        className='resp-sharing-button__link'
        href={`https://facebook.com/sharer/sharer.php?u=${url}`}
        target='_blank'
        rel='noopener'
        aria-label=''
      >
        <div className='resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small'>
          <div
            aria-hidden='true'
            className='resp-sharing-button__icon resp-sharing-button__icon--solid'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path d='M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z' />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Share;
