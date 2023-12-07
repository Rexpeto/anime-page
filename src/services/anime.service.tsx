"use server";

import { Card } from "@/components";
import { AnimeResult } from "@/models";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `${process.env.URL_API}/api/animes?page=${page}&limit=10&order=popularity`,
  );

  const data = await response.json();

  return data.map((item: AnimeResult, index: number) => (
    <Card key={item.id} anime={item} index={index} />
  ));
};
