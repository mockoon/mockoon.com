import { MockAPI } from '../models/common.model';

export const mockSamplesIntrosNb = 5;

export const getMockSamplesIntro = (index, mockAPI: MockAPI) => {
  const seoTitle = mockAPI.title.includes('API')
    ? mockAPI.title
    : mockAPI.title + ' API';
  const mockSamplesIntros = [
    `Speed up your application development by using "${seoTitle}" ready-to-use mock sample. Mocking this API will help you accelerate your development lifecycles and allow you to stop relying on an external API to get the job done. No more API keys to provision, accesses to configure or unplanned downtime, just work.<br>Enhance your development infrastructure by mocking third party APIs during integrating testing.`,
    `Integrate third-party APIs faster by using "${seoTitle}" ready-to-use mock sample. Mocking this API will allow you to start working in no time. No more accounts to create, API keys to provision, accesses to configure, unplanned downtime, just work.<br>Improve your integration tests by mocking third-party APIs and cover more edge cases: slow response time, random failures, etc.`,
    `Start working with "${seoTitle}" right away by using this ready-to-use mock sample. API mocking can greatly speed up your application development by removing all the tedious tasks or issues: API key provisioning, account creation, unplanned downtime, etc.<br>
    It also helps reduce your dependency on third-party APIs and improves your integration tests' quality and reliability by accounting for random failures, slow response time, etc.`,
    `Speed up your application development by using "${seoTitle}" ready-to-use mock sample. Mocking this API will allow you to start working in no time. No more accounts to create, API keys to provision, accesses to configure, unplanned downtime, just work.<br>It also improves your integration tests' quality and reliability by accounting for random failures, slow response time, etc.`,
    `Integrate third-party APIs faster by using "${seoTitle}" ready-to-use mock sample. Mocking this API will help you accelerate your development lifecycles and improves your integration tests' quality and reliability by accounting for random failures, slow response time, etc.<br> It also helps reduce your dependency on third-party APIs: no more accounts to create, API keys to provision, accesses to configure, unplanned downtime, etc.`
  ];

  return mockSamplesIntros[index];
};
