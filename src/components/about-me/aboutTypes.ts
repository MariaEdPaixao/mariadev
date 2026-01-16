import { IconType } from "react-icons";

export interface Item{
    title: string;
    icon: IconType
}

export interface AreasProps{
    title: "Frontend" | "Backend" | "BancoDeDados"
    items: Item[]
}