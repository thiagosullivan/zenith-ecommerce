"use client";

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
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "O E-mail é obrigatório." }),
  password: z
    .string({ message: "A senha é obrigatória." })
    .min(6, { message: "A senha precisa ter ao menos 6 letras." }),
  remember: z.boolean().default(false).optional(),
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 font-jost w-full"
      >
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
                  className="h-12 text-base"
                  placeholder="exemplo@email.com.br"
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
              <FormLabel className="text-primary font-normal">Senha</FormLabel>
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
        <div className="flex justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex items-center gap-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="!mt-0 leading-none">
                  <FormLabel className="font-normal">Lembre-me</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Link
            className="text-sm hover:text-muted-foreground"
            href="/esqueci-minha-senha"
          >
            Esqueceu sua senha?
          </Link>
        </div>
        <Button className="h-12" type="submit">
          Entrar
        </Button>
      </form>
    </Form>
  );
}
