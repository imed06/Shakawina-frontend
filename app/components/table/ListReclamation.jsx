"use client"
import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function ListReclamation() {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <Table aria-label="Example static collection table" bottomContent={isOpen ? <div className="flex justify-center">reponse</div> : null}>
      <TableHeader>
        <TableColumn>CODE</TableColumn>
        <TableColumn>NOM</TableColumn>
        <TableColumn>DATE</TableColumn>
        <TableColumn>OBJET RECLAMATION</TableColumn>
        <TableColumn>CORPS RECLAMATION</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>REPONSE</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."} content="kfjd">
        <TableRow key="1">
          <TableCell>R-133265</TableCell>
          <TableCell>triki imed</TableCell>
          <TableCell>25/06/2020</TableCell>
          <TableCell>Autre</TableCell>
          <TableCell>reclamation</TableCell>
          <TableCell className="text-warning">En attente de traitement</TableCell>
          <TableCell onClick={()=>setIsOpen(!isOpen)} className=" cursor-pointer">0</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
