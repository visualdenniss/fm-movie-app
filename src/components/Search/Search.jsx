import Image from 'next/image'

const Search = () => {
    return (
        <div className='flex w-full gap-6'>
            <Image src='/assets/icon-search.svg' className='object-contain' width={32} height={32}/>
            <input className='bg-transparent text-white p-3 flex-1 font-light' type="text" placeholder='Search for movies or TV Series' name='search'/>
        </div>
    )
}

export default Search
