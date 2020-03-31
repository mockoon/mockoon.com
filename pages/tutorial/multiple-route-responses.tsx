import { FunctionComponent } from 'react';
import Tutorial from '../../components/tutorial';
import Image from './partials/image';

const meta = {
  title: 'Define multiple responses for each route',
  description:
    'Multiple responses can be defined for each route with different body, headers and status. They are triggered with rules.'
};

const MultipleRouteResponses: FunctionComponent = function() {
  return (
    <Tutorial meta={meta}>
      <div className='content'>
        <p>
          Since{' '}
          <a
            href='https://github.com/mockoon/mockoon/releases/tag/v1.5.0'
            target='_blank'
          >
            v1.5.0
          </a>
          , you can define multiple responses for each route and trigger them
          using a set of rules.
        </p>
        <h3>Default route response</h3>
        <p>
          There is always at least one response when you create a new route. You
          can modify it and add more responses. But you can never delete the
          last route response.
          <br />
          Without rules or when a request does not match the one you defined,
          the default response will always be the first one in the list. You can
          easily change the default response by reordering the responses menu
          with a drag and drop:
        </p>
      </div>
      <Image
        src='/images/tutorials/reorder-responses.gif'
        alt='Reorder route responses'
        size='medium'
      />
      <div className='content'>
        <h3>Defining rules</h3>
      </div>
      <div className='content'>
        <p>
          You can define an unlimited number of rules for each route. At each
          request, Mockoon will read each route response rules and will return
          the response which contains the first matching rule. There is no logic
          between the rules. You can read them like this:{' '}
          <code>[rule OR rule] OR [rule OR rule]</code> the brackets symbolizing
          each route.
        </p>
        <p>Rules have three parts:</p>
        <ul>
          <li>
            a <a href='#target'>target</a>
          </li>
          <li>
            a <a href='#property'>property name or path</a>
          </li>
          <li>
            a <a href='#value'>value</a>
          </li>
        </ul>
      </div>
      <Image
        src='/images/tutorials/add-route-response-rules.gif'
        alt='Add route response rules'
      />
      <div className='content'>
        <ol>
          <h4 id='target'>
            <li value='1'>Target</li>
          </h4>
        </ol>
        <p>In the dropdown menu you can choose between:</p>
        <ul>
          <li>
            a property value in a JSON or form data <strong>body</strong> (if
            request's <code>Content-Type</code> is either{' '}
            <code>application/json</code> or{' '}
            <code>application/x-www-form-urlencoded</code>).
          </li>
          <li>
            the value of a <strong>header</strong>.
          </li>
          <li>
            the value of a <strong>route param</strong>.
          </li>
          <li>
            the value of a <strong>query string field</strong>.
          </li>
        </ul>
        <ol>
          <h4 id='property'>
            <li value='2'>Property name or path</li>
          </h4>
        </ol>
        <p>
          Depending on the <strong>target</strong>, the way to access properties
          may be different:
        </p>
        <ul>
          <li>
            <strong>body</strong>: access a property value using a path (based
            on NPM package{' '}
            <a href='https://www.npmjs.com/package/object-path' target='_blank'>
              object-path
            </a>
            ) like <code>users.0.name</code> for JSON content or a single field
            for form data.
          </li>
          <li>
            <strong>headers</strong>: a header name like <code>Accept</code> or{' '}
            <code>Content-Type</code>.
          </li>
          <li>
            <strong>route param</strong>: a route param name without the colon
            (":"), <code>:userId</code> becoming <code>userId</code>.
          </li>
          <li>
            <strong>query string</strong>: either provide a property name like{' '}
            <code>filter</code> or a path if the query string field is an object{' '}
            <code>filter.primary</code>.
          </li>
        </ul>
        <p>
          For body and query string, if the property is an array, Mockoon will
          automatically check in the array if at least one item matches the
          value.
        </p>
        <ol>
          <h4 id='value'>
            <li value='3'>Value</li>
          </h4>
        </ol>
        <p>
          You can either set a simple text value like "expected value" or any
          kind of regex. To use a regex, write it without the leading and
          trailing slashes and tick the checkbox on the right.
          <br />
          Examples:
          <code>primary|secondary</code>, <code>^user1-9</code>,{' '}
          <code>UTF-.*</code>
          <br />
          You can even test for empty values with the following regex:{' '}
          <code>^$|\s+</code>
        </p>
      </div>
    </Tutorial>
  );
};

export default MultipleRouteResponses;
