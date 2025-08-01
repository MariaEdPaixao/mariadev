'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import logo from "../app/img/logo.svg"
import { FiMenu, FiX } from "react-icons/fi"

export default function NavBar() {
  const [temaEscuro, setTemaEscuro] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)
  const itensMenu = ["SOBRE MIM", "SKILLS", "PROJETOS"]

  useEffect(() => {
    document.documentElement.classList.toggle("dark", temaEscuro)
  }, [temaEscuro])

  const alternarTema = () => setTemaEscuro(!temaEscuro)
  const alternarMenu = () => setMenuAberto(!menuAberto)

  return (
    <nav className="bg-gradient-to-r from-black to-[#335BA0] p-5 px-8 flex justify-between items-center font-medium text-[15px] shadow-xl relative z-50">
      <Image src={logo} alt="Logo do portifólio" className="w-24 cursor-pointer" />

      {/* Botão hambúrguer */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer z-50"
        onClick={alternarMenu}
      >
        {menuAberto ? <FiX /> : <FiMenu />}
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex text-white gap-12">
        {itensMenu.map((item) => (
          <li
            key={item}
            className="cursor-pointer relative group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Toggle Tema - Desktop */}
      <div className="hidden md:flex items-center text-white gap-2">
        <div
          onClick={alternarTema}
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
            ${temaEscuro ? 'bg-gray-600' : 'bg-gray-400'}`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
              ${temaEscuro ? 'translate-x-6' : 'translate-x-0'}`}
          />
        </div>
        <p>{temaEscuro ? "Escuro" : "Claro"}</p>
      </div>

      <div className={`fixed inset-0 bg-gradient-to-r from-black/95 to-[#335BA0]/95 backdrop-blur-md 
  flex flex-col justify-center items-center gap-8 text-white text-2xl transition-transform duration-500
  ${menuAberto ? "translate-x-0" : "translate-x-full"} md:hidden`}>

        {itensMenu.map((item) => (
          <p key={item} className="cursor-pointer hover:scale-110 transition-transform duration-300">{item}</p>
        ))}

        {/* Toggle tema no mobile */}
        <div className="flex items-center text-white gap-2 mt-8">
          <div
            onClick={alternarTema}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
        ${temaEscuro ? 'bg-gray-600' : 'bg-gray-400'}`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
          ${temaEscuro ? 'translate-x-6' : 'translate-x-0'}`}
            />
          </div>
          <p>{temaEscuro ? "Escuro" : "Claro"}</p>
        </div>
      </div>


    </nav>
  )
}
