import Image from "next/image";

import ImgPensative from "@/assets/pensative.png"

export default function Description(){
    return(
        <div className="flex items-center">
            <Image src={ImgPensative} alt="Imagem ilustrativa, menina pensando" width={250}/>
            <p className="max-w-[1000px]">Sou uma entusiasta da tecnologia, dedicada a transformar linhas de código em soluções inovadoras. Conto com uma sólida formação em Sistemas para Internet e estudos voltados para o desenvolvimento de aplicações web. Busco impulsionar o progresso tecnológico, almejando criar impacto positivo por meio da programação.</p>
        </div>
    )
}