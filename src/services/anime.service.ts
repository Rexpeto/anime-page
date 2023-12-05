"use server";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `${process.env.URL_API}/api/animes?page=${page}&limit=10&order=popularity`,
  );

  const data = await response.json();

  return data;
};
