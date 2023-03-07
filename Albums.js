import useFetch from "./useFetch";

const Album = () => {
  const [albums] = useFetch("https://jsonplaceholder.typicode.com/albums");

  return (
    <>
      <h1>Album</h1>
      {albums &&
        albums.map((album, i) => {
          return <li key={i}>{album.title}</li>;
        })}
    </>
  );
};
export default Album;
