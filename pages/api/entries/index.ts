import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import type { NextApiResponse, NextApiRequest } from "next";


type Data =  
  | { message: string }
  | IEntry[]
  | IEntry

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  switch(req.method){
    case 'GET':
      return getEntries(res)
    case 'POST':
      return postEntry(req, res)
    default:
      res.status(400).json({message: "Endpoint no existe"})
      break;
  }
}


const getEntries = async (res: NextApiResponse<Data>) => {
  try{
    await db.conect();

    const entries = await Entry.find().sort({createdAt: 'ascending'});
    
    await db.disconnect();
    
    return res.status(200).json(entries);
  }
  catch(err){}

}


const postEntry = async (req: NextApiRequest, res: NextApiResponse) => {

  const {description=''} = req.body;
  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
    status: "pending"
  })

  try {
    await db.conect();
    await newEntry.save();
    await db.disconnect();

    return res.status(201).json(newEntry);
  }catch(err){
    await db.disconnect();
    console.log(err)

    return res.status(500).json({message: "Algo salio mal, revisar consola"});
  }

}