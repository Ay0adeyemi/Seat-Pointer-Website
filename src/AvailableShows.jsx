

const shows = [
  {
    id: 1,
    title: "Hamilton",
    theater: "Richard Rodgers Theatre",
    date: "Now Playing",
    image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2aF62iV_-TOsPOMQADHOYS-B_y0pvMBVImKWn1wHE0SL85eDp',
    price: "$129",
  },
  {
    id: 2,
    title: "Wicked",
    theater: "Minskoff Theatre",
    date: "Nov 15 – Dec 31, 2025",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRP7WKUV6DLPu5cXo-LDZJWGZOT_Ev5yQ13HZzT9XD00tZgvUuq",
    price: "$99",
  },
  {
    id: 3,
    title: "Back to the Future",
    theater: "Gershwin Theatre",
    date: "Ongoing Performances",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e2/BackToTheFutureMusicalPoster.jpg",
    price: "$115",
  },
  {
    id: 4,
    title: "Moulin Rouge! The Musical",
    theater: "Al Hirschfeld Theatre",
    date: "Dec 5 – Jan 28, 2026",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Moulin_Rouge_the_Musical_poster_blue.jpg",
    price: "$110",
  },
];

const AvailableShows = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-500 dark:text-gray-100">
          Ending Soon
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {shows.map((show) => (
            <div
              key={show.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={show.image}
                alt={show.title}
                className="h-65 w-full"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-red-500 dark:text-gray-100 mb-1">
                  {show.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  📍 {show.theater}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  🗓️ {show.date}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-red-500 dark:text-amber-300">
                    {show.price}
                  </span>
                  <button className="bg-red-500 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
                    Book Tickets
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

export default AvailableShows;
