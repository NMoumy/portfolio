"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContainerProject from "./ContainerProject";
import projectData from "@/lib/data/projectData.json";

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex flex-col">
      <h2 className="section-title text-center mb-4">
        Un aperçu de <span className="text-accent">mes projets</span>
      </h2>

      <div className="flex flex-grow justify-center items-center relative">
        <div className="w-full max-w-[1400px] px-12">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="swiper-container"
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index} className="pb-12">
                <ContainerProject project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
