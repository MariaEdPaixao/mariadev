"use client"
import { useTheme } from "@/context/ThemeContext"

export default function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const { temaEscuro, alternarTema } = useTheme()

  return (
    <div className={`flex items-center gap-2 ${mobile ? "mt-8 text-white" : "text-white"}`}>
      <div
        onClick={alternarTema}
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
          ${temaEscuro ? "bg-gray-600" : "bg-gray-400"}`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
            ${temaEscuro ? "translate-x-6" : "translate-x-0"}`}
        />
      </div>
      <p>{temaEscuro ? "Escuro" : "Claro"}</p>
    </div>
  )
}
