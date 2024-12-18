import { z } from "zod";

export const formSchema = z
  .object({
    firstName: z.string().min(2, { message: "O nome é obrigatório." }),
    lastName: z.string().min(2, { message: "O sobrenome é obrigatório." }),
    cpf: z.string().min(14, { message: "O CPF é obrigatório." }).max(14),
    birth: z
      .string()
      .min(10, { message: "A data de nascimento é obrigatória." })
      .max(10),
    email: z.string().email({ message: "O E-mail é obrigatório." }),
    phone: z.string().min(13, { message: "O Telefone é obrigatório." }).max(15),
    password: z
      .string({ message: "A senha é obrigatória." })
      .min(6, { message: "A senha precisa ter ao menos 6 letras." }),
    confirmPassword: z
      .string({ message: "A confirmação de senha é obrigatória." })
      .min(6, {
        message: "A confirmação de senha precisa ter ao menos 6 letras.",
      }),
    terms: z
      .boolean()
      .refine(
        (value) => value === true,
        "Você precisa aceitar os termos para continuar."
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não combinam",
  });
