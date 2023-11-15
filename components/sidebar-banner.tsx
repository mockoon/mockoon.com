import { FunctionComponent } from 'react';

const SidebarBanner: FunctionComponent<{
  title: string;
  link: string;
  text: string;
  ctaText: string;
  pro?: boolean;
}> = function ({ title, link, text, ctaText, pro }) {
  return (
    <div className='card shadow-light-lg mb-6 mb-md-0 lift lift-lg'>
      <div className='card-body'>
        {pro && (
          <span className='badge text-bg-warning badge-float badge-float-outside'>
            PRO
          </span>
        )}

        <h4 className='fw-bold'>{title}</h4>

        <p className='text-gray-800'>{text}</p>

        <a href={link} className='fs-sm fw-bold text-decoration-none'>
          {ctaText}
          <i className='fe fe-arrow-right ms-3'></i>
        </a>
      </div>
    </div>
  );
};

export default SidebarBanner;
