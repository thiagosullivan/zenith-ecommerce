import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  profileImage: string;
}

interface Product {
  id: string;
  name: string;
  prodImg: string;
  size: string;
  qty: number;
  price: number;
}

interface Order {
  id: string;
  createdAt: string;
  totalPrice: number;
  userOrder: User;
  products: Product[];
}

interface OrdersCardProps {
  orders: Order[];
}

const DashboardOrdersCard: React.FC<OrdersCardProps> = ({ orders }) => {
  console.log(orders, "ORDERS");
  return (
    <div className="">
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex border rounded-lg p-4 font-jost mb-4"
        >
          <div className="flex gap-x-4 border-r pr-4">
            <div className="h-[83px] w-[83px]">
              <Image
                src={order.userOrder.profileImage}
                alt="Imagem do usuário"
                width={83}
                height={83}
              />
            </div>
            <div>
              <p className="font-bold text-lg">
                {order.userOrder.firstName} {order.userOrder.lastName}
              </p>
              <p>Id: {order.userOrder.id}</p>
              <p>{order.userOrder.phone}</p>
              <p>{order.userOrder.email}</p>
            </div>
          </div>
          <div className="flex pl-4 w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between w-full">
                  <div className="flex gap-x-2">
                    <p>
                      <strong>Pedido Nº:</strong> {order.id}
                    </p>
                    <p>
                      <strong>Realizado dia:</strong>{" "}
                      {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {order.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex justify-between px-4 mb-4"
                    >
                      <div className="flex pr-2">
                        <div className="mr-8 w-[57px] h-[57px] relative">
                          <Image
                            src={product.prodImg}
                            alt="Imagem do produto"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold">{product.name}</h3>
                          <p>Tamanho: {product.size}</p>
                          <p>Qtd: {product.qty}</p>
                        </div>
                      </div>
                      <p className="font-bold text-base">
                        {product.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                  ))}
                  <div className="flex justify-between items-center px-4">
                    <div className="flex items-center pr-2">
                      <div className="w-[65px] h-[30px] flex justify-center items-center text-[#3CD139] bg-[#3cd13927] rounded-md mr-3">
                        Entregue
                      </div>
                      <p>Seu produto foi entregue</p>
                    </div>
                    <p className="font-bold text-base">
                      Total:{" "}
                      {order.totalPrice.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}
      {/* {orders.map((order) => (
        <div key={order.id}>
          <h1>Pedido ID: {order.id}</h1>
          <p>
            Usuário: {order.userOrder.firstName} {order.userOrder.lastName}
          </p>
          <ul>
            {order.products.map((product) => (
              <li key={product.id}>
                {product.name} - {product.qty} unidade(s) - R${product.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};

export default DashboardOrdersCard;
