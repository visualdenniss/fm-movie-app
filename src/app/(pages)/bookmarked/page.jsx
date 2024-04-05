import MediaList from '@/components/MediaList/MediaList'
import { getLocalData } from '@/lib/localdata';

const Bookmarked = async () => {
    const data = await getLocalData();

    return (
        <section className=' space-y-6 lg:mx-0'>
        <h2 className='text-[20px] md:text-3xl font-light'>Bookmarked</h2>
            <ul className='medialist'>
              <MediaList medialist={data.filter((media)=> media.isBookmarked)}/>
            </ul>
      </section>
    )
}

export default Bookmarked