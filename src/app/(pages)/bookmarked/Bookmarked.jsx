import MediaList from '@/components/MediaList/MediaList'
import { getBookmarked } from '@/lib/action';


const Bookmarked = async ({query}) => {
    const bookmarkedList = await getBookmarked(query);
    return (
        <MediaList medialist={bookmarkedList}/>
    )
}

export default Bookmarked
