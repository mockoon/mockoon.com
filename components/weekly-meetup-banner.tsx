import Quote from './quote';

const WeeklyMeetupBanner = function () {
  return (
    <Quote>
      💡 Join us on{' '}
      <a href='/discord/' target='_blank'>
        Discord
      </a>{' '}
      every other Wednesday at 4 PM GMT+2 for <strong>Mockoon Meetup</strong>,
      where you can get your <strong>questions answered</strong>,{' '}
      <strong>share insights</strong>, and <strong>connect</strong> with fellow
      Mockoon enthusiasts!{' '}
      <a href='/weekly-meetup-event/'>
        View the event <i className='icon-open'></i>
      </a>
    </Quote>
  );
};

export default WeeklyMeetupBanner;
