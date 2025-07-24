'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import logo from "../app/img/logo.svg"

export default function NavBar() {
  const [temaEscuro, setTemaEscuro] = useState(false)

  useEffect(() => {
    if (temaEscuro) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [temaEscuro])

  const alternarTema = () => setTemaEscuro(!temaEscuro)

  return (
    <nav className="bg-gradient-to-r from-black to-[#335BA0] p-5 pl-8 pr-8 flex justify-between items-center font-medium  text-[15px] shadow-xl">
      <Image src={logo} alt="Logo do portifólio" />
      <ul className="text-white flex gap-16">
        <li>SOBRE MIM</li>
        <li>SKILLS</li>
        <li>PROJETOS</li>
      </ul>

    <div className="flex items-center text-white gap-2">
      <div
        onClick={alternarTema}
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer
          ${temaEscuro ? 'bg-gray-600' : 'bg-gray-400'}
          transition-colors duration-300`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform
            ${temaEscuro ? 'translate-x-6' : 'translate-x-0'}
            transition-transform duration-300`}
        />
      </div>
    <p>{temaEscuro?"Escuro" : "Claro"}</p>

    </div>
    </nav>
  )
}
