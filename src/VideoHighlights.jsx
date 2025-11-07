import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const videos = [
  {
    id: 1,
    title: "Hamilton Official Trailer",
    url: "https://www.youtube.com/embed/DSCKfXpAGHc",
  },
  {
    id: 2,
    title: "Wicked Official Trailer",
    url: "https://www.youtube.com/embed/PLQsJFMpENg?si=TQiDy2v75YMTafSt",
  },
  {
    id: 3,
    title: "Lion King Official Trailer",
    url: "https://www.youtube.com/embed/pluUQ6qXGEQ?si=R85vu5PFklhm1XZT",
  },
  {
    id: 4,
    title: "Just in Time now on Broadway",
    url: "https://www.youtube.com/embed/AfUtNgzeo-A?si=tzDhRpK96HEey1eo",
  },
  {
    id: 5,
    title: "Sneak Preview of Back to the Future",
    url: "https://www.youtube.com/embed/XRey9DiUZJE?si=F03-raw2CxGptPiT",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const VideoCarousel = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6 font-inter">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          🎥 Broadway Video Highlights
        </h2>

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          transitionDuration={800}
          arrows
          showDots={false}
          containerClass="pb-6"
          itemClass="px-3"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default VideoCarousel;
