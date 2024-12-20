import { Separator } from "@/components/ui/separator";
import React from "react";

const data = [
  {
    id: "123",
    adminName: "Master",
    adminRole: "ADMIN",
    adminUsername: "admmaster",
    hashedPassword: "123456",
  },
  {
    id: "456",
    adminName: "Isabela",
    adminRole: "editor",
    adminUsername: "isabelaeditora",
    hashedPassword: "123456",
  },
  {
    id: "789",
    adminName: "Roberta",
    adminRole: "editor",
    adminUsername: "robertaeditora",
    hashedPassword: "123456",
  },
];

const DashboardAdminsPage = () => {
  console.log(data, "DATA ADMIN");

  return (
    <div className="flex">
      <div className="flex gap-4 border-r ml-5 pr-5">
        {data.map((user) => (
          <div key={user.id} className="border max-w-fit p-4 rounded-md">
            <h4 className="font-bold text-lg">{user.adminName}</h4>
            <Separator className="mb-2" />
            <p className="text-xs mb-2">@{user.adminUsername}</p>
            <p className="text-xs">{user.adminRole}</p>
          </div>
        ))}
      </div>
      <div className="ml-5">
        <form>
          <input placeholder="Nome" type="text" className="border" />
        </form>
      </div>
    </div>
  );
};

export default DashboardAdminsPage;
