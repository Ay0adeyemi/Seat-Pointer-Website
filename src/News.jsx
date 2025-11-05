import React, { useEffect, useState } from "react";

const messages = [
  "🎭 New Broadway shows just added — grab your tickets today!",
  "💥 Limited seats remaining for *Hamilton*!",
  "⭐ Exclusive discounts on *The Lion King* tickets this weekend!",
  "🕒 Don't miss *Wicked* — performances selling out fast!",
];

const News = () => {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-linear-to-r from-amber-300 to-red-500 dark:from-pink-700 dark:to-purple-800 text-white py-2 overflow-hidden shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <span className="font-semibold uppercase tracking-wider mr-3">
          Newsflash:
        </span>
        <div
          className="transition-all duration-700 ease-in-out"
          key={current}
        >
          <p className="text-sm sm:text-base animate-slide">
            {messages[current]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;