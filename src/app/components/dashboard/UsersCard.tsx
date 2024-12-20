import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Order {
  id: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profileImage: string | StaticImageData; //
  orders: Order[];
}

interface UsersCardProps {
  user: User;
}

const UsersCard: React.FC<UsersCardProps> = ({ user }) => {
  return (
    <div className="max-w-[400px] max-sm:max-w-full w-full border rounded-lg p-4 font-jost">
      <div className="flex items-center gap-x-2">
        {/* <Image
          src={user.profileImage}
          alt={user.firstName}
          className="w-[84px] h-[84px] rounded-full"
        /> */}
        <div>
          <h3 className="font-bold text-xl">
            {user.firstName} {user.lastName}
          </h3>
          <ul className="text-sm">
            <li>
              <strong>Id:</strong> {user.id}
            </li>
            <li>
              <strong>Telefone:</strong> {user.phone}
            </li>
            <li>
              <strong>E-mail:</strong> {user.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-300 my-4" />
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">Pedidos</AccordionTrigger>
            {user.orders.map((order) => (
              <AccordionContent key={order.id}>
                <Link
                  href={`/dashboard/usuarios/${user.firstName}-${user.lastName}/pedido/${order.id}`}
                >
                  <strong>Pedido Nº:</strong> {order.id}
                </Link>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default UsersCard;
