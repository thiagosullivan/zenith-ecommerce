import React from "react";
import UserOne from "../../../../public/users/image.jpg";
import UserTwo from "../../../../public/users/image2.jpg";
import UserThree from "../../../../public/users/image3.jpg";
import UserFour from "../../../../public/users/image4.jpg";
import UserFive from "../../../../public/users/image5.jpg";
import UserSix from "../../../../public/users/image6.jpg";
import UserSeven from "../../../../public/users/image7.jpg";
import UserEight from "../../../../public/users/image8.jpg";
import UsersCard from "@/app/components/dashboard/UsersCard";

const data = [
  {
    id: "1010",
    firstName: "Anny",
    lastName: "Wilson",
    email: "annywil@email.com",
    phone: "(43) 99898-9898",
    profileImage: UserOne,
    orders: [
      {
        id: "101010",
      },
      {
        id: "111111",
      },
      {
        id: "121212",
      },
    ],
  },
  {
    id: "1111",
    firstName: "Betty",
    lastName: "Wilson",
    email: "bettywilson@email.com",
    phone: "(43) 99292-9292",
    profileImage: UserTwo,
    orders: [
      {
        id: "202020",
      },
      {
        id: "212121",
      },
      {
        id: "222222",
      },
    ],
  },
  {
    id: "1313",
    firstName: "Cindy",
    lastName: "Wilson",
    email: "cindywilson@email.com",
    phone: "(43) 99393-9393",
    profileImage: UserThree,
    orders: [
      {
        id: "303030",
      },
      {
        id: "313131",
      },
      {
        id: "323232",
      },
    ],
  },
  {
    id: "1414",
    firstName: "Danny",
    lastName: "Wilson",
    email: "dannywilson@email.com",
    phone: "(43) 99494-9494",
    profileImage: UserFour,
    orders: [],
  },
  {
    id: "1515",
    firstName: "Elly",
    lastName: "Wilson",
    email: "ellywilson@email.com",
    phone: "(43) 99595-9595",
    profileImage: UserFive,
    orders: [],
  },
  {
    id: "1616",
    firstName: "Francy",
    lastName: "Wilson",
    email: "francywilson@email.com",
    phone: "(43) 99797-9797",
    profileImage: UserSix,
    orders: [
      {
        id: "606060",
      },
      {
        id: "616161",
      },
      {
        id: "626262",
      },
    ],
  },
  {
    id: "1717",
    firstName: "Gally",
    lastName: "Wilson",
    email: "gallywilson@email.com",
    phone: "(43) 99797-9797",
    profileImage: UserSeven,
    orders: [],
  },
  {
    id: "1818",
    firstName: "Helly",
    lastName: "Wilson",
    email: "hellywilson@email.com",
    phone: "(43) 99898-9898",
    profileImage: UserEight,
    orders: [],
  },
];

const UsersPages = () => {
  return (
    <div>
      <div className="mb-7">
        <h1 className="font-jost text-4xl font-bold">Usuários</h1>
        <p className="text-gray-400">Todos os usuários cadastrados na Zenith</p>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-8 justify-items-center">
        {data.map((user) => (
          <UsersCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UsersPages;
