import Navbar from "@/components/Navbar/Navbar";
import Search from "@/components/Search/Search";
import TrendingList from "@/components/TrendingList/TrendingList";
import { Suspense } from "react";
import LoadingTrending from "@/components/TrendingList/Loading";
import RecommendedList from "@/components/Recommended/Recommended";
import Loading from "./(pages)/loading";
// import { getLocalData } from "@/lib/localdata";

export default async function Home({searchParams}) {
  const query = searchParams?.query || '';
  // const data = await getLocalData();

  return (
    <>
    <Navbar/>
    <div className='flex-1 px-4 flex flex-col md:pt-5 gap-6'>
      <Search placeholder={"TV Series or Movies"}/>
      <main className="h-screen max-h-screen overflow-y-scroll">
        {!query && <section className='space-y-6 mb-6'>
          <h1 className='text-[20px] md:text-3xl font-light'>Trending</h1>
            <ul className='flex gap-3 md:gap-10 trendingList overflow-x-scroll'>
              <Suspense fallback={<LoadingTrending/>}>
                <TrendingList/>
              </Suspense>
            </ul>
        </section>}
        <section className=' space-y-6 lg:mx-0'>
          <h2 className='text-[20px] md:text-3xl font-light '> Recommended for you</h2>
              <ul className='medialist'>
              <Suspense fallback={<Loading/>}>
                  <RecommendedList query={query}/>
              </Suspense>
              </ul>
        </section>
      </main>
    </div>
    </>
  );
}
