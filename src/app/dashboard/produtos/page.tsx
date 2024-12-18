import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import TenisNike from "../../../../public/tenis-nike.jpg";
import Image from "next/image";
import Badge from "@/app/components/badge";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

const ProductPages = () => {
  return (
    <div>
      <div className="mb-7">
        <h1 className="font-jost text-4xl font-bold">Produtos</h1>
        <p className="text-gray-400">
          Edite seus produtos e veja a performance de vendas
        </p>
      </div>

      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Imagem</TableHead>
            <TableHead className="w-[350px]">Nome</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Data</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Image
                src={TenisNike}
                alt="Imagem do produto"
                width={100}
                height={100}
              />
            </TableCell>
            <TableCell>Ultraboost 1.0 ATR</TableCell>
            <TableCell>
              <Badge />
            </TableCell>
            <TableCell>R$240</TableCell>
            <TableCell>01/01/2025</TableCell>
            <TableCell className="text-right">
              <Button size="icon" className="bg-gray-200 hover:bg-primary/30">
                <Ellipsis className="stroke-primary" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Image
                src={TenisNike}
                alt="Imagem do produto"
                width={100}
                height={100}
              />
            </TableCell>
            <TableCell>Ultraboost 1.0 ATR</TableCell>
            <TableCell>
              <Badge />
            </TableCell>
            <TableCell>R$240</TableCell>
            <TableCell>01/01/2025</TableCell>
            <TableCell className="text-right">
              <Button size="icon" className="bg-gray-200 hover:bg-primary/30">
                <Ellipsis className="stroke-primary" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Image
                src={TenisNike}
                alt="Imagem do produto"
                width={100}
                height={100}
              />
            </TableCell>
            <TableCell>Ultraboost 1.0 ATR</TableCell>
            <TableCell>
              <Badge />
            </TableCell>
            <TableCell>R$240</TableCell>
            <TableCell>01/01/2025</TableCell>
            <TableCell className="text-right">
              <Button size="icon" className="bg-gray-200 hover:bg-primary/30">
                <Ellipsis className="stroke-primary" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Image
                src={TenisNike}
                alt="Imagem do produto"
                width={100}
                height={100}
              />
            </TableCell>
            <TableCell>Ultraboost 1.0 ATR</TableCell>
            <TableCell>
              <Badge />
            </TableCell>
            <TableCell>R$240</TableCell>
            <TableCell>01/01/2025</TableCell>
            <TableCell className="text-right">
              <Button size="icon" className="bg-gray-200 hover:bg-primary/30">
                <Ellipsis className="stroke-primary" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductPages;
