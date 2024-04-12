
import PlayMedia from "@/components/PlayMedia/PlayMedia";
import { getMoviesFromTMDB } from "@/lib/action"
import { getIconPath } from "@/lib/utils";
import Image from 'next/image'

const TmdbList = async () => {
    const data = await getMoviesFromTMDB();
        return (
            data.results.map((movie)=> (
                <li key={movie.id}>
                    <figure className='flex flex-col gap-2'>
                        <div className='group cursor-pointer relative overflow-hidden rounded-lg lg:w-[280px] lg:h-[420px] md:w-[220px] md:h-[330px] w-[164px] h-[246px]'>
                            <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} style={{objectFit:'cover',objectPosition: "center"}} fill alt=""/>
                            {/* <Bookmark isBookmarked = {media.isBookmarked} id={media._id.toString()} /> */}
                            <PlayMedia id={movie.id}/>
                        </div>
                        <figcaption className='z-50 flex flex-col gap-[0.3125rem]'>
                            <p className='flex items-center gap-2 text-[11px] font-light opacity-75 md:text-body-sm'>
                                <span>{movie.release_date.substring(0, 4)}</span>
                                <span>•</span>
                                <span className='flex items-center gap-1'>
                                    <Image src={getIconPath('Movie')} width={12} height={14} alt=""></Image>
                                    Movie
                                </span>
                                <span>•</span>
                                <span>{movie.vote_average}</span>
                            </p>
                            <h4 className='text-sm font-medium md:text-lg lg:w-[280px] md:w-[220px] w-[164px]'>{movie.title}</h4>
                        </figcaption>
                    </figure>
                </li>
            ))
        )
}

export default TmdbList

