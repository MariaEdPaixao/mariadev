import Title from "../Title";
import CardSkill from "./card-skill";

export default function SoftSkills(){
    return(
        <section className="flex flex-col gap-8" id="soft-skills">
            <Title title="Soft Skills"/>
            <CardSkill/>
        </section>
    )
}