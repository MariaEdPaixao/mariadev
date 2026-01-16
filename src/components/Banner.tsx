"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Typewriter } from "react-simple-typewriter"
import ButtonIcon from "./ButtonIcon"
import Image from "next/image"

import photo from "@/app/img/photo.png"
import { useTheme } from "@/context/ThemeContext"
import { IoChevronDownOutline } from "react-icons/io5"

export default function Banner() {
    const { temaEscuro } = useTheme();

    return (
        <section className={`flex flex-col w-full min-h-screen items-center justify-center ${temaEscuro === true ? "bg-[#131313]" : "bg-[#F7F7F7]"} mt-6`}>
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

                <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
                    <h2 className="text-[#244070] font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
                        Maria Eduarda Paixão
                    </h2>

                    <p className="text-lg sm:text-xl md:text-2xl font-normal">
                        Desenvolvedora de software{" "}
                        <span className="relative inline-block font-semibold text-[#244070]">
                            <span className="border-b-4 border-[#244070] pb-0.5">
                                <Typewriter
                                    words={["Full Stack"]}
                                    loop={false}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </span>
                    </p>

                    <hr className="border-[#244070] w-24 self-center md:self-start" />

                    <div className="flex gap-3 justify-center md:justify-start">
                        <ButtonIcon
                            title="Github"
                            icon={<FaGithub />}
                            onClick={() => window.open("https://github.com/MariaEdPaixao", "_blank")}
                        />
                        <ButtonIcon
                            title="Linkedin"
                            icon={<FaLinkedin />}
                            onClick={() => window.open("https://www.linkedin.com/in/maria-eduarda-paixao/", "_blank")}
                        />
                        <ButtonIcon
                            title="E-mail"
                            icon={<MdEmail />}
                            onClick={() => window.open("mailto:mariaeduardaalvesdapaixao0807@gmail.com", "_blank")}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-[#244070] rounded-full flex items-center justify-center shadow-lg">
                        <Image
                            src={photo}
                            alt="Foto de perfil"
                            className="rounded-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div
                onClick={() => {
                    const section = document.getElementById("sobre-mim")
                    section?.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex justify-center items-center bg-[#244070] w-[40px] h-[40px] rounded-full mt-12 cursor-pointer animate-bounce transition duration-300 hover:scale-110"
            >
                <IoChevronDownOutline size={25} color="white" />
            </div>

        </section>
    )
}
