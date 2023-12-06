"use client"

import { useInView } from "react-intersection-observer";
import GetIcon from "./getIcons";
import { useEffect, useState } from "react";
import { fetchAnime } from "@/services";
import { AnimeResult } from "@/models";
import { Card } from ".";


let page = 2;

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeResult[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => setData([...data, ...res]));
      page++;
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeResult) => (
          <Card key={item.id} anime={item} />
        ))}
      </section>

      <section ref={ref} className="flex justify-center items-center w-full">
        <GetIcon
          icon="ImSpinner8"
          className="text-blue-700 text-3xl animate-spin"
        />
      </section>
    </>
  );
};

export default LoadMore;
