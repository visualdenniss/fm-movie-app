import Image from 'next/image'
import Bookmark from '../Bookmark/Bookmark';
import PlayMedia from '../PlayMedia/PlayMedia';
import { getIconPath } from '@/lib/utils';

const Thumbnail = ({media}) => {

    const iconPath = getIconPath(media.category);

    return (
        <li key={media._id}>
            <figure className='flex flex-col gap-2'>
                <div className='group cursor-pointer relative overflow-hidden rounded-lg lg:w-[280px] lg:h-[174px] md:w-[220px] md:h-[140px] w-[164px] h-[110px]'>
                    <Image src={media.thumbnail.regular.large.substring(1)} fill alt=""/>
                    <Bookmark isBookmarked = {media.isBookmarked} id={media._id.toString()} />
                    <PlayMedia/>
                </div>
                <figcaption className='z-50 flex flex-col gap-[0.3125rem]'>
                    <p className='flex items-center gap-2 text-[11px] font-light opacity-75 md:text-body-sm'>
                        <span>{media.year}</span>
                        <span>•</span>
                        <span className='flex items-center gap-1'>
                            <Image src={iconPath} width={12} height={14} alt=""></Image>
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
