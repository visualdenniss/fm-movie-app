import MediaList from "@/components/MediaList/MediaList";
import { getUserBookmarks } from "@/lib/action"
import { auth } from "@/lib/auth";

const UserBookmarks = async () => {

    const session = await auth();
    const list = await getUserBookmarks(session?.user.email); 

    return (
        <div className='flex-1 px-4 flex flex-col md:pt-5 gap-6'>
            <h2 className='text-[20px] md:text-3xl font-light'> My Bookmarks</h2>
            <ul className='medialist'>
                <MediaList medialist={list}/>
            </ul>
        </div>
    )
}

export default UserBookmarks
