import React from 'react'
import LoadMore from '@/components/LoadMore/LoadMore';

const AnimeAPI = async () => {
    
    return (
        <div className='flex-1 px-4 flex flex-col md:pt-5 gap-6'>

        <main className='h-screen max-h-screen overflow-y-scroll'>
        <section className=' space-y-6 lg:mx-0'>
        <h2 className='text-[20px] md:text-3xl font-light '> Anime </h2>
        <ul className="medialist">
            <LoadMore></LoadMore>
        </ul>
        </section>
        </main>
        </div>
    )
}

export default AnimeAPI
