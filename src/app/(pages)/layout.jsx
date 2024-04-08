import Navbar from "@/components/Navbar/Navbar"
import Search from "@/components/Search/Search"
import Notification from "@/components/Toaster/Toaster"

const layout = ({children}) => {
    return (
        <>
        <Notification/>
        <Navbar/>
          {children}
        </>
    )
}

export default layout
