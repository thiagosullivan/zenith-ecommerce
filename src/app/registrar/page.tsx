"use client";

import Image from "next/image";
import RegisterImg from "../../../public/register-bg.jpg";
import ZenithLogo from "../../../public/zenith-logo-one.png";
import { RegisterForm } from "../components/register/RegisterForm";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="h-full flex justify-center flex-1 overflow-y-hidden relative">
      <button
        className="absolute border border-primary p-2 rounded-md right-4 top-4"
        onClick={router.back}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <div className="h-[100vh] w-full relative">
        <Link href="/">
          <Image
            src={ZenithLogo}
            alt="Zenith Logo"
            width={160}
            height={78}
            className="absolute top-10 left-28 z-10 max-xl:left-16 max-lg:left-5 max-lg:top-3"
          />
        </Link>
        <Image
          src={RegisterImg}
          alt="Imagem Página de Login"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full max-h-[100vh] flex flex-col justify-center items-start pl-28 pr-10 max-xl:pl-20 max-lg:pl-8 max-lg:pr-8 pb-4">
        <div className="max-w-[445px] w-full">
          <h1 className="text-primary font-bold text-3xl font-poppins mb-1">
            Criar Uma Nova Conta
          </h1>
          <p className="text-gray-400 font-jost text-base mb-7">
            Por favor insira suas informações nos campos abaixos
          </p>
          <div
            className="max-h-[85vh] overflow-y-auto pb-1"
            id="registerFormDiv"
          >
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  );
}
