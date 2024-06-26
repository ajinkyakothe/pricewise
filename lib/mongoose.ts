import mongoose from 'mongoose';


let isConnected=false; //variable to track connection status

export const connectToDB= async ()=>{

 mongoose.set('strictQuery',true);

 if(!process.env.MONGODB_URL) return console.log("MONGODB_URL is not defined");

 if(isConnected) return console.log('=>using existing database connection');

   try{
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected=true;
    console.log("MongoDB connected..");
   }
  catch(error)
  {
    console.log(error);
  }


}


// ViX8C2rpmseVDpqH
