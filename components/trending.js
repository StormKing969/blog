import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

function Slide() {
    return (
      <div className="grid md:grid-cols-2">
        <div className="image">
          <Link href={"/"}>
            <a>
              <Image
                src={"/images/blogPostImg/fluency.jpg"}
                width={600}
                height={600}
                alt="Trending Post Image"
              />
            </a>
          </Link>
        </div>
  
        <div className="info flex justify-center flex-col">
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
              <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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

export const trending = () => {

  const bg = {
    // background: "url('/images/banner.png') no-repeat",
    // backgroundPosition: "right"
    backgroundColor: "#E9FFF1",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default trending;
