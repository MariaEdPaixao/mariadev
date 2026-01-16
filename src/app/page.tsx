"use client"

import AboutMe from "@/components/about-me";
import Banner from "@/components/Banner";
import { DownloadCV } from "@/components/download-cv";
import HardSkills from "@/components/hardskills";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner/>
      <div className="p-12">
        <div className=" flex flex-col justify-center items-center">
          <AboutMe/>
          <DownloadCV/>
        </div>
        <HardSkills/>
      </div>
    </div>
  );
}
