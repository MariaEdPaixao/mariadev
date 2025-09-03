"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface ThemeContextType {
  temaEscuro: boolean
  alternarTema: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [temaEscuro, setTemaEscuro] = useState(false)

  useEffect(() => {
    const temaSalvo = localStorage.getItem("temaEscuro")
    if (temaSalvo === "true") {
      setTemaEscuro(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", temaEscuro)
    localStorage.setItem("temaEscuro", String(temaEscuro))
  }, [temaEscuro])

  const alternarTema = () => setTemaEscuro(!temaEscuro)

  return (
    <ThemeContext.Provider value={{ temaEscuro, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider")
  }
  return context
}
