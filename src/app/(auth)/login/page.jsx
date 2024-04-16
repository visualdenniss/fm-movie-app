import Link from 'next/link'
import Image from 'next/image'
import { auth, signIn } from '@/lib/auth'
import { redirect } from 'next/navigation'


const LoginPage = async () => { 

    const session = await auth(); 

    if(session) {
        redirect(`/user/profile`)
    }

    const handleGithubLogin = async () => {
        "use server"
        await signIn("github", ({redirectTo: '/'}))

    }
    
    return (
            <form action={handleGithubLogin} className='bg-bgSecondary p-8 rounded-lg flex flex-col w-full md:max-w-[400px] max-w-[300px]'>
                <h4 className='text-3xl font-light text-center'>Sign In</h4>
                {/* <input type="email" placeholder="Email address" name="email" className='bg-transparent p-3 border-b-[0.5px] mb-3 placeholder:font-light font-light' />
                <input type="password" placeholder="Password" name="password" 
                className='bg-transparent p-3 border-b-[0.5px] placeholder:font-light font-light'/> */}
                <button className='bg-white flex items-center gap-3 justify-center text-bg mt-8 p-3 rounded-md text-base font
                hover:opacity-75 hover:bg-text transition-all ease-in-out duration-500'>
                <Image src="/github.png"
                width={35}
                height={35}
                />
                Continue with Github
                </button>
                {/* <p className='mt-6 text-center font-light text-sm '>
                    Don't have an account? 
                    <span className='ml-1 text-accent'>
                        <Link href='/sign-up'>Sign Up</Link>
                    </span>
                </p> */}
            </form>

    )
}

export default LoginPage
