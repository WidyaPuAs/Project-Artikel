import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react"; // Ganti "nama-pustaka-anda" dengan nama pustaka UI yang Anda gunakan

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./assets/fotopemandangan.jpg",
    "./assets/berita2.jpg",
    "./assets/fotopemandangan.jpg",
    "./assets/berita3.jpg",
    "./assets/fotopemandangan.jpg",
  ];

  const captions = [
    {
      title:
        "Puan Respons Belanda Akui Hari Kemerdekaan RI: Seharusnya di Masa Lalu",
      time: "Jumat, 16 Jun 2023 15:30 WIB",
    },
    {
      title:
        "Debat Publik Pilpres 2024: Calon Presiden dan Isu Strategis yang Dibahas",
      time: "Jumat, 16 Jun 2023 15:30 WIB",
    },
    {
      title:
        "Pura-pura Mau Beli Mobil, Dua Pria Perkosa dan Curi Barang SPG di Bekasi",
      time: "Jumat, 16 Jun 2023 15:30 WIB",
    },
    {
      title:
        "Pemilu Tetap Coblos Caleg, Rocky Gerung: Pasti Megawati Ngamuk ke Jokowi",
      time: "Jumat, 16 Jun 2023 15:30 WIB",
    },
    {
      title:
        "CEK FAKTA: Benarkah Puan Maharani Ajukan Diri Jadi Cawapres Anies Baswedan karena Tidak Ditunjuk PDIP Sebagai Capres?",
      time: "Jumat, 16 Jun 2023 15:30 WIB",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-[42rem] overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            {/* Lapisan teks */}
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 md:w-2/4">
                <Typography
                  variant="h6"
                  color="white"
                  className="mb-1 text-5xl  md:text-4xl lg:text-5xl"
                >
                  {captions[index].title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-7 opacity-80"
                >
                  {captions[index].time}
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    Baca
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() =>
          setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
          )
        }
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
        }
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
