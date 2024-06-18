import { pool } from "../shared/database";
import { Request, Response } from "express";


export async function listHospital(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const hospital = await client.query(`select * from escola`)
  //retorna consulta em formato json
  return res.status(200).json(hospital.rows);
}
export async function saveHospital(req: Request, res: Response) {
  const hospital = req.body;
 //conecta com o banco
 const client = await pool.connect();
 //realiza consulta sql
 const response = await client.query(`INSERT INTO hospital(nome) VALUES ('${hospital.address}')`)
  res.status(201).json(response);
}



