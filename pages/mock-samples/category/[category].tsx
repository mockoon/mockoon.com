import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import Breadcrumb from '../../../components/breadcrumb';
import Hero from '../../../components/hero';
import Meta from '../../../components/meta';
import { MockSamplesHelpButton } from '../../../components/mock-samples/buttons';
import MockSampleCards from '../../../components/mock-samples/cards';
import CategoriesMenu from '../../../components/mock-samples/categories-menu';
import HelpModal from '../../../components/mock-samples/help-modal';
import Layout from '../../../layout/layout';
import { MockAPI, MockAPIsCategories } from '../../../models/common.model';
import {
  getMockSamplesCategoriesPaths,
  getMockSamplesCategoriesProps
} from '../../../utils/mock-samples-static';

export async function getStaticProps(context: GetServerSidePropsContext) {
  return await getMockSamplesCategoriesProps(context);
}

export async function getStaticPaths() {
  return await getMockSamplesCategoriesPaths();
}

const MockSamplesCategory: FunctionComponent<{
  mockAPIs: MockAPI[];
  mockAPIsCategories: MockAPIsCategories;
  totalAPIs: number;
  currentCategory: string;
}> = function ({ mockAPIs, mockAPIsCategories, totalAPIs, currentCategory }) {
  const router = useRouter();
  const itemsPerPage = 80;
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [mockAPIsList, setMockAPIsList] = useState<MockAPI[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [totalItems, setTotalItems] = useState<number>(totalAPIs);

  const meta = {
    title: 'API mock samples for your project',
    description:
      "Create your mock API server in no time with Mockoon's ready to use mock samples for you favorite APIs: 1Password, BitBucket, GitHub and more"
  };

  let currentCategoryTitle = 'All';

  if (!router.asPath.includes('all')) {
    currentCategoryTitle = mockAPIsCategories.find(
      (category) => category.slug === currentCategory
    ).title;
    meta.title = `${currentCategoryTitle} APIs mock samples for your project`;
    meta.description = `Integrate with third-parties ${currentCategoryTitle.toLowerCase()} REST APIs in no time by mocking them with Mockoon's ready to use mock samples`;
  }

  useEffect(() => {
    setTotalItems(totalAPIs);
    setFilter('');

    setMockAPIsList(mockAPIs.slice(0, itemsPerPage));
  }, [router.asPath]);

  const filterAPIs = (query: string) => {
    return mockAPIs.filter(
      (mockAPI) =>
        mockAPI.title.includes(query) ||
        mockAPI.description.includes(query) ||
        mockAPI.slug.includes(query)
    );
  };

  const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);

    const filteredAPIs = filterAPIs(filter);
    setTotalItems(filteredAPIs.length);
    setMockAPIsList(filteredAPIs.slice(0, itemsPerPage));
  };

  const loadMore = () => {
    let apiList = mockAPIs;

    if (filter) {
      apiList = filterAPIs(filter);
    }

    setMockAPIsList(apiList.slice(0, mockAPIsList.length + itemsPerPage));
  };

  return (
    <Layout footerBanner='download'>
      <Meta
        title={meta.title}
        description={meta.description}
        url={`/mock-samples/category/${currentCategory}/`}
        ogType='article'
      />
      <Hero title={meta.title} subtitle={meta.description} />

      <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} />

      <Breadcrumb
        currentTitle={currentCategoryTitle}
        parentLink='/mock-samples/category/all/'
        parentTitle='Mock samples'
      />

      <div className='container'>
        <section className='py-8'>
          <div className='row justify-content-center gx-8 bg-white'>
            <div className='col-12 col-md-3 col-lg-3'>
              <div className='mb-4'>
                <MockSamplesHelpButton
                  onClick={() => {
                    setShowHelp(true);
                  }}
                />
              </div>
              <input
                type='text'
                className='form-control form-control-xs'
                placeholder='Search an API'
                value={filter}
                onChange={onFilterChange}
              />
              <hr />
              <CategoriesMenu categories={mockAPIsCategories} />
            </div>
            <div className='col-12 col-md-9 col-lg-9'>
              <div className='row gx-8'>
                <MockSampleCards
                  ratioPerItemXl={6}
                  mockAPIsList={mockAPIsList}
                />
              </div>
              {mockAPIsList.length < totalItems && (
                <div className='pb-8 text-center'>
                  <button
                    className='btn btn-sm btn-secondary-soft'
                    onClick={() => {
                      loadMore();
                    }}
                  >
                    <span>Load more </span>
                  </button>
                </div>
              )}
              {mockAPIsList.length === 0 && (
                <div className='pb-8 text-center fs-3 fw-bold text-gray-500'>
                  No result
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MockSamplesCategory;
