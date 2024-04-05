import MediaList from '@/components/MediaList/MediaList'
import { getLocalData } from '@/lib/localdata';

const TvSeries = async () => {
    const data = await getLocalData();

    return (
        <section className=' space-y-6 lg:mx-0'>
        <h2 className='text-[20px] md:text-3xl font-light'>TV Series</h2>
            <ul className='medialist'>
              <MediaList medialist={data.filter((media)=> media.category === 'TV Series')}/>
            </ul>
      </section>
    )
}

export default TvSeries
