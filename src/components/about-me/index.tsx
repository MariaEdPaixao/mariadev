"use client"

import Title from "../Title";
import Description from "./description";

export default function AboutMe(){
    return(
        <section className="flex flex-col gap-2.5" id="sobre-mim">
            <Title title="Sobre mim"/>
            <Description/>
            {/* <CardLinguages title="Frontend"/> */}
        </section>
    )
}