import { Theater, CircleUserRound, X, Menu, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
function Nav() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");

        }else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    })
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg  font-display tracking-tight shadow-lg dark:bg-slate-900 font-inter">
<div className='container px-4 mx-auto relative text-sm'>
    <div className='flex justify-between items-center'>
        <div className='flex items-center shrink-0'>
           <Theater color='red' size={35} strokeWidth={2.75} />
           <h1 className="font-extrabold text-2xl text-amber-300 tracking-tight ml-2">SeatPointer</h1>
        </div>
         
         <div className='hidden lg:flex space-x-6 font-bold text-lg text-red-500 dark:text-red-200'>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>Broadway</a>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>Off Broadway</a>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>Sporting Events</a>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>Same Day Deals</a>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>About Us</a>
         </div>

         <div className='hidden lg:flex justify-center space-x-3 items-center'>
            <div className='flex items-center shrink-0 space-x-1'>
            <CircleUserRound color='red' size={28} strokeWidth={2.0} />
            <h2 className='font-bold text-sm text-red-500 dark:text-red-200'>My Order</h2>
            </div>
            <a href='#' className=' border-2 bg-linear-to-r from-amber-300 to-red-500 py-2 px-3 rounded-md text-white'>Join for Free</a>
         </div>
         
    <div className='flex space-x-2'>
        <button onClick={toggleDarkMode} className=''>
             {darkMode ? <Sun color='red' size={30}/> : <Moon color='red' size={30}/>}
         </button>
         <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X color='red' size={30}/> : <Menu color='red' size={30}/>}
            </button>
         </div>
         </div>
    </div>
    {mobileDrawerOpen && (
    
        <div className='fixed right-0 z-20 w-full p-9 flex flex-col justify-center items-start lg:hidden font-bold text-xl space-y-8 bg-gray-100 dark:bg-slate-900/90 text-slate-900 dark:text-red-200'>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>Broadway</a>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>Off Broadway</a>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>Sporting Events</a>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>Same Day Deals</a>
            <a className='max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg'>About Us</a>

            <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 place-items-center'>
                 <div className='flex items-center shrink-0 space-x-1'>
            <CircleUserRound color='red' size={28} strokeWidth={2.0} />
            <h2 className='font-bold text-sm text-slate-900 dark:text-red-200'>My Order</h2>
            </div>
             <a href='#' className=' border-2 bg-linear-to-r from-amber-300 to-red-500 py-2 px-3 rounded-md text-white text-sm'>Join for Free</a>
            </div>
        
        </div>
        
        
    )}
</div>
</nav>
    )
}

export default Nav

