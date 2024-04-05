import MediaList from '@/components/MediaList/MediaList'
import { getMediaList } from '@/lib/action';

const Movies = async () => {
    const mediaList = await getMediaList();

    return (
      <main className='h-screen max-h-screen overflow-y-scroll'>
            <section className=' space-y-6 lg:mx-0'>
            <h2 className='text-[20px] md:text-3xl font-light '> Movies</h2>
                <ul className='medialist'>
                <MediaList medialist={mediaList.filter((media)=> media.category === 'Movie')}/>
                </ul>
        </section>
      </main>
    )
}

export default Movies
