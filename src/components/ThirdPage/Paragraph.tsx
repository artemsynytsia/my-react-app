import styles from "./Paragraph.module.css";

export const ThirdPage = ({
  img,
  text1,
  text2,
}: {
  img: string;
  text1: string;
  text2: string;
}) => {
  return (
    <div className={styles.containerThirdPage}>
      <img
        src={img}
        alt="Фонове зображення 3"
        className={styles.backgroundImage}
      />
      <div className={styles.textContainer}>
        <p className={styles.text}>{text1}</p>
        <p className={styles.text}>{text2}</p>
      </div>
    </div>
  );
};
