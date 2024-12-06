"use client"
import "./style.css";
import React, { forwardRef } from "react";

const Xperiences = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <div className="conserto" id="experiencia">
      <section ref={ref} className="conteiner">
        <div className="title1">
          <p className="main-title">| Experiências</p>
          <p className="cardi-subtitle">
            Atualmente, meu objetivo é seguir carreira na área de Segurança da
            Informação. No entanto, também tenho experiência em Desenvolvimento
            Web e UX/UI, áreas em que posso atuar caso a oportunidade em
            Segurança não se concretize.
          </p>
        </div>
        <div className="alinha">
          <div className="card">
            <p className="competence">Segurança da Informação</p>
            <p className="description">
              Busco ter experiência sólida na área de segurança da informação,
              com foco em proteger dados sensíveis e garantir a integridade dos
              sistemas.
            </p>
          </div>
          <div className="card">
            <p className="competence">Desenvolvimento Web</p>
            <p className="description">
              Ter experiência na área de desenvolvimento web, criando sites de
              alta performance com o uso de tecnologias front-end.
            </p>
          </div>
          <div className="card">
            <p className="competence">UX/UI Design</p>
            <p className="description">
              Pretendo buscar experiência na área de UX/UI, focando na criação
              de interfaces intuitivas e centradas no usuário.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Xperiences;
