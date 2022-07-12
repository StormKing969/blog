import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

function Post() {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/blogPostImg/fluency.jpg"}
              width={600}
              height={400}
              alt="Trending Post Image"
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col py-4">
        <div className="category">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">Education</a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600"> - July 3, 2016</a>
          </Link>
        </div>

        <div className="title">
          <Link href={"/"}>
            <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
              Fluency
            </a>
          </Link>
        </div>

        <p className="text-gray-900 py-3">
          What do it mean to be fluent in a language? Over the years, the
          language that we speak evolves and adapts to what the masses
        </p>

        <Author></Author>
      </div>
    </div>
  );
}

export const popular = () => {
  return (
    <section className="container mx-auto md:px-10 py-16">
      <h1 className="font-bold text-xl py-12 text-center">Most Popular</h1>

      {/* Swiper */}
      <Swiper slidesPerView={2}>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default popular;
