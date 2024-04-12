import Image from 'next/image'
import Bookmark from '../Bookmark/Bookmark';
import PlayMedia from '../PlayMedia/PlayMedia';
import { getIconPath } from '@/lib/utils';

const AnimeThumbnail = ({anime, index}) => {

    const iconPath = getIconPath(anime.category);
    
    return (
        <li key={anime.id}>
            <figure className='flex flex-col gap-2'>
                <div className='group cursor-pointer relative overflow-hidden rounded-lg lg:w-[280px] lg:h-[174px] md:w-[220px] md:h-[140px] w-[164px] h-[110px]'>
                    <Image style={{objectFit:'cover'}} src={`https://shikimori.one${anime.image.original}`} fill alt={anime.name}/>
                    {/* <Bookmark isBookmarked = {anime.isBookmarked} id={anime.id.toString()} /> */}
                    <PlayMedia/>
                </div>
                <figcaption className='z-50 flex flex-col gap-[0.3125rem]'>
                    <p className='flex items-center gap-2 text-[11px] font-light opacity-75 md:text-body-sm'>
                        <span>{anime.aired_on.substring(0, 4)}</span>
                        <span>•</span>
                        <span className='flex items-center gap-1'>
                            <Image src={iconPath} width={12} height={14} alt=""></Image>
                            Anime
                        </span>
                        <span>•</span>
                        <span>{anime.score}</span>
                    </p>
                    <h4 className='text-sm font-medium md:text-lg lg:w-[280px] md:w-[220px] w-[164px]'>{anime.name}</h4>
                </figcaption>
            </figure>
        </li>
    )
}

export default AnimeThumbnail
