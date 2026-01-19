"use client"

import { useTheme } from "@/context/ThemeContext";

interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  const { temaEscuro } = useTheme();

  return (
    <div className="flex flex-col gap-2">
      <h2 className={`text-2xl  md:text-3xl ${temaEscuro? "text-[#6089CE]" : "text-black" } font-bold`}>{props.title}</h2>
      <div className="bg-[#244070] w-20 h-1"></div>
    </div>
  );
}
