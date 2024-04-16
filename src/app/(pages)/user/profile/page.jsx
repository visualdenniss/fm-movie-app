import { signOut, auth } from "@/lib/auth"
import Image from "next/image"
import { redirect } from 'next/navigation'

const User = async () => {
    const session = await auth()
    if(!session) {
        redirect('/')
    }
    const handleGithubLogOut = async () => {
        "use server"
        await signOut("github")
    }

    return (
        <div className='flex justify-center items-center w-full'>
                <div class="w-full max-w-sm bg-bgSecondary rounded-lg shadow px-4 pt-8">
                    <div class="flex flex-col items-center pb-10">
                        <Image class="mb-3 rounded-full shadow-lg" src={session.user.image} width={80} height={80} alt="User Avatar"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session.user.name}</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{session.user.email}</span>
                        <form action={handleGithubLogOut} class="flex mt-4 md:mt-6">
                            <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-accent hover:bg-white hover:text-bg transition-all duration-300 ease-in-out rounded-lg ">Logout</button>
                        </form>
                    </div>
                </div>

        </div>
    )
}

export default User
