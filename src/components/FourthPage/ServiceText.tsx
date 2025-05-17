import styles from "./ServiceText.module.css";

export const FourthPage = ({ img, text }: { img: string; text: string }) => {
  return (
    <div className={styles.containerFourthPage}>
      <img
        src={img}
        alt="Фонове зображення 4"
        className={styles.backgroundImage}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.text}>{text}</h1>
      </div>
    </div>
  );
};
