import { Link } from "react-router-dom";
import styles from "./Character.module.css";

function Character(props) {
  const { id, thumbnail, name } = props;
  return (
    <div key={id} className={styles.character_item}>
      <p className={styles.character_name}>{name}</p>
      <Link to={`/character/${id}`} className={styles.character_link}>
        <div className={styles.character_img_box}>
          <img
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
            className={styles.character_img}
          />
        </div>
      </Link>
    </div>
  );
}

export default Character;
