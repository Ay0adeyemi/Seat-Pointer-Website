import React, { useState } from "react";

const faqs = [
  {
    question: "How do I purchase tickets?",
    answer:
      "Simply browse available shows, choose your seats, and complete your purchase using our secure checkout process. Your tickets will be delivered electronically.",
  },
  {
    question: "What if my event is canceled or rescheduled?",
    answer:
      "If your event is canceled, you’ll receive a full refund. For rescheduled events, your tickets will automatically be valid for the new date.",
  },
  {
    question: "Can I change or refund my ticket after purchase?",
    answer:
      "Tickets are generally non-refundable once purchased, but you may contact our support team for special cases or assistance.",
  },
  {
    question: "Are the tickets authentic?",
    answer:
      "Yes! All tickets sold through our platform are 100% verified and guaranteed authentic. We partner directly with trusted vendors and theaters.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team 24/7 via live chat, email, or phone. Visit our Contact page for more details.",
  },
];

const CustomerHelp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
          💬 Customer Help & FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 dark:text-gray-100 focus:outline-none"
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerHelp;
