import { getTrendingList } from "@/lib/action";
import TrendingThumbnail from "./TrendingThumbnail/TrendingThumbnail"


const TrendingList = async () => {
    const trendingList = await getTrendingList();
    return (
        <>
            {trendingList.map((media)=> {
                return  <TrendingThumbnail media={media} key={media._id}/>
            })}
        </>
    )
}

export default TrendingList