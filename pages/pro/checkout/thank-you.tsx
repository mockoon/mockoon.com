import Link from 'next/link';
import Meta from '../../../components/meta';
import Layout from '../../../layout/layout';

export default function ProCheckoutThankYou() {
  return (
    <Layout footerBanner='download'>
      <Meta
        title='Thank you for purchasing Mockoon Pro'
        description='Your Mockoon Pro purchase is being processed'
      />
      <main className='py-8 py-md-11 border-top bg-gradient-light-white'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 text-center'>
              <h1 className='fw-bold mb-3'>Thank you for your purchase</h1>
              <p className='lead text-gray-700 mb-6'>
                Your payment was completed. Your Mockoon Pro license will be
                sent to the email address provided during checkout.
              </p>
              <Link
                href='/pro/docs/discover-mockoon-pro/'
                className='btn btn-primary'
              >
                Read the Mockoon Pro documentation
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
