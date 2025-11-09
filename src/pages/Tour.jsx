import tourDates from '../utils/tourDates';
import TourCard from '../components/TourCard';

function Tour() {
  return (
    <div className='bg-black mx-20 rounded-xl p-10 '>
      <div className='flex justify-center items-center uppercase text-5xl mt-20'>
        <h2>Deadbeat tour</h2>
      </div>
      <div className='grid grid-cols-1 gap-10 rounded-xl bg-[#1F1F1F] mx-100 p-4 overflow-y-auto h-[435px] mt-20 uppercase '>
        {tourDates.map((tourDate) => (
          <TourCard key={tourDate.id} {...tourDate} />
        ))}
      </div>
    </div>
  );
}

export default Tour;
