import Image from 'next/image'
import Bookmark from '../Bookmark/Bookmark';
import PlayMedia from '../PlayMedia/PlayMedia';

const Thumbnail = ({media}) => {


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
            <figure className='flex flex-col gap-2'>
                <div className='group cursor-pointer relative overflow-hidden rounded-lg lg:w-[280px] lg:h-[174px] md:w-[220px] md:h-[140px] w-[164px] h-[110px]'>
                    <Image src={media.thumbnail.regular.large.substring(1)} fill/>
                    <Bookmark isBookmarked = {media.isBookmarked} />
                    <PlayMedia/>
                </div>
                <figcaption className='z-50 flex flex-col gap-[0.3125rem]'>
                    <p className='flex items-center gap-2 text-[11px] font-light opacity-75 md:text-body-sm'>
                        <span>{media.year}</span>
                        <span>•</span>
                        <span className='flex items-center gap-1'>
                            <Image src={iconPath} width={12} height={14}></Image>
                            {media.category}
                        </span>
                        <span>•</span>
                        <span>{media.rating}</span>
                    </p>
                    <h4 className='text-sm font-medium md:text-lg'>{media.title}</h4>
                </figcaption>
            </figure>
        </li>
    )
}

export default Thumbnail
