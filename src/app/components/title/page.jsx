"use client"
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faTwitter,
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {playfair_Display, league_Spartan} from "../../fonts/font"

export default function Title() {
  return (
    <div className={playfair_Display.className}>
      <div className={style.bannerr}>
        <img
          className={style.imagem}
          src="/banner.gif"
          alt="Banner de fundo"
        />
      </div>
      <div className={style.titlebox}>
        <div className={style.wrapper}>
          <div className={style.box}>
            <h2 className={style.title}>Olá, sou o Antonio Wilson👋</h2>
            <h3 className={style.subtitle}>Desenvolvedor Front-End</h3>
            <div className={style.socialIcons}>
              <a
                href="https://www.instagram.com/wiljnr_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className={style.icon} />
              </a>
              <a
                href="https://discord.com/users/wiljnr_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} className={style.icon} />
              </a>
              <a
                href="https://twitter.com/wiljnr_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className={style.icon} />
              </a>
              <a
                href="https://wa.me/86995681609"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className={style.icon} />
              </a>
              <a
                href="https://github.com/wiljnr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className={style.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/wiljnrr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
