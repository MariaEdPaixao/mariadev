import Image from "next/image";
import ImgPensative from "@/assets/pensative.png";

export default function Description() {
  return (
    <section
      className="
        flex flex-col md:flex-row
        items-center
        gap-6 md:gap-10
        px-4 mb-6
      "
    >
      {/* Imagem */}
      <div className="flex-shrink-0">
        <Image
          src={ImgPensative}
          alt="Imagem ilustrativa, menina pensando"
          className="
            w-[180px] md:w-[250px]
            h-auto
          "
          priority
        />
      </div>

      {/* Texto */}
      <p
        className="
          max-w-[1000px]
          text-center md:text-left
          text-sm md:text-base lg:text-lg
          leading-relaxed
        "
      >
        Sou uma entusiasta da tecnologia, dedicada a transformar linhas de código
        em soluções inovadoras. Conto com uma sólida formação em Sistemas para
        Internet e estudos voltados para o desenvolvimento de aplicações web.
        Busco impulsionar o progresso tecnológico, almejando criar impacto
        positivo por meio da programação.
      </p>
    </section>
  );
}
