import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgePercent, Ellipsis, Package, Pencil, Trash } from "lucide-react";
import React from "react";

const DropdownProduct = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="bg-gray-200 hover:bg-primary/30">
          <Ellipsis className="stroke-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2 font-jost">
        <DropdownMenuItem>
          <Pencil size={48} />
          <p className="text-base">Editar</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Package />
          <p className="text-base">Estoque</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <BadgePercent />
          <p className="text-base">Promoção</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Trash />
          <p className="text-base">Deletar</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownProduct;
