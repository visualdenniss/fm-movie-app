import Navbar from "@/components/Navbar/Navbar"
import Search from "@/components/Search/Search"

const layout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div className='flex-1 px-4 flex flex-col md:pt-5 gap-6'>
          <Search/>
          {children}
        </div>
        </>
    )
}

export default layout
