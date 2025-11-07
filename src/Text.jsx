import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Text(){
    const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    return (
<div className=" bg-white pt-20 pb-10 dark:bg-slate-900 h-full font-inter">
    <h1 className="font-bold text-4xl text-red-500  pb-5 flex justify-center items-center tracking-tight">Buyer's Guarantee</h1>

        <Carousel responsive={responsive} showDots={false} swipeable={true} infinite={true} autoPlay={true} autoPlaySpeed={3000} removeArrowOnDeviceType={["desktop", "mobile"]} className='pt-5'>
            <div className='font-bold w-80 sm:w-120 p-2 bg-gray-100 dark:bg-slate-800 rounded shadow-xl h-full m-auto'>
         <h1 className='text-black dark:text-amber-300'>At Seatpointer, we guarantee the authenticity and validity of all tickets purchased through our platform. Your ticket purchase is protected by secure transactions.</h1>
         </div>
         <div className='font-bold w-80 sm:w-120 p-2 bg-gray-100 dark:bg-slate-800 rounded shadow-xl h-full m-auto'>
         <h1 className='text-black dark:text-amber-300'>Our dedicated customer support team is available to assist you before, during, and after your event. In the rare event of a canceled or rescheduled event, we offer options for ticket refunds or exchanges, ensuring your satisfaction and peace of mind.</h1>
         </div>
         <div className='font-bold w-80 sm:w-120 p-2 bg-gray-100 dark:bg-slate-800 rounded shadow-xl h-full m-auto'>
         <h1 className='text-black dark:text-amber-300'>At Seatpointer, we guarantee the authenticity and validity of all tickets purchased through our platform. Your ticket purchase is protected by secure transactions.</h1>
         </div>
         <div className='font-bold w-80 sm:w-120 p-2 bg-gray-100 dark:bg-slate-800 rounded shadow-xl h-full m-auto'>
         <h1 className='text-black dark:text-amber-300'>Our dedicated customer support team is available to assist you before, during, and after your event. In the rare event of a canceled or rescheduled event, we offer options for ticket refunds or exchanges, ensuring your satisfaction and peace of mind.</h1>
         </div>
       </Carousel>
</div>
    )
}

export default Text