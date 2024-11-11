"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Compra() {
  const router = useRouter();
  return (
    <div className="m-auto place-items-center">
      <Button variant="contained">Criar compra</Button>
      <Button variant="contained" onClick={() => router.push("/")}>
        Voltar
      </Button>
    </div>
  );
}
