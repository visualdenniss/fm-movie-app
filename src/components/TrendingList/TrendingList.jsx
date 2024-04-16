import { getTrendingList, getUserBookmarksIDs } from "@/lib/action";
import { auth } from "@/lib/auth";
import TrendingThumbnail from "./TrendingThumbnail/TrendingThumbnail"


const TrendingList = async () => {
    const trendingList = await getTrendingList();
    const session = await auth();
    const bookmarks = await getUserBookmarksIDs(session?.user.email); 
    return (
        <>
            {trendingList.map((media)=> {
                return  <TrendingThumbnail media={media} key={media._id} user={session?.user} bookmarks={session ? bookmarks : ''}/>
            })}
        </>
    )
}

export default TrendingList