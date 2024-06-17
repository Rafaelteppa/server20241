import { pool } from "../shared/database";
import { Request, Response } from "express";


export async function listSchool(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const schools = await client.query(`select * from escola`)
  //retorna consulta em formato json
  return res.status(200).json(schools.rows);
}
export async function saveSchool(req: Request, res: Response) {
  const school = req.body;
 //conecta com o banco
 const client = await pool.connect();
 //realiza consulta sql
 const response = await client.query(`INSERT INTO escola(nome) VALUES ('${school.name}')`)
  res.status(201).json(response);
}



