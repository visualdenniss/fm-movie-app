import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import NavLink from './Link';

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
        title: "Bookmarked",
        path: "/bookmarked",
        icon: "bookmarked",
    },
]

const Navbar = () => {
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
            <Link href='/login' className='md:mt-auto'>
                <Image src="/assets/image-avatar.png" className='border rounded-full' width={30} height={30}>
                </Image>
            </Link>
        </div>
    )
}

export default Navbar

