import MediaList from "@/components/MediaList/MediaList";
import Navbar from "@/components/Navbar/Navbar";
import Search from "@/components/Search/Search";
import TrendingList from "@/components/TrendingList/TrendingList";
import { getLocalData } from "@/lib/localdata";

export default async function Home() {

  const data = await getLocalData();

  const trendingList = data.filter((media)=> media.isTrending)

  return (
    <>
    <Navbar/>
    <div className='flex-1 px-4 flex flex-col md:pt-5 gap-6'>
      <Search/>
      <main className="h-screen max-h-screen overflow-y-scroll">
      {/* Search for movies or TV series */}
        <section className='space-y-6 mb-6'>
          <h1 className='text-[20px] md:text-3xl font-light'>Trending</h1>
            {/* <!-- Display trending shows --> */}
            <ul className='flex gap-3 md:gap-10 trendingList overflow-x-scroll'>
              <TrendingList medialist={trendingList}/>
            </ul>
        </section>
        <section className=' space-y-6 lg:mx-0'>
          <h2 className='text-[20px] md:text-3xl font-light '> Recommended for you</h2>
              {/* <!-- Display recommended shows --> */}
              <ul className='medialist'>
                <MediaList medialist={data}/>
              </ul>
        </section>
      </main>
    </div>
    </>
  );
}
