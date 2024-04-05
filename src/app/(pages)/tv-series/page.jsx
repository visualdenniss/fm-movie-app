import MediaList from '@/components/MediaList/MediaList'
import { getMediaList } from '@/lib/action';

const TvSeries = async () => {

    const mediaList = await getMediaList();

    return (
        <section className=' space-y-6 lg:mx-0'>
        <h2 className='text-[20px] md:text-3xl font-light'>TV Series</h2>
            <ul className='medialist'>
              <MediaList medialist={mediaList.filter((media)=> media.category === 'TV Series')}/>
            </ul>
      </section>
    )
}

export default TvSeries
