"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="m-auto place-items-center">
      <Button variant="contained" onClick={() => router.push("/compra")}>
        Ir para compras
      </Button>
      <Button variant="contained" onClick={() => router.push("/venda")}>
        Ir para vendas
      </Button>
    </div>
  );
}
