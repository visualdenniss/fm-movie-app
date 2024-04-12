"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "@/lib/action";
import AnimeThumbnail from '../Thumbnail/AnimeThumbnail'


let page = 1;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);


  return (
      <>
      {data.map((anime, index)=> {
                return  <AnimeThumbnail anime={anime} index={index} key={anime.id}/>
            })}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
      </>
  );
}

export default LoadMore;
