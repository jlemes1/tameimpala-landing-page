function TourCard({ city, date, venue, ticket }) {
  return (
    <div className='grid grid-cols-3 justify-center items-center '>
      <div>{date}</div>
      <div>
        <div>{city}</div>
        <div>{venue}</div>
      </div>
      <div className='flex justify-center items-center'>
        <a href={ticket} target='_blank'>
          <span className='bg-green-400 p-2 rounded-md'>Tickets</span>
        </a>
      </div>
    </div>
  );
}

export default TourCard;
