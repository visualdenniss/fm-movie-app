import { Suspense } from 'react';
import Loading from '../../../components/loading'
import Bookmarked from './Bookmarked';
import Search from '@/components/Search/Search';

const BookmarkedPage = async ({searchParams}) => {
    const query = searchParams?.query || '';
    return (
        <div className='flex-1 px-4 flex flex-col md:pt-5 gap-6'>
        <Search placeholder={"Bookmarks"}/>
        <section className=' space-y-6 lg:mx-0'>
        <h2 className='text-[20px] md:text-3xl font-light'>Bookmarked</h2>
            <ul className='medialist'>
                <Suspense fallback={<Loading/>}>
                    <Bookmarked query={query}/>
                </Suspense>
            </ul>
      </section>
      </div>
    )
}

export default BookmarkedPage