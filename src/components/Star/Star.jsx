'use client'

import { Star, StarFull } from "../Navbar/Icon"
import { toast } from 'sonner'
import { toggleUserBookmarks } from "@/lib/action"
import { useRouter } from "next/navigation"

const StarHandler = ({user, id, bookmarked}) => { 
    const router = useRouter();
    const handleStarred = async () => {
        const updateType = await toggleUserBookmarks(user.email,id);
        router.refresh();
        toast(`Bookmark ${updateType}`)
      }
    return (
        <button className='absolute right-2 top-2 z-50 grid h-8 w-8 cursor-pointer place-content-center rounded-full bg-bgHalfOpacity transition-all hover:bg-text duration-500 ease-in-out hover:text-bg md:right-4 md:top-4' onClick={handleStarred}>
            {
                bookmarked ? <StarFull/> : <Star/>
            }
        </button>
    )
}

export default StarHandler
