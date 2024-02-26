import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Character from "../components/Character";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);

  return (
    <div className={styles.main_container}>
      <h2 className={styles.main_title}>Who is your Favorite?</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.character_list}>
          {characters.map((character) => {
            if (character.thumbnail.path.slice(-9) !== "available") {
              return (
                <Character
                  key={character.id}
                  id={character.id}
                  thumbnail={character.thumbnail}
                  name={character.name}
                />
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
export default Home;
