"use client"
import { useState } from "react"
import Image from "next/image"
import logo from "../app/img/logo.svg"
import { FiMenu, FiX } from "react-icons/fi"
import ThemeToggle from "./ThemeToggle"

export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false)
  const itensMenu = ["SOBRE MIM", "SKILLS", "PROJETOS"]

  const alternarMenu = () => setMenuAberto(!menuAberto)

  return (
    <nav className="bg-gradient-to-r from-black to-[#335BA0] p-5 px-8 flex justify-between items-center font-medium text-[14px] shadow-xl relative z-50 ">
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
          <li key={item} className="cursor-pointer relative group">
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Toggle Tema - Desktop */}
      <div className="hidden md:flex text-[13px]">
        <ThemeToggle />
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-black/95 to-[#335BA0]/95 backdrop-blur-md 
          flex flex-col justify-center items-center gap-8 text-white text-[20px] transition-transform duration-500
          ${menuAberto ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        {itensMenu.map((item) => (
          <p
            key={item}
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            {item}
          </p>
        ))}
        <div className="text-[16px]">
          <ThemeToggle mobile />
        </div>
        {/* Toggle Tema - Mobile */}
      </div>
    </nav>
  )
}
