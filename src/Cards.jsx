import { Star } from 'lucide-react';
function Cards(props) {
    
    return(
        <div className="flex  items-center justify-center">
<div className="w-60 p-2 bg-gray-200 dark:bg-slate-800 rounded overflow-hidden shadow-xl">
<div className='h-80 w-full overflow-hidden'>
   <img src={props.image} alt="show-image" className="w-full h-full object-cover sm:h-full pb-4"/>
   </div>
   <p className="text-xl font-bold text-red-500 ">{props.title}</p>
   <div className="flex justify-between pb-5"> 
   <p className="text-md text-amber-500 tracking-tighter font-semibold">{props.price}</p>
   <p className="text-md flex gap-x-1 font-bold text-amber-500"><Star color='red' size={23}/>{props.rating}</p>
</div>
</div>
</div>
    )
}
export default Cards