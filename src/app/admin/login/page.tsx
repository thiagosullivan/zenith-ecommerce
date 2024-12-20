"use client";

import Image from "next/image";
import React, { useState } from "react";
import ZenithLogo from "../../../../public/zenith-logo.png";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonComponent from "@/app/components/buttonComponent";
import { EyeOff, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().email({ message: "O usuário é obrigatório." }),
  password: z
    .string({ message: "A senha é obrigatória." })
    .min(4, { message: "A senha precisa ter ao menos 4 letras." }),
});

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-7xl mx-auto h-[100vh] flex flex-col justify-center gap-y-10">
      <div className="flex justify-center">
        <Image src={ZenithLogo} alt="Zenith logo" width={250} />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-y-4 font-jost w-full max-w-[400px] mx-auto"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-normal">
                  Usuário
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-12 text-base"
                    placeholder="Digite seu usuário"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-normal">
                  Senha
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      className="h-12 text-base"
                      placeholder="Digite sua senha"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute top-[13px] right-[10px] p-0"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <EyeOff className="w-6 h-6 text-gray-600" />
                      ) : (
                        <Eye className="w-6 h-6 text-gray-600" />
                      )}
                    </button>
                  </div>
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <ButtonComponent style="h-12" text="Entrar" type="submit" />
        </form>
      </Form>
    </div>
  );
};

export default AdminLogin;
