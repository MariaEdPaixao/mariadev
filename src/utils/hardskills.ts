import { Item } from "@/components/about-me/aboutTypes";
import { AiOutlinePython } from "react-icons/ai";
import { BsFiletypeSql } from "react-icons/bs";
import { DiPostgresql } from "react-icons/di";
import { FaGit, FaJava, FaReact } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { IoScanCircleSharp } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiSpring } from "react-icons/si";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";

export const Frontend : Item[] = [
    {
        title: "Typescript",
        icon: TbBrandTypescript
    },
    {
        title: "React",
        icon: FaReact
    },
    {
        title: "Tailwind",
        icon: RiTailwindCssFill
    },
    {
        title: "React Native (Mobile)",
        icon: TbBrandReactNative
    },
    // {
    //     title: "Versionamento de código",
    //     icon: FaGit
    // },
]

export const Backend : Item[] = [
    {
        title: "Java",
        icon: FaJava 
    },
    {
        title: "Python",
        icon: AiOutlinePython
    },
    {
        title: "C#",
        icon: IoScanCircleSharp
    },
    {
        title: "Spring boot",
        icon: SiSpring
    },
    // {
    //     title: "Versionamento de código",
    //     icon: FaGit
    // },
]

export const BancoDeDados : Item[] = [
    {
        title: "SQL (linguagem)",
        icon: BsFiletypeSql 
    },
    {
        title: "Oracle",
        icon: GrOracle
    },
    {
        title: "Postgresql",
        icon: DiPostgresql
    },
    {
        title: "Mongodb",
        icon: SiMongodb
    }
]