"use server"

// import { unstable_noStore as noStore } from 'next/cache';
import { Media } from "./models";
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

const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc';
const tmdbOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_HEADER}`
  }
};

export async function getMoviesFromTMDB() {
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
