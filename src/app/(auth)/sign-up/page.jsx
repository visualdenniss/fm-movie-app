import Link from 'next/link'

const SignUp = () => {
    return (
        <form action="" className='bg-bgSecondary p-8 rounded-lg flex flex-col w-full md:max-w-[400px] max-w-[300px]'>
        <h4 className='text-3xl font-light mb-12 '>Sign Up</h4>
        <input type="email" placeholder="Email address" name="email" className='bg-transparent p-3 border-b-[0.5px] mb-3 placeholder:font-light font-light' />
        <input type="password" placeholder="Password" name="password" 
        className='bg-transparent p-3 border-b-[0.5px] placeholder:font-light mb-3 font-light'/>
        <input type="password" placeholder="Repeat Password" name="passwordRepeat" 
        className='bg-transparent p-3 border-b-[0.5px] placeholder:font-light font-light'/>
        <button className='bg-accent text-text mt-10 p-3 rounded-md text-base font-light hover:text-bgSecondary hover:bg-text transition-colors ease-in-out duration-500'>
        Create an account
        </button>
        <p className='mt-6 text-center font-light text-sm'>
            Already have an account?
            <span className='ml-1 text-accent'>
                <Link href='/login'>Login</Link>
            </span>
        </p>
    </form>
    )
}

export default SignUp
