

const endingSoonShows = [
  {
    id: 1,
    title: "Back to the Future",
    theater: "Ambassador Theatre",
    date: "Ends Nov 10, 2025",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/BackToTheFutureMusicalPoster.jpg",
    price: "$85",
  },
  {
    id: 2,
    title: "Moulin Rouge! The Musical",
    theater: "Al Hirschfeld Theatre",
    date: "Ends Nov 18, 2025",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Moulin_Rouge_the_Musical_poster_blue.jpg",
    price: "$110",
  },
  {
    id: 3,
    title: "Wicked",
    theater: "Brooks Atkinson Theatre",
    date: "Ends Nov 21, 2025",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRP7WKUV6DLPu5cXo-LDZJWGZOT_Ev5yQ13HZzT9XD00tZgvUuq",
    price: "$99",
  },
];

const EndingSoon = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          🎟️ Ending Soon
        </h2>

        
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-stretch">
          {endingSoonShows.map((show) => (
            <div
              key={show.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center overflow-hidden w-full md:w-1/3"
            >
              
              <div className="w-full md:w-1/2 h-40 md:h-auto overflow-hidden">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              
              <div className="p-4 flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {show.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  📍 {show.theater}
                </p>
                <p className="text-sm text-red-500 dark:text-pink-400 font-medium mb-2">
                  ⏰ {show.date}
                </p>
                <div className="flex justify-center md:justify-start items-center gap-3 mt-2">
                  <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                    {show.price}
                  </span>
                  <button className="bg-red-500 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded-md transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndingSoon;
