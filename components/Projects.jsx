"use client";
import React, { useState } from "react";
import Title from "./Shared/Title";
import Lightbox from "./Shared/LightBox";
import ProjectCard from "./Shared/ProjectCard";
import { imagesList, projectList } from "./Utils/projectList";
import CircleBox from "./Shared/CircleBox";

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground">
            Showcasing successful social media campaigns and strategies
          </p>
        </div>
        <div className="container">
          <div
            className={`md:columns-2 col-span-1 xxl:gap-[58px] lg:gap-12 md:gap-[30px] `}
          >
            {projectList.map(({ heading, id, image, subHeading }, index) => (
              <ProjectCard
                key={id}
                image={image}
                heading={heading}
                subHeading={subHeading}
                openLightbox={openLightbox}
                index={index}
                navigate="/protfolio"
              />
            ))}
          </div>

          <div className="mt-[100px] flex justify-center">
            <CircleBox />
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            images={imagesList}
            setLightboxOpen={setLightboxOpen}
            currentId={currentId}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
