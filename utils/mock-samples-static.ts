import { GetStaticPropsContext } from 'next';
import {
  MockAPI,
  MockAPIsCategories,
  MockAPIsDescriptor
} from '../models/common.model';

const getAPIList = async (): Promise<MockAPIsDescriptor> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MOCK_SAMPLES_URL}list.json`
  );

  return await res.json();
};

export const getMockSamplesCategoriesPaths = async () => {
  const mockAPIs = await getAPIList();

  return {
    paths: [
      { params: { category: 'all' } },
      ...mockAPIs.categories.map((category) => {
        return { params: { category } };
      })
    ],
    fallback: false
  };
};

export const getMockSamplesSlugProps = async (
  context: GetStaticPropsContext
) => {
  const mockAPIs = await getAPIList();
  let mockAPI: MockAPI;

  if (context.params.slug) {
    mockAPI = mockAPIs.items.find(
      (item) => item.slug === (context.params.slug as string)
    );
  }

  return { props: { mockAPI } };
};

export const getMockSamplesSlugPaths = async () => {
  const mockAPIs = await getAPIList();

  return {
    paths: mockAPIs.items.map((item) => {
      return { params: { slug: item.slug } };
    }),
    fallback: false
  };
};

export const getMockSamplesCategoriesProps = async (
  context: GetStaticPropsContext
) => {
  let mockAPIsDescriptor: MockAPIsDescriptor = await getAPIList();
  let mockAPIs: MockAPI[] = mockAPIsDescriptor.items;
  let mockAPIsCategories: MockAPIsCategories;

  if (context?.params?.category && context.params.category !== 'all') {
    mockAPIs = mockAPIsDescriptor.items.filter((item) =>
      item.categories.includes(context.params.category as string)
    );
  }

  mockAPIsCategories = mockAPIsDescriptor.categories.reduce(
    (categories, category) => {
      categories.push({
        slug: category,
        title:
          category === 'iot'
            ? 'IoT'
            : (category.charAt(0).toUpperCase() + category.slice(1)).replace(
                '-',
                ' '
              )
      });

      return categories;
    },
    []
  );

  return {
    props: {
      mockAPIs,
      mockAPIsCategories,
      totalAPIs: mockAPIs.length,
      currentCategory: context.params.category
    }
  };
};
