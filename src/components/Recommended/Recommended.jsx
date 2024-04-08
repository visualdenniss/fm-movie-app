import { getMediaList } from "@/lib/action";
import MediaList from "../MediaList/MediaList";


const RecommendedList = async ({query}) => {
    const mediaList = await getMediaList(query);
    return <MediaList medialist={mediaList}/>
}

export default RecommendedList