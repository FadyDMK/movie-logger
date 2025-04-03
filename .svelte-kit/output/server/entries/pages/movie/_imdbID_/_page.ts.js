const load = async ({ params, fetch }) => {
  const imdbID = params.imdbID;
  const apiKey = "4b24ca2c";
  const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
  const movie = await res.json();
  return { movie };
};
export {
  load
};
