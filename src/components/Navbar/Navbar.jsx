import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import NavLink from './Link';
import Logout from '@/app/(auth)/logout';
import { auth } from '@/lib/auth';

const links = [
    {
        title: "Homepage",
        path: "/",
        icon: "home",
    },
    {
        title: "Movies",
        path: "/movies",
        icon: "movies",
    },
    {
        title: "Tv-Series",
        path: "/tv-series",
        icon: "tv-series",
    },
    {
        title: "AnimeAPI",
        path: "/animesapi",
        icon: "anime",
    },
    {
        title: "tmdb",
        path: "/tmdb",
        icon: "tmdb",
    },
    {
        title: "Bookmarked",
        path: "/bookmarked",
        icon: "bookmarked",
    },
]

const Navbar = async () => {

    const session = await auth();

    return (
        <div className={`bg-bgSecondary md:p-8 p-4 flex md:flex-col max-md:justify-between items-center md:rounded-lg ${styles.navbar}`}>
                <Link href='/'>
                    <Image src="/assets/logo.svg" width={32} height={25}>
                    </Image>
                </Link>
            <div className='flex md:flex-col md:gap-10 sm:gap-8 gap-6 md:mt-[75px]'>
                {links.map((link) => (
                    <NavLink link={link}/>
                ))}
            </div>
            <div className='md:mt-auto flex flex-col gap-6 items-center'>
                { session && 
                    <Logout/>}
                <Link href='/login'>
                    {session ? ( <Image src={session.user.image ? session.user.image : "/assets/noavatar.png"} className='border rounded-full hover:scale-[1.2] hover:opacity-75 transition-all duration-500 ease-in-out'  width={30} height={30}>
                    </Image>): (
                    <Image src="/assets/image-avatar.png" className='border rounded-full hover:scale-[1.2] hover:opacity-75 transition-all duration-500 ease-in-out'  width={30} height={30}>
                    </Image>) }
 
                </Link>
            </div>
        </div>
    )
}

export default Navbar

