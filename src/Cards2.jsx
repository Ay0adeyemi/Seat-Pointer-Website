import { Star } from 'lucide-react';
function Cards2(props) {
    
    return(
        <div className="flex  items-center justify-center">
<div className="w-60 p-2 bg-gray-200 dark:bg-slate-800 rounded overflow-hidden shadow-xl font-inter">
    <div className='h-80 w-full overflow-hidden'>
   <img src={props.image} alt="show-image" className="w-full h-full object-cover sm:h-full pb-4"/>
   </div>
   <h3 className="text-lg font-semibold text-red-500">{props.title}</h3>
   <div className="flex justify-between pb-5"> 
   <p className="text-sm text-black tracking-tighter font-semibold">{props.price}</p>
   <p className="text-sm flex gap-x-1 font-semibold text-black"><Star color='red' size={18}/>{props.rating}</p>
</div>
</div>
</div>
    )
}

export default Cards2