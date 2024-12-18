import { cn } from "@/lib/utils";
import React from "react";

interface iAppProps {
  status: string;
}

const Badge = ({ status }: iAppProps) => {
  return (
    <div
      className={cn(
        "w-[135px] h-[35px] flex justify-center items-center rounded-md text-[#232323]",
        {
          "bg-[#ABE81E]": status === "Publicado",
          "bg-[#C5C5C5]": status === "Sem Estoque",
          "bg-[#E81E1E] text-white": status === "Não Publicado",
        }
      )}
    >
      {status}
    </div>
  );
};

export default Badge;
