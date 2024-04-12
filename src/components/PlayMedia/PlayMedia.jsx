'use client'

import Image from 'next/image'

const PlayMedia = ({url}) => {

const handlePlay = () => {
    console.log('playing...');
    console.log({url});
}
    return (
        <div className='absolute inset-0 hidden place-content-center bg-black/50 group-hover:grid'>
        <button className='flex items-center gap-3 bg-playBgHalfOpacity p-2 w-[110px] rounded-full' 
        onClick={handlePlay}>
            <Image src='/assets/icon-play.svg' width={33} height={27}/>
            <span className="text-lg font-medium">Play</span>
        </button>
        </div>
    )
}

export default PlayMedia
