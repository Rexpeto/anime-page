import { AnimeResult } from "@/models";
import Image from "next/image";
import GetIcon from "./getIcons";
import { MotionDiv } from "./motionDiv";

const Card = ({ anime, index }: { anime: AnimeResult; index: number }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: index * 0.25,
        ease: "easeInOut",
      }}
      viewport={{ amount: 0 }}
      className="relative max-w-sm w-full rounded"
    >
      <div className="relative h-80 w-full">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
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
    </MotionDiv>
  );
};

export default Card;
