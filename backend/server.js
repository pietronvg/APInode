//importação a partir de CommonJS:
//var express = require("express");

import express, { response } from "express";

const app = express();
const porta = 8000;

app.get("/",(request,response) => {
  response.send("Olá (^-^)")
});

app.get("/usuario",(request,response) => {
  response.json({
    id: 1,
    nome: "Pipi",
    profissao:"Amar minha namo"
  });
});
app.get("/usuarios",(request,response) => {
  response.json([
    {
    id: 2,
    nome: "Manu",
    profissao:"Amar seu namo"
    },
    {
    id: 3,
    nome: "Pedro",
    profissao:"Viver"
    }
  ]);
});

app.listen(porta, (request,response)=>{
    console.log(`servidor rodando: http://127.0.0.1:${porta}`)
}
);