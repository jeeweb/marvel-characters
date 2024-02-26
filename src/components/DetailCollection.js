import styles from "./DetailCollection.module.css";

function DetailCollection({ subject, api }) {
  return (
    <>
      {api.length > 0 ? (
        <article className={styles.detail_collection}>
          <h3 className={styles.detail_collection_title}>
            <span>{subject.toUpperCase()}</span>
          </h3>
          <ul className={styles.detail_collection_list}>
            {api.map((item) => {
              return (
                <li className={styles.detail_collection_item}>{item.name}</li>
              );
            })}
          </ul>
        </article>
      ) : null}
    </>
  );
}
export default DetailCollection;
