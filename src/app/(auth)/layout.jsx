import Link from 'next/link'
import Image from 'next/image'


const layout = ({children}) => {
    return (
        <div className='flex flex-col items-center w-full gap-20 pt-[60px]'>
            <Link href='/'>
                <Image src='/assets/logo.svg' width={33} height={25}></Image>
            </Link>
            {children}
        </div>
    )
}

export default layout
