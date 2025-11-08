import { Star } from 'lucide-react';
function Cards(props) {
    
    return(
        <div className="flex  items-center justify-center">
<div className="w-60 p-2 rounded overflow-hidden">
<div className='h-80 w-full overflow-hidden'>
   <img src={props.image} alt="show-image" className="w-full h-full object-cover sm:h-full pb-4 rounded-xl shadow-xl"/>
   </div>
   <h3 className="text-lg font-bold text-red-500  ">{props.title}</h3>
   <div className="flex justify-between pb-5"> 
   <p className="text-sm text-gray-500 tracking-tighter font-bold p-1">{props.price}</p>
   <p className="text-sm flex gap-x-1 font-semibold text-gray-500 bg-amber-200 dark:bg-gray-800 p-1 rounded-xl"><Star color='red' size={18}/>{props.rating}</p>
</div>
</div>
</div>
    )
}
export default Cards