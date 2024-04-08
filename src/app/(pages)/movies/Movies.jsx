
import MediaList from '@/components/MediaList/MediaList'
import { getMovieList } from '@/lib/action';

const Movies = async ({query}) => {
    const movieList = await getMovieList(query);
    return (
            <MediaList medialist={movieList}/>
    )
}

export default Movies
