"use client"
import style from "./style.module.css";

export default function Header({ onScroll, aboutRef, xperiencesRef, skillsRef, projectsRef }) {
  return (
    <header className={style.header}>
      <div className="flex items-center justify-center">
        <img src="/logo.png" alt="logo" height="30" width="30" />
        <span className={style.logoText}>
          <span className={style.user}>wiljnr_</span>
        </span>
      </div>
      <nav className="flex-row flex h-full items-center gap-7">
        <a
          href="#"
          onClick={() => onScroll(aboutRef)}
          className={style.btnSobre}
        >
          Sobre
        </a>
        <a
          href="#"
          onClick={() => onScroll(xperiencesRef)}
          className={style.btnSobre}
        >
          Experiências
        </a>
        <a
          href="#"
          onClick={() => onScroll(skillsRef)}
          className={style.btnSobre}
        >
          Skills
        </a>
        <a
          href="#"
          onClick={() => onScroll(projectsRef)}
          className={style.btnSobre}
        >
          Projetos
        </a>
        <a
          href="https://drive.google.com/file/d/1weAtBOLjRySiLnHAQ77SRQgY0yq9I2Zf/view"
          target="_blank"
          className={style.btnDownloadCV}
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
