import { useEffect, useState } from 'react';

const CompanyLogos = function () {
  const companyLogos = [
    { src: '/images/logos/impala.svg', alt: 'Impala logo' },
    { src: '/images/logos/picpay.svg', alt: 'PicPay logo' },
    { src: '/images/logos/daimler.svg', alt: 'Daimler logo' },
    { src: '/images/logos/amadeus.svg', alt: 'Amadeus logo' },
    { src: '/images/logos/localazy.svg', alt: 'Localazy logo' },
    { src: '/images/logos/koreanair.svg', alt: 'Korean Air logo' },
    { src: '/images/logos/wargaming.svg', alt: 'War Gaming logo' },
    { src: '/images/logos/rbc.svg', alt: 'RBC logo' },
    { src: '/images/logos/cloudflight.svg', alt: 'CloudFlight logo' },
    { src: '/images/logos/shopee.svg', alt: 'Shopee logo' },
    { src: '/images/logos/ford.svg', alt: 'Ford logo' },
    { src: '/images/logos/walmart.svg', alt: 'Walmart logo' },
    { src: '/images/logos/ntt-docomo.svg', alt: 'NTT Docomo logo' },
    { src: '/images/logos/jpmchase.svg', alt: 'JP Morgan Chase logo' },
    { src: '/images/logos/cryptocom.svg', alt: 'Crypto.com logo' },
    { src: '/images/logos/audi.svg', alt: 'Audi logo' },
    { src: '/images/logos/appwrite.svg', alt: 'Appwrite logo' }
  ];
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    setLogos(companyLogos.sort(() => 0.5 - Math.random()));
  }, []);

  return (
    <div className='container'>
      <h4 className='text-gray-700 text-center pb-6 fw-bold'>
        Trusted by awesome teams at
      </h4>
      <div className='row align-items-center justify-content-center'>
        {logos.slice(0, 6).map((logo, logoIndex) => (
          <div
            key={`logo${logoIndex}`}
            className='col-6 col-sm-3 col-lg-2 mb-4 mb-md-0 px-xl-8 text-center'
          >
            <div className='img-fluid mb-2 mb-md-0'>
              <img src={logo.src} alt={logo.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
