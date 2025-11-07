

const newsPosts = [
  {
    id: 1,
    title: "The Great Gatsby Cast Announced",
    date: "Dec 16, 2025",
    excerpt:
      "Exciting news! The cast for The Great Gatsby has been revealed. Find out who’s playing Jay Gatsby and Daisy Buchanan.",
    image:
      "https://www.westendtheatre.com/wp-content/uploads/2025/02/The-Great-Gatsby-full-cast.jpg",
  },
  {
    id: 2,
    title: "Frozen Musical Extends Run",
    date: "Mar 15, 2026",
    excerpt:
      "Due to popular demand, Frozen the Musical will extend its run through Summer 2026. Tickets are selling fast!",
    image:
      "https://e3.365dm.com/19/03/2048x1152/skynews-frozen-musical-london_4613300.jpg",
  },
  {
    id: 3,
    title: "Matilda’s New Director Announced",
    date: "Nov 28, 2025",
    excerpt:
      "Matilda welcomes a new director for its upcoming season. Fans are excited about the fresh creative vision.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=600",
  },
  {
    id: 4,
    title: "Broadway Shows Resume After Break",
    date: "Nov 10, 2025",
    excerpt:
      "All major Broadway shows are resuming performances after the short seasonal break. Book your tickets now!",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600",
  },
];

const NewsBlogSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10 text-center">
          📰 Broadway News & Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />

              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {post.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 flex-1 mb-4">
                  {post.excerpt}
                </p>
                <button className="self-start px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md text-sm transition-colors">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlogSection;
