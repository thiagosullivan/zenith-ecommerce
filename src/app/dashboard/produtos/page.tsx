import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import TenisNike from "../../../../public/tenis-nike.jpg";
import Image from "next/image";
import Badge from "@/app/components/badge";
import DropdownProduct from "@/app/components/dropdownProduct";

const products = [
  {
    id: "1",
    image: TenisNike,
    name: "Ultraboost 1.0 ATR",
    status: "Publicado",
    price: 240.0,
    date: "2022-09-07T15:20:44.946Z",
  },
  {
    id: "2",
    image: TenisNike,
    name: "Nike Revolution 7",
    status: "Sem Estoque",
    price: 200.0,
    date: "2022-09-07T15:20:44.946Z",
  },
  {
    id: "3",
    image: TenisNike,
    name: "Nike Revolution 7",
    status: "Publicado",
    price: 200.89,
    date: "2022-09-07T15:20:44.946Z",
  },
  {
    id: "4",
    image: TenisNike,
    name: "Air Max INTRLK Lite Dx3705",
    status: "Não Publicado",
    price: 1010.9,
    date: "2022-09-07T15:20:44.946Z",
  },
];

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
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image
                  src={product.image}
                  alt="Imagem do produto"
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell className="uppercase">{product.name}</TableCell>
              <TableCell>
                <Badge status={product.status} />
              </TableCell>
              <TableCell>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
              <TableCell>
                {new Date(product.date).toLocaleDateString("pt-BR")}
              </TableCell>
              <TableCell className="text-right">
                <DropdownProduct />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductPages;
