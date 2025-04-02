import React from "react";
import Logo from "../../assets/Logo.png";
import { useState } from "react";

const nadvarLinks = [
  {
    id: 1,
    title: "Incio",
    Link: "/",
  },
  {
    id: 2,
    title: "Nosotros",
    Link: "#",
  },
  {
    id: 3,
    title: "Contacto",
    Link: "#",
  },
  {
    id: 4,
    title: "Soporte",
    Link: "#",
  },
];

const nadvarRedes = [
  {
    id: 1,
    title: "Instagram",
    Link: "https://www.instagram.com/",
    icon: "bi bi-instagram",
  },
  {
    id: 2,
    title: "Facebok",
    Link: "https://www.tiktok.com/",
    icon: "bi bi-tiktok",
  },
];

const Nadvar = () => {
  const [isOpen, setIsopen] = useState(false);
  const toogleMenu = () => {
    setIsopen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 bg-purple-900 w-full bg-opacity-30 backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py:6 px-4 py-3">
        {/*Logo denadvar*/}
        <div>
          <img src={Logo} alt="Logo del sitio" className="w-[100px]" />
        </div>
        {/*Boton hamburguesa*/}
        <button onClick={toogleMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/*navegacion desktop*/}
        <div className="hidden md:block">
          <ul className="flex space-x-4 sm:space-x-8">
            {nadvarLinks.map((Link) => (
              <li key={Link.id}>
                <a
                  className="text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110
                ttransform inline-block duration-300"
                  href={Link.Link}
                >
                  {Link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*navegacion redes desktop*/}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {nadvarRedes.map((Link) => (
              <li key={Link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-block transition-transform duration-300 transform hover:scale-125"
                  href={Link.Link}
                >
                  <i
                    className={`${Link.icon} sm:text-lg text-white hover:text-sky-200 transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*menu movil*/}
      <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className="flex flex-col px-4 py-2">
          {nadvarLinks.map((Link) => (
            <li key={Link.id} className="py-2 text-center">
              <a className="text-white hover:text-sky-200" href={Link.Link} onClick={()=>setIsopen(false)}>
                {Link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-4 px-4 py-2 border-t border-purple-800 justify-center">
            {nadvarRedes.map((Link) => (
              <li key={Link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                  href={Link.Link}
                  onClick={()=>setIsopen(false)}
                >
                  <i
                    className={`${Link.icon} text-lg text-white hover:text-sky-200`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
      </div>
    </nav>
  );
};

export default Nadvar;
