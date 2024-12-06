"use client"
import "./style.css";
import React, { forwardRef } from "react";

const Skills = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <div className="conserto1" id="Skills">
      <section ref={ref} className="conteiner">
        <div className="title1">
          <p className="main-title">| Skills</p>
          <p className="cardi-subtitle">
            Ao decorrer da formação da minha carreira, tive contato com as
            seguintes tecnologias:
          </p>
        </div>
        <div className="langicons">
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/html-5--v1.png"
              alt="html-5--v1"
            />
            <p className="linguagem">HTML5</p>
          </div>
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/css3.png"
              alt="css3"
            />
            <p className="linguagem">CSS</p>
          </div>
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/javascript--v1.png"
              alt="javascript--v1"
            />
            <p className="linguagem">JavaScript</p>
          </div>
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/react-native.png"
              alt="react-native"
            />
            <p className="linguagem">React</p>
          </div>
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/node-js.png"
              alt="node-js"
            />
            <p className="linguagem">Node</p>
          </div>
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/python--v1.png"
              alt="python--v1"
            />
            <p className="linguagem">Python</p>
          </div>
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/c-programming.png"
              alt="c-programming"
            />
            <p className="linguagem">Linguagem C</p>
          </div>
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/c-plus-plus-logo.png"
              alt="c-plus-plus-logo"
            />
            <span className="linguagem">Linguagem C++</span>
          </div>
          <div className="const">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/my-sql.png"
              alt="my-sql"
            />
            <span className="linguagem">MySQL</span>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Skills;
