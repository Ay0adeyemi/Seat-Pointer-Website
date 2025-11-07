import reactLogo from "./images/Broadway.jpg"
function Hero() {
    return (
        <div>
        <section className=" text-white bg-linear-to-br from-slate-900 to-teal-800  h-screen w-full font-display" >
           <div className="relative overflow-hidden w-full h-full p-4 ">
               <div className="absolute inset-0 opacity-20 object-cover" style={{backgroundImage: `url(${reactLogo})`}}>
               </div>
               <div className="absolute inset-0 bg-black opacity-20"></div>
               <div className="relative z-10">
                  <div>
        <div className="  p-2 sm:p-15 md:p-12 flex flex-col justify-center items-center text-center space-y-5 w-auto font-inter">
                <h1 className="text-white text-3xl font-bold mt-30 sm:text-4xl md:text-6xl sm:mt-20 md:mt-40 lg:mt-25">Your <span className="text-amber-300 tracking-tight">Broadway</span> Adventure Starts Here</h1>
                <h2 className="text-white text-xl  sm:text-4xl md:text-4xl font-light mb-7">Explore dazzling performances, book the best seats and enjoy the shows that light up New York City.</h2>
                <div className="flex w-auto rounded bg-white">
                    <input type="search" placeholder="Search for Show..."id="search" name="search" className="w-full border-none bg-transparent px-4 py-1 text-black outline-none focus:outline-none"></input>
                    <button className="m-2 rounded bg-linear-to-r from-amber-300 to-red-500  px-4 py-2 text-white">Search</button>
                </div>
            </div>
       </div>
               </div>
           </div>
       </section>
       </div>
    )
}


export default Hero