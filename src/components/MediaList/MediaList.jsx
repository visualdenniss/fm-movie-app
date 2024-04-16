import { getUserBookmarksIDs } from "@/lib/action";
import { auth } from "@/lib/auth"
import Thumbnail from "../Thumbnail/Thumbnail"


const MediaList = async ({medialist}) => {
    const session = await auth();
    const bookmarks = await getUserBookmarksIDs(session?.user.email); 
    return (
        <>
            {medialist.map((media)=> {
                return  <Thumbnail media={media} key={media._id} user={session?.user} bookmarks={session ? bookmarks : ''}/>
            })}
        </>
    )
}

export default MediaList