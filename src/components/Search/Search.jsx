'use client'

import Image from 'next/image'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({placeholder}) => {

    const searchParams = useSearchParams(); 
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
        replace(`${pathname}?${params.toString()}`);
    }, 300)
    return (
        <div className='flex w-full gap-6'>
            <Image src='/assets/icon-search.svg' className='object-contain' width={32} height={32} alt=""/>
            <input className='bg-transparent text-white p-3 flex-1 font-light' type="text" placeholder={`Search for ${placeholder}`} name='search'
            onChange={(e)=>{handleChange(e.target.value)}}
            defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}

export default Search
