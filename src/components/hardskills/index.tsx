import { Backend, BancoDeDados, Frontend } from "@/utils/hardskills";
import CardLinguages from "../about-me/card-linguages";

export default function HardSkills() {
  return (
    <section className="w-full flex justify-center px-4 mt-5">
      <div
        className="
          w-full max-w-5xl
          grid grid-cols-1 md:grid-cols-3
          border-2 border-[#244070]
          rounded-[14px]
          overflow-hidden
         
        "
      >
        <div className="border-b md:border-b-0 md:border-r border-[#244070] p-8">
          <CardLinguages title="Frontend" items={Frontend} />
        </div>

        <div className="border-b md:border-b-0 md:border-r border-[#244070] p-8">
          <CardLinguages title="Backend" items={Backend} />
        </div>

        <div className="p-8">
          <CardLinguages title="BancoDeDados" items={BancoDeDados} />
        </div>
      </div>
    </section>
  );
}
