import tourDates from '../utils/tourDates';
import TourCard from '../components/TourCard';

function Tour() {
  return (
    <section
      id='tour'
      className='bg-black mx-5 md:mx-20 rounded-xl p-5 md:p-10'
    >
      <div className='flex justify-center items-center uppercase text-3xl md:text-5xl mt-10 md:mt-20'>
        <h2>Deadbeat tour</h2>
      </div>
      <div className='grid grid-cols-1 gap-5 md:gap-10 rounded-xl bg-[#1F1F1F] p-4 overflow-y-auto h-[350px] md:h-[435px] mt-10 md:mt-20 uppercase max-w-4xl mx-auto custom-scrollbar'>
        {tourDates.map((tourDate) => (
          <TourCard key={tourDate.id} {...tourDate} />
        ))}
      </div>
    </section>
  );
}

export default Tour;
