function TourCard({ city, date, venue, ticket }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 justify-center items-center text-center md:text-left'>
      <div className='text-sm md:text-base'>{date}</div>
      <div>
        <div className='text-sm md:text-base'>{city}</div>
        <div className='text-xs md:text-sm text-gray-400'>{venue}</div>
      </div>
      <div className='flex justify-center items-center'>
        <a href={ticket} target='_blank' rel='noopener noreferrer'>
          <span className='bg-green-400 p-2 rounded-md text-sm md:text-base'>
            Tickets
          </span>
        </a>
      </div>
    </div>
  );
}

export default TourCard;
