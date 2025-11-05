import { Star } from 'lucide-react';
function Cards2(props) {
    
    return(
        <div className="flex  items-center justify-center">
<div className="w-60 p-2 bg-gray-200 dark:bg-slate-800 rounded overflow-hidden shadow-xl">
   <img src={props.image} alt="show-image" className="w-full h-40 sm:h-60 object-fill pb-2"/>
   <p className="text-xl font-bold text-red-500 pb-1">{props.title}</p>
   <div className="flex justify-between pb-5"> 
   <p className="text-md text-amber-500">{props.price}</p>
   <p className="text-md flex gap-x-1 font-bold"><Star color='red' size={23}/>{props.rating}</p>
</div>
</div>
</div>
    )
}
export default Cards2