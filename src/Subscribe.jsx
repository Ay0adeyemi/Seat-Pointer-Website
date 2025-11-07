import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 font-inter">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Subscribe for the Latest News & Events 🎟️
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Get exclusive Broadway updates, new show alerts, and special offers straight to your inbox.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-2/3 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="text-green-600 dark:text-green-400 text-lg font-medium">
            ✅ Thanks for subscribing! Stay tuned for exciting Broadway updates.
          </p>
        )}
      </div>
    </section>
  );
};

export default Subscribe;


