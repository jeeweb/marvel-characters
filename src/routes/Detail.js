import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import styles from "./Detail.module.css";
import DetailCollection from "../components/DetailCollection";
import LinkBack from "../components/LinkBack";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCharacter = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setCharacter(json.data.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  console.log(character);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className={styles.detail_container}>
            <LinkBack />
            <div className={styles.detail_character_info}>
              <div className={styles.detail_img_box}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  className={styles.detail_img}
                />
              </div>
              <div className={styles.detail_info_box}>
                <h2 className={styles.detail_title}>{character.name}</h2>
                <div className={styles.detail_link_box}>
                  {character.urls.map((url) => {
                    return (
                      <a
                        href={url.url}
                        className={styles.moreDetail_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {url.type.toUpperCase()}
                      </a>
                    );
                  })}
                </div>
                <div className={styles.detail_collections}>
                  <DetailCollection
                    subject={"Comics"}
                    api={character.comics.items}
                  />
                  <DetailCollection
                    subject={"Events"}
                    api={character.events.items}
                  />
                  <DetailCollection
                    subject={"Series"}
                    api={character.series.items}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
