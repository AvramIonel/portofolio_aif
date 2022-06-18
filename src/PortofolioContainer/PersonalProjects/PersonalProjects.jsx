import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../../data"; // We get the projects from data.js file in src
import Project from "../Projects/Project";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./personalProjects.css";

// import required modules
import { Pagination } from "swiper";

const PersonalProjects = () => {
  return (
    <div className="pp">
      <div className="pp-title">Projects</div>
      <div className="pp-project">
        <>
          <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              306: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {projects.map((item) => (
              <SwiperSlide>
                <Project
                  key={item.id}
                  name={item.name}
                  img={item.img}
                  link={item.link}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default PersonalProjects;
