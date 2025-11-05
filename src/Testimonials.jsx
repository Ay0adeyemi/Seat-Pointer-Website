import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    photo:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Amazing experience! Booking Broadway tickets was seamless, and the seats were perfect.",
  },
  {
    id: 2,
    name: "Michael Smith",
    photo:
      "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4,
    review:
      "Great service and smooth checkout. Will definitely book through this platform again.",
  },
  {
    id: 3,
    name: "Sophie Lee",
    photo:
      "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "Loved it! Got the best deals and the customer support was very responsive.",
  },
  {
    id: 4,
    name: "James Brown",
    photo:
      "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    review:
      "Easy to navigate and tickets arrived quickly. Highly recommend for Broadway lovers.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          🌟 What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t.name}
              </h3>
              <div className="flex justify-center mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.6 12.545 1 8.91l6.061-.545L10 3l2.939 5.364L19 8.91l-4.6 3.635 1.478 5.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                "{t.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
