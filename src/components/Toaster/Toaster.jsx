'use client'

import { Toaster } from 'sonner'


const Notification = () => {
    return (
        <div className='absolute'>
            <Toaster expand={true} position="top-center"/>
        </div>
    )
}

export default Notification
