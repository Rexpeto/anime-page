import { AnimeResult } from "@/models";
import Image from "next/image";
import GetIcon from "./getIcons";

const Card = ({ anime }: { anime: AnimeResult }) => {
  return (
    <div className="relative max-w-sm w-full rounded">
      <div className="relative h-80 w-full">
        <Image
          src={anime.image.original}
          alt={anime.name}
          className="rounded-xl object-contain"
          fill
        />
      </div>

      <div className="flex flex-col gap-3 py-4">
        <div className="flex justify-between items-center gap-1">
          <h2 className="text-white text-xl font-bold line-clamp-1 w-full">
            {anime.name}
          </h2>

          <div className="bg-[#161921] py-1 px-2 rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <GetIcon icon="CiPlay1" />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <GetIcon icon="CiStar" />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
