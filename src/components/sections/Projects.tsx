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
    <section id="projects" className="h-screen flex flex-col px-4">
      <h2 className="section-title text-center mb-4">
        Un aperçu de <span className="text-accent">mes projets</span>
      </h2>

      <div className="flex flex-grow justify-center items-center relative sm:px-4 md:px-10">
        <div className="w-full max-w-[1400px] relative">
          <div className="absolute inset-y-0 -left-4 -right-4 md:-left-10 md:-right-10 flex items-center justify-between pointer-events-none">
            <div className="swiper-button-prev !static !mt-0 pointer-events-auto"></div>
            <div className="swiper-button-next !static !mt-0 pointer-events-auto"></div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
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
            className="pb-12"
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.projectId}>
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
