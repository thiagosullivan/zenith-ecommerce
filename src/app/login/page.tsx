"use client";

import Image from "next/image";
import LoginImg from "../../../public/login-bg.jpg";
import ZenithLogo from "../../../public/zenith-logo-one.png";
import { LoginForm } from "../components/login/LoginForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="h-[100vh] flex justify-center flex-1 overflow-y-hidden relative">
      <button
        className="absolute border border-primary p-2 rounded-md right-4 top-4"
        onClick={router.back}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="h-full w-full relative">
        <Image
          src={ZenithLogo}
          alt="Zenith Logo"
          width={160}
          height={78}
          className="absolute top-10 left-28 z-10 max-xl:left-16 max-lg:left-5 max-lg:top-3"
        />
        <Image
          src={LoginImg}
          alt="Imagem Página de Login"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start pl-28 pr-10 max-xl:pl-20 max-lg:pl-10">
        <div className="max-w-[445px] w-full">
          <h1 className="text-primary font-bold text-3xl font-poppins mb-1">
            Bem-vindo(a)! 👋
          </h1>
          <p className="text-gray-400 font-jost text-base mb-7">
            Faça seu login aqui
          </p>
          <LoginForm />
          <div className="w-full mt-16">
            <p className="text-gray-400 font-jost text-base mb-3 text-center">
              Ainda não possui conta?
            </p>
            <Link
              className="flex w-full border p-4 rounded-md justify-center font-jost font-bold text-sm hover:bg-gray-200"
              href="/registrar"
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
