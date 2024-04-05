'use client'

import { usePathname } from 'next/navigation'
import Icon from './Icon';
import Link from 'next/link'

const NavLink = ({link}) => {
    const pathName = usePathname()
    const textColorClass = pathName === link.path ? 'text-text' : 'text-bgSoft';
    
    return (
        <li className={`hover:text-accent transition-all ease-in-out duration-300 list-none ${textColorClass}`}>
            <Link href={link.path} key={link.title}>
                <Icon icon={link.icon} alt={link.title}/>
            </Link>
        </li>
    )
}

export default NavLink
