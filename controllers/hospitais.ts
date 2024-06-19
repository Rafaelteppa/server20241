import { pool } from "../shared/database";
import { Request, Response } from "express";


export async function listHospitais(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const hospitais = await client.query(`select * from hospitais`)
  //retorna consulta em formato json
  return res.status(200).json(hospitais.rows);
}
export async function saveHospitais(req: Request, res: Response) {
  const hospital = req.body;
 //conecta com o banco
 const client = await pool.connect(); //realiza consulta sql
 const response = await client.query(`INSERT INTO hospitais(address) VALUES ('${hospital.address}')`)
  res.status(201).json(response);
}
