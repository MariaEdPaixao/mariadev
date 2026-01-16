"use client"

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { iconMap } from "./iconMap";
import { AreasProps } from "../aboutTypes";

export default function CardLinguages({ title, items }: AreasProps) {
  const { temaEscuro } = useTheme();

  const icon =
    iconMap[title][temaEscuro ? "dark" : "light"];

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col gap-2.5 justify-center items-center">
        <Image src={icon} alt={`Ícone de ${title}`} width={50} />
        <p className={`text-[22px] ${temaEscuro ? "text-white" : "text-[#484A4E]"} `}>{title === "BancoDeDados" ? "Banco de dados" : title}</p>
        <div className="bg-[#244070] w-[235px] h-[3px]"></div>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`
          flex items-center gap-2
          text-sm
          ${temaEscuro ? "text-white" : "text-[#484A4E]"}
        `}
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
