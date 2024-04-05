import { Media } from "./models";
import { connectToDb } from "./utils"

export const getMediaList = async () => {
    try {
        connectToDb();
        console.log('connected to db..');
        const mediaList = await Media.find(); 
        return mediaList;
    } catch(err)
    {
        console.log(err);
        return {error: "Couldn't connect to database"}
    }
}