import Image from 'next/image'
// import Bookmark from '../Bookmark/Bookmark';
import PlayAnime from '../PlayAnime';
import { getIconPath } from '@/lib/utils';
import { MotionLi } from './MotionLi';
import { AnimeEpisodesIcon, Star } from '../Navbar/Icon';

const AnimeThumbnail = ({anime}) => {

    const variants = {
        hidden: {opacity:0}, 
        visible: {opacity: 1},
      
      }

    const iconPath = getIconPath(anime.category);

    return (
        <MotionLi 
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
            //   delay: index * 0.25,
            ease: 'easeInOut',
            duration: 1,
            }}
            viewport={{amount:0}}
            key={anime.id}>
            <figure className='flex flex-col gap-2'>
                <div className='group cursor-pointer relative overflow-hidden rounded-lg lg:w-[280px] lg:h-[420px] md:w-[220px] md:h-[330px] w-[164px] h-[246px]'>
                    <Image style={{objectFit:'cover'}} src={`https://shikimori.one${anime.image.original}`} fill alt={anime.name}/>
                    {/* <Bookmark isBookmarked = {anime.isBookmarked} id={anime.id.toString()} /> */}
                    <PlayAnime id={anime.id}/>
                </div>
                <figcaption className='z-50 flex flex-col gap-[0.3125rem]'>
                    <p className='flex items-center gap-2 text-[11px] font-light opacity-75 md:text-body-sm'>
                        <span>{anime.aired_on.substring(0, 4)}</span>
                        <span>•</span>
                        <span className='flex items-center gap-1'>
                            <AnimeEpisodesIcon/>
                            Anime
                        </span>
                        <span>•</span>
                        <Star/>
                        <span>{anime.score}</span>
                    </p>
                    <h4 className='text-sm font-medium md:text-lg lg:w-[280px] md:w-[220px] w-[164px]'>{anime.name}</h4>
                </figcaption>
            </figure>
        </MotionLi>
    )
}

export default AnimeThumbnail


