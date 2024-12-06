"use client"
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import React, { forwardRef } from "react";

const Projects = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <div>
      <div className="conserto1" id="projects">
        <section ref={ref} className="conteiner">
          <div className="title1">
            <p className="main-title">| Projetos</p>
            <p className="cardi-subtitle">Confira os meus projetos:</p>
          </div>

          <div className="projetosContainer">
            <div className="projeto">
              <div className="nomeProjeto">
                <p>EconomizaMais</p>
              </div>

              <div className="divider"></div>

              <div className="conteudoProjeto">
                <div className="textProjeto">
                  <p>
                    Projeto de Desenvolvimento Mobile utilizando o Expo e React Native. O aplicativo
                    tem o intuito de procurar os supermercados mais próximos que possuem mais promoções.
                  </p>
                </div>
                <a
                  href="https://github.com/wiljnr/EconomizaMais.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="githubIcon"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
              </div>
            </div>

            <div className="alinhaLinha">
              <div className="linha"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default Projects;
