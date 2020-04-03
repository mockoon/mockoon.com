import { FunctionComponent } from 'react';
import Tutorial from '../../components/tutorial';
import Image from './partials/image';

const meta = {
  title: 'Create dynamic responses with templating',
  description:
    "Create dynamic responses for your mock server with Mockoon's templating system."
};

const DynamicResponseWithTemplating: FunctionComponent = function () {
  return (
    <Tutorial meta={meta}>
      <div className='content'>
        Mockoon's implements{' '}
        <a href='https://github.com/webroo/dummy-json' target='_blank'>
          Dummy JSON
        </a>{' '}
        library in order to create dynamic responses. This templating system is
        supported in response's <strong>body</strong>, <strong>headers</strong>,{' '}
        <strong>file content</strong>, and <strong>file path</strong>.
        <h3>Available helpers</h3>
        <p>
          Dummy JSON offers lots of built-in helpers: <code>repeat</code>,{' '}
          <code>int</code>, <code>float</code>, <code>date</code>,{' '}
          <code>time</code>, <code>title</code>, <code>firstName</code>,{' '}
          <code>lastName</code>, <code>company</code>, <code>latitude</code>,{' '}
          <code>longitude</code>, <code>domain</code>, <code>TLD</code>,{' '}
          <code>email</code>, <code>street</code>, <code>city</code>,{' '}
          <code>country</code>, <code>phone</code>, <code>color</code>,{' '}
          <code>hexColor</code>, <code>guid</code>, <code>ipv4</code>,{' '}
          <code>ipv6</code>, <code>lorem</code>, <code>lowercase</code>,{' '}
          <code>uppercase</code>, etc. Please have a look at{' '}
          <a
            href='https://github.com/webroo/dummy-json#available-helpers'
            target='_blank'
          >
            Dummy JSON documentation
          </a>{' '}
          to learn how to use them.
        </p>
        <p>
          In addition to these helpers, some custom ones have been added to
          Mockoon:
        </p>
        <ul>
          <li>
            <code>array 'item1' 'item2' 'item3'</code>: create an array from
            items (to be used in the next helpers oneOf, someOf)
          </li>
          <li>
            <code>oneOf (array 'item1' 'item2' 'item3')</code>: select a random
            item in the array passed in parameters
          </li>
          <li>
            <code>someOf (array 'item1' 'item2' 'item3') x y</code>: returns x
            to y random items from the array passed in parameters concatenated
            as a string (to be used with double curly braces), result is the
            following: <code>item1,item2</code>
          </li>
          <li>
            <code>
              &#123;&#123;&#123;someOf (array 'item1' 'item2' 'item3') x y
              true&#125;&#125;&#125;
            </code>
            : returns x to y random items from the array passed in parameters as
            an array (to be used with triple curly braces), result is the
            following: <code>["item1","item2"]</code>
          </li>
          <li>
            <code>#switch ... #case ... #default</code>: select content
            depending on a variable, like a normal switch :) (see example below)
          </li>
        </ul>
        <p>
          Mockoon also supports the following helpers which can gather request
          information:
        </p>
        <ul>
          <li>
            <code>body 'path' 'default value'</code>: get a path from a request
            body's JSON by default or from form params if request's{' '}
            <code>Content-Type</code> header is set to{' '}
            <code>application/x-www-form-urlencoded</code>. Path has the
            following form <code>key.0.key.5.key</code> for JSON (syntax is
            based on{' '}
            <a href='https://www.npmjs.com/package/object-path'>
              NPM <strong>object-path</strong> package
            </a>
            ), or directly a param name like <code>firstname</code> for form
            params.
          </li>
          <li>
            <code>urlParam 'paramName1'</code>: get a param from the URL{' '}
            <code>/:paramName1/:paramName2</code>
          </li>
          <li>
            <code>queryParam 'param1' 'default value'</code>: get a param from
            the query string <code>?param1=xxx&#38;param2=yyy</code> or a
            default value if param is not present
          </li>
          <li>
            <code>cookie 'cookie_name' 'default value'</code>: get the content
            of a cookie or a default value if the cookie is not present
          </li>
          <li>
            <code>header 'Header-Name' 'default value'</code>: get content from
            any request header or a default value if header is not present
          </li>
          <li>
            <code>hostname</code>: get request hostname
          </li>
          <li>
            <code>ip</code>: get request IP address
          </li>
          <li>
            <code>method </code>: get request method (GET, PUT, POST, etc.)
          </li>
          <li>
            <code>now 'YYYY-MM-DD'</code>: display current time in the chosen
            format. Format syntax is based on{' '}
            <a href='https://date-fns.org/v2.11.1/docs/format'>
              date-fns package (v2)
            </a>{' '}
            and is optional. Without providing it this helper will display an
            ISO string
          </li>
        </ul>
        <p>
          <em>
            Please note that a space always follows the helper name and
            separates each and all params like in{' '}
            <code>
              oneOf&nbsp;*space*&nbsp;(array&nbsp;*space*&nbsp;'item1'&nbsp;*space*&nbsp;'item2')
            </code>
            . Also, parenthesis serve to prioritize a helper over another and
            not to symbolize a function call. Helpers does not require
            parenthesis in order to work.
          </em>
        </p>
        <h3>Body and file content templating</h3>
        <p>
          Templating will work in the body textarea without consideration for
          the Content-Type that has been defined. It will also work with files
          content for a limited set of MIME types (<code>application/json</code>
          , <code>text/html</code>, <code>text/css</code>, <code>text/csv</code>
          , <code>application/javascript</code>,{' '}
          <code>application/typescript</code>, <code>text/plain</code>,{' '}
          <code>application/xhtml+xml</code>, <code>application/xml</code>).
        </p>
        <p>
          Here is an example of what you can do with this templating system:
        </p>
        <p>
          <code>
            &#123;
            <br /> "userId": "&#123;&#123; urlParam 'id'&#125;&#125;",
            <br /> "name": "&#123;&#123; queryParam 'name' 'John' &#125;&#125;",
            <br /> "lang": "&#123;&#123;&#123;header 'Accept-Language'
            'en'&#125;&#125;&#125;",
            <br /> "elementTitle": "&#123;&#123; body 'elements.0.title'
            'default' &#125;&#125;",
            <br /> "ip": "&#123;&#123; ip &#125;&#125;",
            <br /> "method": "&#123;&#123; method &#125;&#125;",
            <br /> "hostname": "&#123;&#123; hostname &#125;&#125;",
            <br /> "friends": [<br /> &#123;&#123;#repeat 2&#125;&#125;
            <br /> &#123;
            <br /> "id": &#123;&#123;@index&#125;&#125;,
            <br /> "name": "&#123;&#123; firstName &#125;&#125; &#123;&#123;
            lastName &#125;&#125;"
            <br /> &#125;
            <br /> &#123;&#123;/ repeat&#125;&#125;
            <br /> ],
            <br /> "oneItem": "&#123;&#123; oneOf (array 'item1' 'item2'
            'item3') &#125;&#125;",
            <br /> "someItemsAsString": "&#123;&#123; someOf (array 'item1'
            'item2' 'item3') 1 2 &#125;&#125;",
            <br /> "someItemsAsArray": &#123;&#123;&#123; someOf (array 'item1'
            'item2' 'item3') 1 2 true &#125;&#125;&#125;,
            <br /> "userName":
            <br /> &#123;&#123;#switch (urlParam 'id')&#125;&#125;
            <br /> &#123;&#123;#case
            "1"&#125;&#125;"John"&#123;&#123;/case&#125;&#125;
            <br /> &#123;&#123;#case
            "2"&#125;&#125;"Jack"&#123;&#123;/case&#125;&#125;
            <br /> &#123;&#123;#default&#125;&#125;"Peter"&#123;&#123;/default
            &#125;&#125;
            <br /> &#123;&#123;/switch&#125;&#125;
            <br />
            &#125;
          </code>
        </p>
      </div>
      <Image
        src='/images/tutorials/body-templating.jpg'
        alt='Body response templating'
        size='medium'
      />
      <div className='content'>
        <p>And the response you can get with the following request:</p>
        <p>
          <code>
            GET /user/123456?name=john
            <br />
            Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7
            <br />
            Body:
            <br />
            &#123;
            <br /> "element": [&#123;"title": "My title"&#125;]
            <br />
            &#125;
          </code>
          <br />
          <br />
          Response:
          <br />
          <code>
            &#123;
            <br /> "userId": "5",
            <br /> "name": "john",
            <br /> "lang": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
            <br /> "elementTitle": "My title",
            <br /> "ip": "::1",
            <br /> "method": "GET",
            <br /> "hostname": "localhost",
            <br /> "friends": [<br /> &#123;
            <br /> "id": 0,
            <br /> "name": "Stephen Bradbury"
            <br /> &#125;,
            <br /> &#123;
            <br /> "id": 1,
            <br /> "name": "Warren Caffey"
            <br /> &#125;
            <br /> ],
            <br /> "oneItem":"item1",
            <br /> "someItemsAsString":"item2",
            <br /> "someItemsAsArray":["item2", "item3"],
            <br /> "userName":"John"
            <br />
            &#125;
          </code>
        </p>
        <p>
          This system is flexible enough so you can generate a lot of different
          contents like CSV files:
        </p>
        <p>
          <code>
            firstname,lastname,countryCode
            <br />
            &#123;&#123;#repeat 10&#125;&#125;
            <br />{' '}
            &#123;&#123;firstName&#125;&#125;,&#123;&#123;lastName&#125;&#125;,&#123;&#123;countryCode&#125;&#125;
            <br />
            &#123;&#123;/repeat&#125;&#125;
          </code>
          <br />
          <br />
          Response:
          <br />
          <code>
            firstname,lastname,countryCode
            <br />
            Max,Magby,AZ
            <br />
            Stan,Muldoon,HM
            <br />
            Drew,Rebelo,CY
            <br />
            Cory,Neal,BG
            <br />
            Grace,Whitson,CY
            <br />
            Haydee,Backer,ET
            <br />
            Erik,Friedrich,MX
            <br />
            Stephen,Paquette,PH
            <br />
            Neida,Durrett,PN
            <br />
            Vaughn,Neal,MO
          </code>
        </p>
      </div>
      <div className='content'>
        <h3>File input templating</h3>
        <p>
          The <strong>file input field</strong> in each route also supports
          templating with the same helpers. This allows you to dynamically serve
          files depending on the request parameters, like <code>urlParam</code>{' '}
          or any other helper. Example:
        </p>
        <p>
          If you have a set of files named <code>./file1.json</code>,{' '}
          <code>./file2.json</code>, etc and a route named <code>/:id</code> you
          can use the <code>urlParam</code> helper in the file input:{' '}
          <code>c:/.../file&#123;&#123; urlParam 'id'&#125;&#125;.json</code>.
        </p>
        <p>
          If you call this route with an id <code>/1</code>,{' '}
          <code>./file1.json</code> will be sent.
        </p>
      </div>
      <Image
        src='/images/tutorials/file-input-templating.jpg'
        alt='File input templating'
        size='medium'
      />
      <div className='content'>
        <h3>Headers templating</h3>
        <p>
          Finally, templating helpers are also supported in{' '}
          <strong>headers values</strong> (both route headers and environment
          headers):
        </p>
      </div>
      <Image
        src='/images/tutorials/header-templating.jpg'
        alt='Headers value templating'
        size='medium'
      />
    </Tutorial>
  );
};

export default DynamicResponseWithTemplating;
