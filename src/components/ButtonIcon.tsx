'use client';

import { ReactNode } from "react";

interface ButtonIconProps {
    title: string;
    onClick: () => void;
    icon: ReactNode;
}

export default function ButtonIcon({ title, onClick, icon }: ButtonIconProps) {
    return (
        <button
            onClick={onClick}
            className="
                flex items-center justify-center gap-2
                px-4 py-2
                text-[#244070] border-2 border-[#244070]
                rounded-md font-semibold
                hover:bg-[#244070] hover:text-white
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-[#244070] focus:ring-offset-2
                w-full sm:w-auto
                cursor-pointer
            "
        >
            <span className="text-lg">{icon}</span>
            <span>{title}</span>
        </button>
    );
}
