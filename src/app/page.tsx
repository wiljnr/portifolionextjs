"use client"
import React, { useRef } from "react";
import Header from "./components/header/page";
import Title from "./components/title/page";
import style from "./style.module.css";
import About from "./components/about/page";
import Xperiences from "./components/xperiences/page";
import Skills from "./components/skills/page";
import Projects from "./components/projects/page";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const xperiencesRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`h-full ${style.gradient}`}>
      <Header
        onScroll={handleScroll}
        aboutRef={aboutRef}
        xperiencesRef={xperiencesRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Title />
      <About ref={aboutRef} />
      <Xperiences ref={xperiencesRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}
