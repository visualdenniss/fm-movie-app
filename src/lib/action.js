"use server"

// import { unstable_noStore as noStore } from 'next/cache';
import { Media, User } from "./models";
import { connectToDb } from "./utils"

export const getMediaList = async (query) => {
    try {
        // Connect to the database if not already connected
        connectToDb();

        // Define the search criteria based on the query
        const searchCriteria = query ? { title: { $regex: query, $options: 'i' } } : {};

        // Fetch media items based on the search criteria
        const mediaList = await Media.find(searchCriteria);

        return mediaList;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
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


export const getMovieList = async (query) => {
    try {
        // Connect to the database if not already connected
        connectToDb();

        // Define the search criteria based on the query
        const searchCriteria = query ? { category: 'Movie', title: { $regex: query, $options: 'i' } } : { category: 'Movie' };

        // Fetch movies based on the search criteria
        const movieList = await Media.find(searchCriteria);
        return movieList;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}

export const getTvSeriesList = async (query) => {
    try {
        // Connect to the database if not already connected
        connectToDb();

        // Define the search criteria based on the query
        const searchCriteria = query ? { category: 'TV Series', title: { $regex: query, $options: 'i' } } : { category: 'TV Series' };

        // Fetch TV series based on the search criteria
        const tvList = await Media.find(searchCriteria);

        return tvList;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}

export const getBookmarked = async (query) => {
    try {
        // Connect to the database if not already connected
        connectToDb();

        // Define the search criteria based on the query
        const searchCriteria = query ? { isBookmarked: true, title: { $regex: query, $options: 'i' } } : { isBookmarked: true };

        // Fetch bookmarked media items based on the search criteria
        const bookmarkedList = await Media.find(searchCriteria);

        return bookmarkedList;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}

export const getUserBookmarks = async (email) => {
    try {
        // Connect to the database if not already connected
        connectToDb();

        // Fetch user document based on email
        const user = await User.findOne({ email });
            if (!user) {
                return { error: "User not found" };
            }

        if (!user) {
            return { error: "User not found" };
        }

        // Extract the bookmarks array from the user document
        const { bookmarks } = user;

        // Fetch bookmarked media items using the bookmarks array
        const bookmarkedList = await Media.find({ _id: { $in: bookmarks } });

        return bookmarkedList;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}

export const getUserBookmarksIDs = async (email) => {
    try {
        // Connect to the database if not already connected
        connectToDb();

        // Fetch user document based on email
        const user = await User.findOne({ email });
            if (!user) {
                return { error: "User not found" };
            }

        if (!user) {
            return { error: "User not found" };
        }

        // Extract the bookmarks array from the user document
        const { bookmarks } = user;
        
        return bookmarks;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}

export const toggleUserBookmarks = async (email, id) => {
    try {
        connectToDb();
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return { error: "User not found" };
        }

        // Create a copy of the user's bookmarks array
        let newBookmarksArray = [...user.bookmarks];

        // Check if the ID exists in the bookmarks array
        const index = newBookmarksArray.indexOf(id);
        let updateType; 
        if (index !== -1) {
           // If ID exists, remove it from the array
           newBookmarksArray.splice(index, 1);
           updateType = 'removed'
        } else {
           // If ID doesn't exist, add it to the array
           newBookmarksArray.push(id);
           updateType = 'added'
        }

        // Update the user's bookmarks array in the database
        await User.findByIdAndUpdate(
            user._id,
            { $set: { bookmarks: newBookmarksArray } },
            { new: true } // This option ensures that the updated document is returned
        );       
        return updateType;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}

export const getSomeBookmarks = async () => {
    const bookmarksWithIDs = ['66105be52d1c8deab7511cd6','66105be52d1c8deab7511cdb', '66105be52d1c8deab7511ceb']
    try {
        connectToDb(); 
        const list = await Media.find({_id: {$in: bookmarksWithIDs}});
        return list;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}

export const getUserByEmail = async (email) => {
    try {
        connectToDb(); 
        // Fetch user document based on email
        const user = await User.findOne({ email });
        if (!user) {
            return { error: "User not found" };
        }
        return user; 
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}

export const getTrendingList = async () => {
    try {
        // Connect to the database if not already connected
        connectToDb();

        // Fetch only the media items with the "Movie" category
        const trendingList = await Media.find({ isTrending: true });
        return trendingList;
    } catch (err) {
        console.log(err);
        return { error: "Couldn't connect to database" };
    }
}


const MAX_LIMIT = 8;

export async function fetchAnime(page) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data;
}


export async function fetchAnimeVideo(id) {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}/videos`
  );

  const data = await response.json();

  return data;
}

const tmdbOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_HEADER}`
  }
};

export async function getMoviesFromTMDB(page) {
    const tmdbUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    const response = await fetch(tmdbUrl, tmdbOptions);
    const data = await response.json();
    return data;
  }

  export async function fetchTMDBVideo(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, 
      tmdbOptions
    );
    const data = await response.json();
    return data;
  }

