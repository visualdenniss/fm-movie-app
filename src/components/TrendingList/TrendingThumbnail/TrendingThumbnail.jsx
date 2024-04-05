import Bookmark from '@/components/Bookmark/Bookmark';
import PlayMedia from '@/components/PlayMedia/PlayMedia';
import Image from 'next/image'

const TrendingThumbnail = ({media}) => {


    let iconPath; 

    switch (media.category) {
        case 'Movie':
            iconPath = '/assets/icon-nav-movies.svg';
            break;
        case 'TV Series':
            iconPath = '/assets/icon-nav-tv-series.svg';
            break;
        default: 
            iconPath = '/assets/logo.svg'
    }

    return (
        <li>
            <figure className='relative flex flex-col gap-2'>
                <div className='group cursor-pointer relative overflow-hidden rounded-lg  md:w-[470px] md:h-[230px] w-[240px] h-[140px]'>
                    <Image src={media.thumbnail.regular.large.substring(1)} fill style={{objectFit:'cover'}}/>
                    <Bookmark isBookmarked = {media.isBookmarked} />
                    <PlayMedia/>
                </div>
                <figcaption className='absolute bottom-[20px] left-4 z-50 flex flex-col gap-1'>
                    <p className='flex items-center gap-2 text-[11px] font-light opacity-75 md:text-sm'>
                        <span>{media.year}</span>
                        <span>•</span>
                        <span className='flex items-center gap-1'>
                            <Image src={iconPath} width={12} height={14}></Image>
                            {media.category}
                        </span>
                        <span>•</span>
                        <span>{media.rating}</span>
                    </p>
                    <h4 className='text-base font-medium md:text-2xl'>{media.title}</h4>
                </figcaption>
            </figure>
        </li>
    )
}

export default TrendingThumbnail