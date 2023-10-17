import mongoose from "mongoose";
import { connected } from "process";

/*
0 = disconected
1 = connected
2 = contecting
3 = disconecting 
*/

const mongooConection = {
  isConected: 0
}

export const conect = async () => {

  if(mongooConection.isConected == 1){
    console.log("Ya estamos conectados")
    return
  }

  if( mongoose.connections.length > 0 ) {
    mongooConection.isConected = mongoose.connections[0].readyState

    if(mongooConection.isConected == 1){
      console.log("Usando conexión anterior");
      return
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL ?? '');
  mongooConection.isConected = 1;

  console.log('Contectado a mongo', process.env.MONGO_URL );
}


export const disconnect = async () => {
  if(mongooConection.isConected === 0) return
  mongooConection.isConected = 0;
  await mongoose.disconnect();
  console.log("desconectado de mongoDB")
}
