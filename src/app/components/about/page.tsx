"use client"
import React, { forwardRef } from "react";
import "./style.css";

interface AboutProps {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <section ref={ref} id="about" className="banner">
      <section className="about-section">
        <div className="box-description">
          <div className="sobre">
            <p className="main-title">| Sobre</p>
            <p className="main-description">
              Sou graduando em Análise e Desenvolvimento de Sistemas, com
              previsão de conclusão em 2024.2 na Universidade Maurício de
              Nassau (Uninassau). Atualmente estou atuando na área de Front-End,
              mas pretendo me especializar na área de Cibersegurança.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="box-identity">
          <div className="box-data">
            <p>
              <i className="fa-solid fa-address-book"></i> Nome: Antonio
              Wilson
            </p>
          </div>
          <div className="box-data">
            <p>
              <i className="fa-solid fa-calendar-days"></i> Idade: 21 anos
            </p>
          </div>
          <div className="box-data">
            <p>
              <i className="fa-solid fa-user-graduate"></i> Formação: ADS |
              Abril 2023 - Dezembro 2024
            </p>
          </div>
          <div className="box-data">
            <p>
              <i className="fa-solid fa-briefcase"></i> Experiência: 2 anos
            </p>
          </div>
        </div>
      </section>
    </section>
  );
});

export default About;
