import React from "react";
import NavBar from "../components/NavBar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import EnfantInternet from "../assets/Enfant_Internet.mp3";

const About = () => {
  function playAudio() {
    document.getElementById("audiomp3").play();
  }

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-col p-8 flex-grow">
        <div>
          <div className="text-4xl font-bold text-white pt-5">
            MICHAEL PHILIBERT
          </div>
          <div className="text-xl text-white pb-5">
            RÉALISATEUR / DA / CADREUR / MONTEUR / VIDÉASTE FREELANCE
          </div>
          <div className="text-xl text-white pb-8">
            <span className="text-[#00FF00] text-2xl pr-3 font-extrabold">
              ●
            </span>
            DISPONIBLE POUR TOUS PROJETS
          </div>
          <div className="text-xl text-white pb-1 font-semibold">Contact</div>
          <div className="text-lg text-white font-thin">
            <MailOutlineIcon /> contact@mikhaprod.com
          </div>
          <div className="text-lg text-white pb-5 font-thin">
            <InstagramIcon /> mikha_dlm
          </div>
          <div className="text-xl text-white font-semibold inline">
            Enfant d'internet{" "}
            <span className="text-xs">
              (expression){" "}
              <VolumeUpOutlinedIcon
                onClick={playAudio}
                className="cursor-pointer mb-2"
              />
            </span>
          </div>
          <audio id="audiomp3" src={EnfantInternet} type="audio/mp3"></audio>
          <div className="text-lg text-white pb-5 font-thin  lg:w-1/2">
            Personne ayant été exposée assez jeune à Internet et ayant développé
            une grande partie de ses compétences grâce à des outils numériques.
          </div>
          <div className="text-xl text-white pb-1 font-semibold">
            Mon parcours
          </div>
          <div className="text-lg text-white pb-5 font-thin lg:w-1/2">
            Passionné par la culture Hip-Hop, j'ai lancé en 2019 le projet DLM -
            DEEP IN CULTURE, un média Rap basé sur Rennes. De là, j'ai commencé
            à filmer des concerts, des festivals, des clips mais j'i surtout
            découvert une nouvelle passion. Je me suis formé de projet en
            projet, cherchant à m'améliorer constamment grâce à Internet et dans
            le cadre de mes études.
          </div>
          <div className="text-xl text-white pb-1 font-semibold">Diplômes</div>
          <div className="text-lg text-white pb-5 font-thin pl-5">
            <li className="lg:w-1/2">
              Détenteur d'une{" "}
              <b>Licence Arts du spectacle - Etudes cinématographiques</b>
            </li>
            <li className="lg:w-1/2">
              Détenteur d'une{" "}
              <b>
                Licence Professionnelle Techniques et Activités de l'Image et du
                Son, Convergence Internet Audiovisuel Numérique Arts du
                spectacle
              </b>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
