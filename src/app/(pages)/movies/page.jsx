import Movies from './Movies'
import { Suspense } from 'react';
import Loading from '../../../components/loading'
import Search from '@/components/Search/Search';

const MoviesPage = ({searchParams}) => {
    const query = searchParams?.query || '';
    return (
      <div className='flex-1 px-4 flex flex-col md:pt-5 gap-6'>
          <Search placeholder={"Movies"}/>
      <main className='h-screen max-h-screen overflow-y-scroll'>
            <section className=' space-y-6 lg:mx-0'>
            <h2 className='text-[20px] md:text-3xl font-light '> Movies</h2>
                <ul className='medialist'>
                <Suspense fallback={<Loading/>}>
                    <Movies query={query}/>
                </Suspense>
                </ul>
        </section>
      </main>
      </div>
    )
}

export default MoviesPage
