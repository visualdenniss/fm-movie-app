import MediaList from '@/components/MediaList/MediaList'
import { getMediaList } from '@/lib/action';

const Bookmarked = async () => {
  const mediaList = await getMediaList();

    return (
        <section className=' space-y-6 lg:mx-0'>
        <h2 className='text-[20px] md:text-3xl font-light'>Bookmarked</h2>
            <ul className='medialist'>
              <MediaList medialist={mediaList.filter((media)=> media.isBookmarked)}/>
            </ul>
      </section>
    )
}

export default Bookmarked