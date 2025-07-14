import Link from 'next/link';
import { QRCodeCanvas } from 'qrcode.react';
import { FunctionComponent, useState } from 'react';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import ToolsCta from '../../components/tools-cta';
import Layout from '../../layout/layout';

const QRCodeGenerator: FunctionComponent = function () {
  const [value, setValue] = useState('Mockoon is an awesome API mocking tool!');
  const [size, setSize] = useState(1024);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fgColor, setFgColor] = useState('#242830');
  const [marginSize, setMarginSize] = useState(1);
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<any>('L');
  const [embeddedImageSrc, setEmbeddedImageSrc] = useState<string | null>(null);
  const [embeddedImageWidth, setEmbeddedImageWidth] = useState(128);
  const [embeddedImageHeight, setEmbeddedImageHeight] = useState(128);
  const [embeddedImageExcavate, setEmbeddedImageExcavate] = useState(false);
  const [embeddedImageOpacity, setEmbeddedImageOpacity] = useState(1);

  return (
    <Layout footerBanner='download'>
      <Meta
        title={'Online QR Code generator'}
        description='Generate QR codes online for your text or URL with this free online tool'
      />
      <Hero
        title='Online <span class="text-primary">QR Code generator</span>'
        subtitle='Generate QR codes online for your text or URL with this free online tool'
      />
      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='code-editor-layout-dual'>
            <div className=''>
              <h3>QR Code Settings</h3>
              <div className='mb-3'>
                <label htmlFor='text'>Text or URL</label>
                <input
                  type='text'
                  id='value'
                  className='form-control border-secondary'
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='size'>Size (px)</label>
                <input
                  type='number'
                  id='size'
                  className='form-control border-secondary'
                  value={size}
                  onChange={(event) => {
                    setSize(Number(event.target.value));
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='bgColor'>Background color</label>
                <input
                  type='color'
                  id='bgColor'
                  className='form-control form-control-color border-secondary'
                  value={bgColor}
                  onChange={(event) => {
                    setBgColor(event.target.value);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='fgColor'>Foreground color</label>
                <input
                  type='color'
                  id='fgColor'
                  className='form-control form-control-color border-secondary'
                  value={fgColor}
                  onChange={(event) => {
                    setFgColor(event.target.value);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='marginSize'>Margin size (level)</label>
                <input
                  type='number'
                  id='marginSize'
                  className='form-control border-secondary'
                  value={marginSize}
                  onChange={(event) => {
                    setMarginSize(Number(event.target.value));
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='errorCorrectionLevel'>
                  Error correction level
                </label>
                <select
                  id='errorCorrectionLevel'
                  className='form-control border-secondary'
                  value={errorCorrectionLevel}
                  onChange={(event) => {
                    setErrorCorrectionLevel(event.target.value);
                  }}
                >
                  <option value='L'>Low (7%)</option>
                  <option value='M'>Medium (15%)</option>
                  <option value='Q'>Quartile (25%)</option>
                  <option value='H'>High (30%)</option>
                </select>
              </div>
              <h3>Embedded Image settings</h3>
              <div className='mb-3'>
                <label htmlFor='embeddedImageSrc'>Embedded image URL</label>
                <input
                  type='text'
                  id='embeddedImageSrc'
                  className='form-control border-secondary'
                  value={embeddedImageSrc || ''}
                  onChange={(event) => {
                    setEmbeddedImageSrc(event.target.value);
                  }}
                />
              </div>
              <div className='mb-3 form-check'>
                <input
                  type='checkbox'
                  id='embeddedImageExcavate'
                  className='form-check-input'
                  checked={embeddedImageExcavate}
                  onChange={(event) => {
                    setEmbeddedImageExcavate(event.target.checked);
                  }}
                />
                <label
                  htmlFor='embeddedImageExcavate'
                  className='form-check-label'
                >
                  Remove code pixels under the embedded image
                </label>
              </div>
              <div className='mb-3'>
                <label htmlFor='embeddedImageWidth'>Embedded image width</label>
                <input
                  type='number'
                  id='embeddedImageWidth'
                  className='form-control border-secondary'
                  step={1}
                  value={embeddedImageWidth}
                  onChange={(event) => {
                    setEmbeddedImageWidth(Number(event.target.value));
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='embeddedImageHeight'>
                  Embedded image height
                </label>
                <input
                  type='number'
                  id='embeddedImageHeight'
                  className='form-control border-secondary'
                  step={1}
                  value={embeddedImageHeight}
                  onChange={(event) => {
                    setEmbeddedImageHeight(Number(event.target.value));
                  }}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='embeddedImageOpacity'>
                  Embedded image opacity
                </label>
                <input
                  type='number'
                  id='embeddedImageOpacity'
                  className='form-control border-secondary'
                  step={0.1}
                  min={0}
                  max={1}
                  value={embeddedImageOpacity}
                  onChange={(event) => {
                    setEmbeddedImageOpacity(Number(event.target.value));
                  }}
                />
              </div>
            </div>

            <div className='code-editor-sync mx-6 fs-1 text-gray-600 text-center'>
              <i className='icon-arrow_forward'></i>
            </div>

            <div className='d-flex'>
              <div className='flex-grow-1'>
                <h3>QRCode</h3>

                <QRCodeCanvas
                  className='w-100 h-auto'
                  title='QR Code'
                  value={value}
                  size={size}
                  marginSize={marginSize}
                  bgColor={bgColor}
                  fgColor={fgColor}
                  level={errorCorrectionLevel}
                  imageSettings={
                    embeddedImageSrc
                      ? {
                          src: embeddedImageSrc,
                          height: embeddedImageHeight,
                          width: embeddedImageWidth,
                          excavate: embeddedImageExcavate,
                          opacity: embeddedImageOpacity
                        }
                      : undefined
                  }
                />
                <p className='text-center text-gray-700'>
                  Right-click → Save Image As... to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <ToolsCta />
        </div>
      </section>

      <section className='pb-5 pb-lg-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='mt-6 fw-medium'>About this tool</h3>
              <p>
                This tool allows you to{' '}
                <strong>generate QR codes for any text or URL</strong>
                quickly and easily. Simply enter your text or URL, customize the
                design options, and download your QR code image.
              </p>
              <p>
                Whether you're creating QR codes for marketing materials, event
                tickets, or personal use, this tool makes it simple and
                efficient.
              </p>
              <p>
                This tool was built using the{' '}
                <Link href='https://www.npmjs.com/package/qrcode.react'>
                  qrcode.react
                </Link>{' '}
                library. <strong>No information is sent to any server</strong>,
                and all processing is done in your browser.
              </p>
              <h3 className='mt-6 fw-medium'>About QR codes</h3>
              <p>
                QR codes (Quick Response codes) are{' '}
                <strong>two-dimensional barcodes</strong>
                that can store a variety of information, including URLs, text,
                and contact details. They can be scanned using smartphones and
                other devices equipped with cameras.
              </p>
              <p>
                QR codes are widely used for various purposes, such as linking
                to websites, sharing contact information, and providing quick
                access to digital content. They are particularly useful in
                marketing, event management, and product packaging.
              </p>
              <p>
                The <strong>QR code can be customized</strong> with different
                colors, logos, and designs to match your branding or personal
                style.
              </p>
              <p>
                <strong>QR codes include error correction capabilities</strong>,
                allowing them to be scanned even if they are partially damaged
                or obscured. The level of error correction can be adjusted based
                on your needs, with options ranging from low to high.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QRCodeGenerator;
