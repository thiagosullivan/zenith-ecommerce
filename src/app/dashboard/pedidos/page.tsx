import DashboardOrdersCard from "@/app/components/dashboard/dashboardOrdersCard";
import React from "react";

const data = [
  {
    id: "12121212",
    createdAt: "2024-12-17T20:20:44.946Z",
    totalPrice: 300.0,
    userOrder: {
      id: "1212",
      firstName: "Anny",
      lastName: "Wilson",
      phone: "(43) 99191-9191",
      email: "jennywilson@email.com",
      profileImage: "/users/image.jpg",
    },
    products: [
      {
        id: "120",
        name: "Camiseta feminina flamê",
        prodImg: "/prods/prod-1.jpg",
        size: "P",
        qty: 1,
        price: 80.0,
      },
      {
        id: "121",
        name: "Camiseta feminina flamê",
        prodImg: "/prods/prod-1.jpg",
        size: "M",
        qty: 2,
        price: 160.0,
      },
      {
        id: "122",
        name: "Camiseta masculina Classic",
        prodImg: "/prods/prod-2.jpg",
        size: "G",
        qty: 1,
        price: 60.0,
      },
    ],
  },
  {
    id: "13131313",
    createdAt: "2024-12-12T20:20:44.946Z",
    totalPrice: 440.0,
    userOrder: {
      id: "1313",
      firstName: "Betty",
      lastName: "Wilson",
      phone: "(43) 99393-9393",
      email: "bettywilson@email.com",
      profileImage: "/users/image2.jpg",
    },
    products: [
      {
        id: "120",
        name: "Camiseta feminina flamê",
        prodImg: "/prods/prod-1.jpg",
        size: "P",
        qty: 4,
        price: 80.0,
      },
      {
        id: "122",
        name: "Camiseta masculina Classic",
        prodImg: "/prods/prod-2.jpg",
        size: "G",
        qty: 2,
        price: 60.0,
      },
    ],
  },
];

const OrdersPage = () => {
  return (
    <div>
      <div className="mb-7">
        <h1 className="font-jost text-4xl font-bold">Pedidos</h1>
        <p className="text-gray-400">Todos os pedidos realizados na Zenith</p>
      </div>

      <div>
        <DashboardOrdersCard orders={data} />
      </div>
    </div>
  );
};

export default OrdersPage;
