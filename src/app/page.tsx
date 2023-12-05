import { Card, LoadMore } from "@/components";
import { AnimeResult } from "@/models";
import { fetchAnime } from "@/services";

const Home = async () => {
  const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeResult) => (
          <Card key={item.id} anime={item} />
        ))}
      </section>

      <LoadMore />
    </main>
  );
};

export default Home;
