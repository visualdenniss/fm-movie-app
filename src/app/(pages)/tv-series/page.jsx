import TvSeries from './TvSeries';
import { Suspense } from 'react';
import Loading from '../loading'
import Search from '@/components/Search/Search';

const TvSeriesPage = ({searchParams}) => {
    const query = searchParams?.query || '';
    return (

        <div className='flex-1 px-4 flex flex-col md:pt-5 gap-6'>
        <Search placeholder={"TV Series"}/>
        <section className=' space-y-6 lg:mx-0'>
        <h2 className='text-[20px] md:text-3xl font-light'>TV Series</h2>
            <ul className='medialist'>
                <Suspense fallback={<Loading/>}>
                    <TvSeries query={query}/>
                </Suspense>
            </ul>
      </section>
      </div>
    )
}

export default TvSeriesPage
