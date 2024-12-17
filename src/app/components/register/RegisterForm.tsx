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
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "O nome é obrigatório." }),
  lastName: z.string().min(2, { message: "O sobrenome é obrigatório." }),
  cpf: z.string().min(11, { message: "O CPF é obrigatório." }).max(11),
  email: z.string().email({ message: "O E-mail é obrigatório." }),
  phone: z.string().min(10, { message: "O Telefone é obrigatório." }).max(11),
  password: z
    .string({ message: "A senha é obrigatória." })
    .min(6, { message: "A senha precisa ter ao menos 6 letras." }),
  terms: z
    .boolean()
    .refine(
      (value) => value === true,
      "Você precisa aceitar os termos para continuar."
    ),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      cpf: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 font-jost w-full"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal">Nome</FormLabel>
              <FormControl>
                <Input
                  className="h-12 text-base !mt-0"
                  placeholder="João"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                  className="h-12 text-base !mt-0"
                  placeholder="Silva"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                  className="h-12 text-base !mt-0"
                  placeholder="111.111.111-11"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                  className="h-12 text-base !mt-0"
                  placeholder="exemplo@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                  className="h-12 text-base !mt-0"
                  placeholder="(43) 99999-9999"
                  {...field}
                />
              </FormControl>
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
                <Input
                  type="password"
                  className="h-12 text-base !mt-0"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
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
                Confirmar Senha
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="h-12 text-base !mt-0"
                  placeholder="Confirme sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between my-4">
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <div className="flex items-center gap-x-2">
                <FormItem>
                  <div className="flex">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                </FormItem>
                <div className="!mt-0 leading-none">
                  <FormLabel className="font-normal">
                    Eu concordo com os <strong>Termos & Condições</strong>
                  </FormLabel>
                  <FormMessage />
                </div>
              </div>
            )}
          />
        </div>
        <Button className="h-12" type="submit">
          Registrar
        </Button>
      </form>
    </Form>
  );
}
