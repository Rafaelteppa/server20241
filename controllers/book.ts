import { pool } from "../shared/database";
import { Request, Response } from "express";


export async function listBook(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const books = await client.query(`select * from livros`)
  //retorna consulta em formato json
  return res.status(200).json(books.rows);
}
export async function saveBook(req: Request, res: Response) {
  const book = req.body;
 //conecta com o banco
 const client = await pool.connect();
 //realiza consulta sql
 const response = await client.query(`INSERT INTO livros(titulo,descricao) VALUES ('${book.titulo}','${book.descricao}')`)
  res.status(201).json(response);
}