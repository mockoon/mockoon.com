import { FunctionComponent } from 'react';

const WadScreen: FunctionComponent = function () {
  return (
    <>
      <style>{`html,body,div#__next{height:100%}`}</style>
      <div
        className='h-100 w-100'
        style={{
          background:
            'linear-gradient(90deg,rgba(44, 76, 98, 1) 0%, rgba(59, 164, 220, 1) 100%)'
        }}
      >
        <div>
          <img
            src='/images/logo-text-sticker.png'
            style={{ width: '25vw', margin: '4vw 0 0 4vw' }}
          />
          <p
            style={{
              marginTop: '3vw',
              marginLeft: '4vw',
              fontSize: '4vw',
              color: '#DDEEF8',
              fontWeight: '700',
              fontFamily: 'Open Sans, sans-serif'
            }}
          >
            Mock APIs instantly. Test smarter.
          </p>
          <p
            style={{
              marginTop: '2vw',
              marginLeft: '4vw',
              fontSize: '3vw',
              color: '#DDEEF8',
              fontWeight: '700',
              fontFamily: 'Open Sans, sans-serif'
            }}
          >
            Meet the founder — Live walkthroughs & Q&A
          </p>
          <p
            style={{
              marginTop: '2vw',
              marginLeft: '4vw',
              fontSize: '2.5vw',
              color: '#DDEEF8',
              fontWeight: '700',
              fontFamily: 'Open Sans, sans-serif'
            }}
          >
            July 10, 08:00 - 18:00<br></br>July 11, 08:00 - 17:00
          </p>
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            display: 'flex',
            justifyContent: 'end',
            width: '100%'
          }}
        >
          <div
            style={{
              marginRight: '4vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'start'
            }}
          >
            <img
              src='/images/wad-conf/wad-book-a-slot.png'
              style={{
                width: '20vw',
                borderRadius: '0.8vw'
              }}
            />
            <p
              style={{
                marginBottom: '1vh',
                fontSize: '2.5vw',
                color: '#DDEEF8',
                fontWeight: '700',
                fontFamily: 'Open Sans, sans-serif'
              }}
            >
              Book a slot
            </p>
          </div>
          <div
            style={{
              marginRight: '4vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'end'
            }}
          >
            <img
              src='/images/wad-conf/wad-contest.png'
              style={{
                width: '20vw',
                borderRadius: '0.8vw'
              }}
            />
            <p
              style={{
                marginBottom: '1vh',
                fontSize: '2.5vw',
                color: '#DDEEF8',
                fontWeight: '700',
                fontFamily: 'Open Sans, sans-serif',
                wordBreak: 'break-word',
                whiteSpace: 'wrap'
              }}
            >
              Win Free Mockoon
              <br />
              Cloud Accounts 🎉
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WadScreen;
