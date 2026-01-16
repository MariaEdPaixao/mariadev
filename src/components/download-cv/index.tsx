"use client";

import { MdDownload } from "react-icons/md";
import ButtonIcon from "../ButtonIcon";
import useDownloadCv from "./useDownloadCv";

export function DownloadCV() {
  const {handleDownload} = useDownloadCv()

  return (
    <ButtonIcon title="Baixar CV" onClick={handleDownload} icon={<MdDownload/>}/>
  );
}
