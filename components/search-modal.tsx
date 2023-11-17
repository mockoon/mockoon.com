import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  InstantSearch,
  Snippet,
  useHits,
  useSearchBox
} from 'react-instantsearch';
import { SearchCategoryLabels } from '../constants/search';
import { SearchResult } from '../models/search.model';

const searchClient = algoliasearch(
  'KP8XOWG0W3',
  '804e726b5288b4721b8da6f336ba2631'
);

const defaultHits: Partial<SearchResult>[] = [
  {
    title: 'Create your first mock API with Mockoon',
    link: '/tutorials/getting-started/',
    category: 'tutorials'
  },
  {
    title: 'Route responses and rules',
    link: '/tutorials/responses-and-rules/',
    category: 'tutorials'
  },
  {
    title: 'Run your mock REST APIs anywhere with Mockoon CLI',
    link: '/tutorials/run-mock-api-anywhere-cli/',
    category: 'tutorials'
  },
  {
    title: 'Create global rules for your routes',
    link: '/tutorials/create-global-rules-routes/',
    category: 'tutorials'
  },
  {
    title: "Create a partial mock API with Mockoon's proxy mode",
    link: '/tutorials/partial-mocking-proxy/',
    category: 'tutorials'
  },
  {
    title: 'Record API requests and HTTP traffic and auto-mock endpoints',
    link: '/tutorials/requests-recording-auto-mocking/',
    category: 'tutorials'
  },
  {
    title: 'Generate dynamic mock data with Mockoon templating system',
    link: '/tutorials/generate-mock-json-data/',
    category: 'tutorials'
  },
  {
    title: 'Use persisting data buckets to share data across routes',
    link: '/tutorials/use-persisting-data-buckets/',
    category: 'tutorials'
  },
  {
    title: "Create full mock REST APIs in seconds using Mockoon's CRUD routes",
    link: '/tutorials/create-full-rest-api-crud-routes/',
    category: 'tutorials'
  }
];

function CustomInterface({ setShow }) {
  const router = useRouter();
  const itemRefs = useRef([]);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const { hits } = useHits<SearchResult>();
  const { query, refine } = useSearchBox();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(
      0,
      query ? hits.length : defaultHits.length
    );
  }, [query, hits]);

  useHotkeys(
    'down',
    (event) => {
      event.preventDefault();
      setSelectedIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < (query ? hits : defaultHits).length) {
          itemRefs.current[nextIndex]?.scrollIntoView({
            block: 'nearest'
          });
          return nextIndex;
        }
        return prevIndex;
      });
    },
    {
      enableOnFormTags: true
    }
  );

  useHotkeys(
    'up',
    (event) => {
      event.preventDefault();
      setSelectedIndex((prevIndex) => {
        const nextIndex = prevIndex - 1;
        if (nextIndex >= 0) {
          itemRefs.current[nextIndex]?.scrollIntoView({
            block: 'nearest'
          });
          return nextIndex;
        }
        return prevIndex;
      });
    },
    {
      enableOnFormTags: true
    }
  );

  useHotkeys(
    'enter',
    (event) => {
      event.preventDefault();

      const currentHits = query ? hits : defaultHits;

      router.push(
        currentHits[selectedIndex].sectionAnchor
          ? `${currentHits[selectedIndex].link}#${currentHits[selectedIndex].sectionAnchor}`
          : currentHits[selectedIndex].link
      );
      setShow(false);
    },
    {
      enableOnFormTags: true
    }
  );

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo(0, 0);
      setSelectedIndex(0);
    }
  }, [query]);

  return (
    <div className='d-flex flex-column'>
      <div className='p-4 bg-gray-200'>
        <div className='input-group w-100'>
          <div className='input-group-text ps-2 bg-transparent'>
            <i className='icon-search fs-3'></i>
          </div>
          <input
            ref={inputRef}
            type='text'
            placeholder='Search our documentation'
            className='form-control border-0 rounded-1'
            onChange={() => {
              refine(inputRef?.current.value);
            }}
          />
        </div>
      </div>
      <ul
        ref={listRef}
        style={{ maxHeight: 'calc(50vh - 150px)' }}
        className='list-group list-group-flush overflow-y-scroll'
      >
        {(query ? hits : defaultHits).map((hit: any, hitIndex) => {
          return (
            <a
              key={`${hitIndex}`}
              ref={(el) => (itemRefs.current[hitIndex] = el)}
              href={
                hit.sectionAnchor
                  ? `${hit.link}#${hit.sectionAnchor}`
                  : hit.link
              }
              onClick={() => {
                setShow(false);
              }}
              className={`list-group-item list-group-item-action p-4 ${
                selectedIndex === hitIndex ? 'bg-gray-300' : ''
              }`}
            >
              <div
                className={` ${hitIndex === 0 ? 'pt-4' : ''} ${
                  hitIndex === (query ? hits : defaultHits).length - 1
                    ? 'pb-4'
                    : ''
                }`}
              >
                <div
                  className={`d-flex w-100 justify-content-between align-items-start`}
                >
                  <div className='mb-1'>{hit.title}</div>
                  <small className='badge text-bg-primary-subtle'>
                    {SearchCategoryLabels[hit.category]}
                  </small>
                </div>
                {hit.sectionTitle && (
                  <p className='fs-5 mb-0 ps-4 fst-italic text-gray-700'>
                    <span className='fw-bold pe-2'>#</span>
                    <small>{hit.sectionTitle}</small>
                  </p>
                )}
                <div className='ps-4'>
                  <small className='fs-6 text-gray-600'>
                    <Snippet
                      highlightedTagName={'span'}
                      classNames={{
                        highlighted: 'fw-bold text-primary'
                      }}
                      attribute='content'
                      hit={hit}
                    />
                  </small>
                </div>
              </div>
            </a>
          );
        })}
        {hits.length === 0 && (
          <div className='px-4 py-6 text-center text-gray-700'>
            No results for "{query}"
          </div>
        )}
      </ul>
    </div>
  );
}

const SearchModal: FunctionComponent<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = function ({ show, setShow }) {
  return (
    <Modal
      show={show}
      size='lg'
      onHide={() => setShow(false)}
      scrollable={false}
    >
      <Modal.Body
        style={{ maxHeight: '50vh' }}
        className='rounded-1 p-0 pb-6 bg-gray-200 overflow-hidden'
      >
        <InstantSearch
          searchClient={searchClient}
          indexName={process.env.NEXT_PUBLIC_SEARCH_INDEX}
        >
          <CustomInterface setShow={setShow} />
        </InstantSearch>
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
