"use client";

import Image from "next/image";
import ZenithLogo from "../../../../public/zenith-logo-one.png";
import Link from "next/link";
import { UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const routes = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Pedidos", path: "/dashboard/pedidos" },
  { name: "Produtos", path: "/dashboard/produtos" },
  { name: "Usuários", path: "/dashboard/usuarios" },
  { name: "Banners", path: "/dashboard/banners" },
  { name: "Administradores", path: "/dashboard/administradores" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname, "PATHNAME");
  return (
    <header className="flex flex-col justify-center items-center py-5 font-jost">
      <Link href="/dashboard">
        <Image src={ZenithLogo} alt="Logo Zenith" className="mb-4" />
      </Link>
      <div className="w-full">
        <nav className="flex items-center justify-between border-b border-gray-300 pb-3 px-4">
          <ul className="flex gap-x-7">
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.path}
                  className={cn("", {
                    "font-bold": pathname === route.path,
                  })}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-2 bg-gray-200 rounded-full">
            <UserCircle className="w-6 h-6" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
