"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContainerProject from "./ContainerProject";
import projectData from "@/lib/data/projectData.json";

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary h-screen flex flex-col">
      <h2 className="section-title text-center mb-4">
        Un aperçu de <span className="text-accent">mes projets</span>
      </h2>

      <div className="flex flex-grow justify-center items-center relative">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-11/12"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <ContainerProject project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Controls */}
        <div className="flex items-center justify-center mt-6 gap-6">
          <div className="swiper-button-prev cursor-pointer text-3xl text-white"></div>
          <div className="swiper-pagination flex gap-2 w-full h-8" />
          <div className="swiper-button-next cursor-pointer text-3xl text-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
