import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface iAppProps {
  text: string;
  style: string;
  link?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonComponent = ({ text, style, link, type }: iAppProps) => {
  return (
    <>
      {link ? (
        <Button className={style} asChild>
          <Link href={link}>{text}</Link>
        </Button>
      ) : (
        <Button className={style} type={type}>
          {text}
        </Button>
      )}
    </>
  );
};

export default ButtonComponent;
