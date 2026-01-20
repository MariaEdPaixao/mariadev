import { SoftSkills } from "@/utils/softskills";

export default function CardSkill() {
  return (
    <section className="w-full flex justify-center px-4">
      <div
        className="
          w-full max-w-6xl
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
        "
      >
        {SoftSkills.map((softskill) => (
          <div
            key={softskill.id}
            className="
              flex flex-col gap-3
              p-6
              rounded-xl
              border border-[#E5E7EB]
              hover:shadow-lg
              transition
            "
          >
            <div className="flex items-center gap-4">
              <span className="font-jetbrains font-bold text-3xl sm:text-4xl">
                0{softskill.id}
              </span>

              <div
                className="
                  flex-1
                  h-[18px] sm:h-[22px]
                  rounded-sm
                "
                style={{ backgroundColor: softskill.color }}
              />
            </div>

            <p className="font-jetbrains font-bold text-xl sm:text-2xl">
              {softskill.title}
            </p>

            <span className="text-sm sm:text-base text-[#484A4E] leading-relaxed">
              {softskill.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
