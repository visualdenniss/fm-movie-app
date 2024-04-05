"use server"

import { Media } from "./models";
import { connectToDb } from "./utils"

export const getMediaList = async () => {
    try {
        connectToDb();
        const mediaList = await Media.find(); 
        return mediaList;
    } catch(err)
    {
        console.log(err);
        return {error: "Couldn't connect to database"}
    }
}

export const toggleBookMark = async (isBookmarked, id) => {
    const newBookmarkStatus = !isBookmarked;
    try {
        connectToDb();
        // Find the media by its ID and update the isBookmarked property
        await Media.findByIdAndUpdate(
            id,
            { $set: { isBookmarked: newBookmarkStatus } }, // Or you can toggle isBookmarked: true/false as per your logic
            { new: true } // This option ensures that the updated document is returned
        );
        
    } catch(err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}