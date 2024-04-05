import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};


export const getIconPath = (category) => {
  let path; 
  switch (category) {
    case 'Movie':
        path = '/assets/icon-nav-movies.svg';
        return path; 
    case 'TV Series':
        path = '/assets/icon-nav-tv-series.svg';
        return path;
    default: 
        path = '/assets/logo.svg'
        return path; 
   }
}