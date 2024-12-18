/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useHookFormMask } from "use-mask-input";
import { formSchema } from "@/lib/zodSchemas";
import { Eye, EyeOff } from "lucide-react";

// const formSchema = z
//   .object({
//     firstName: z.string().min(2, { message: "O nome é obrigatório." }),
//     lastName: z.string().min(2, { message: "O sobrenome é obrigatório." }),
//     cpf: z.string().min(14, { message: "O CPF é obrigatório." }).max(14),
//     birth: z
//       .string()
//       .min(10, { message: "A data de nascimento é obrigatória." })
//       .max(10),
//     email: z.string().email({ message: "O E-mail é obrigatório." }),
//     phone: z.string().min(10, { message: "O Telefone é obrigatório." }).max(14),
//     password: z
//       .string({ message: "A senha é obrigatória." })
//       .min(6, { message: "A senha precisa ter ao menos 6 letras." }),
//     confirmPassword: z
//       .string({ message: "A confirmação de senha é obrigatória." })
//       .min(6, {
//         message: "A confirmação de senha precisa ter ao menos 6 letras.",
//       }),
//     terms: z
//       .boolean()
//       .refine(
//         (value) => value === true,
//         "Você precisa aceitar os termos para continuar."
//       ),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ["confirmPassword"],
//     message: "As senhas não combinam",
//   });

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      cpf: "",
      birth: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  function handleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  console.log(form.formState.errors);

  const registerWithMask = useHookFormMask(form.register);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("ENTROU");
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 font-jost w-full px-2"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">Nome</FormLabel>
              <FormControl>
                <Input
                  className="h-10 text-base !mt-0"
                  placeholder="João"
                  {...field}
                />
              </FormControl>
              <FormMessage className="!mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">
                Sobrenome
              </FormLabel>
              <FormControl>
                <Input
                  className="h-10 text-base !mt-0"
                  placeholder="Silva"
                  {...field}
                />
              </FormControl>
              <FormMessage className="!mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">CPF</FormLabel>
              <FormControl>
                <Input
                  className="h-10 text-base !mt-0"
                  placeholder="111.111.111-11"
                  {...registerWithMask("cpf", "999.999.999-99", {
                    required: true,
                  })}
                />
              </FormControl>
              <FormMessage className="!mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birth"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">
                Data de Nascimento
              </FormLabel>
              <FormControl>
                <Input
                  className="h-10 text-base !mt-0"
                  placeholder="01/01/1900"
                  {...registerWithMask("birth", "99/99/9999", {
                    required: true,
                  })}
                />
              </FormControl>
              <FormMessage className="!mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">
                Endereço de E-mail
              </FormLabel>
              <FormControl>
                <Input
                  className="h-10 text-base !mt-0"
                  placeholder="exemplo@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="!mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">
                Telefone
              </FormLabel>
              <FormControl>
                <Input
                  className="h-10 text-base !mt-0"
                  placeholder="(99) 99999-9999"
                  {...registerWithMask(
                    "phone",
                    ["(99) 9999-9999", "(99) 99999-9999"],
                    {
                      required: true,
                    }
                  )}
                />
              </FormControl>
              <FormMessage className="!mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">Senha</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="h-10 text-base !mt-0"
                    placeholder="Digite sua senha"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute top-[8px] right-2 p-0"
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
              <FormMessage className="!mt-1" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">
                Confirme sua senha
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    className="h-10 text-base !mt-0"
                    placeholder="Confirme sua senha"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute top-[8px] right-2 p-0"
                    onClick={handleShowConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Eye className="w-6 h-6 text-gray-600" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage className="!mt-1" />
            </FormItem>
          )}
        />
        <div className="flex justify-between my-2">
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <div className="space-y-2">
                <FormItem className="flex gap-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="!mt-0 leading-none">
                    <FormLabel className="font-normal">
                      Eu concordo com os <strong>Termos & Condições</strong>
                    </FormLabel>
                  </div>
                </FormItem>
                <FormMessage className="!mt-1" />
              </div>
            )}
          />
        </div>
        <Button className="h-10" type="submit">
          Registrar
        </Button>
      </form>
    </Form>
  );
}
