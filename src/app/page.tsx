"use client"

import AboutMe from "@/components/about-me";
import Banner from "@/components/Banner";
import { DownloadCV } from "@/components/download-cv";
import HardSkills from "@/components/hardskills";
import NavBar from "@/components/NavBar";
import SoftSkills from "@/components/soft-skills";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner/>
      <div className="flex flex-col p-12 gap-20">
        <div className=" flex flex-col justify-center items-center">
          <AboutMe/>
          <DownloadCV/>
          <HardSkills/>
        </div>
        <SoftSkills/>
      </div>
    </div>
  );
}
