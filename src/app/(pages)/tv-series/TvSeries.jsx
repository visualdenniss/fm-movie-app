import MediaList from '@/components/MediaList/MediaList'
import { getTvSeriesList } from '@/lib/action';


const TvSeries = async ({query}) => {
    const TvSeriesList = await getTvSeriesList(query);
    return (
        <MediaList medialist={TvSeriesList}/>
    )
}

export default TvSeries
