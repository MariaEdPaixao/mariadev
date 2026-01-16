//imgs 
import FrontWhite from "@/assets/front-end-white.png";
import FrontBlue from "@/assets/front-end-blue.png";
import BackendWhite from "@/assets/back-end-white.png";
import BackendBlue from "@/assets/back-end-blue.png";
import BDWhite from "@/assets/bd-white.png";
import BDBlue from "@/assets/bd-blue.png";

export const iconMap = {
  Frontend: {
    dark: FrontWhite,
    light: FrontBlue,
  },
  Backend: {
    dark: BackendWhite,
    light: BackendBlue,
  },
  BancoDeDados: {
    dark: BDWhite,
    light: BDBlue,
  },
} as const;