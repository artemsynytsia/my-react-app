import styles from "./mainText.module.css";

export const FirstPage = ({
  img,
  title,
  subtitle,
}: {
  img: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className={styles.containerFirstPage}>
      <img
        src={img}
        alt="Фонове зображення"
        className={styles.backgroundImage}
      />

      <div className={styles.containerText}>
        <h1 className={styles.titleText}>{title}</h1>
        <h2 className={styles.subtitleText}>{subtitle}</h2>
      </div>
    </div>
  );
};
