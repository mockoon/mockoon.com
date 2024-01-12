import { FunctionComponent } from 'react';

const Tags: FunctionComponent<{ tags: string[] }> = function ({ tags }) {
  return tags.map((tag, index) => (
    <span
      key={tag}
      className={`badge badge-lg text-bg-info-subtle ${
        index < tags.length - 1 ? 'me-2' : ''
      }`}
    >
      {tag}
    </span>
  ));
};

export default Tags;
