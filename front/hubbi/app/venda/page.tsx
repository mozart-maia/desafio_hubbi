"use client";
import { Button, Paper } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function Compra() {
  const router = useRouter();

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID da compra", width: 90 },
    {
      field: "data",
      headerName: "Data da compra",
      editable: true,
    },
  ];

  const rows = [];

  return (
    <div className="m-auto place-items-center">
      <Button variant="contained">Criar venda</Button>
      <Button variant="contained" onClick={() => router.push("/")}>
        Voltar
      </Button>
      <Paper>
        <DataGrid rows={[]} columns={columns} />
      </Paper>
    </div>
  );
}
