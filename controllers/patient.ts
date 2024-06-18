import { pool } from "../shared/database";
import { Request, Response } from "express";


export async function listPatient(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const patients = await client.query(`select * from patients`)
  //retorna consulta em formato json
  return res.status(200).json(patients.rows);
}
export async function savePatient(req: Request, res: Response) {
  const patient = req.body;
 //conecta com o banco
 const client = await pool.connect();
 //realiza consulta sql
 const response = await client.query(`INSERT INTO Patient(name,age) VALUES ('${patient.name}','${patient.age}')`)
  res.status(201).json(response);
}