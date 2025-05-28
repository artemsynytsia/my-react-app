import styles from "./Contacts.module.css";
import type { ReactNode } from "react";

export const TenthPage = ({
  text1,
  text2,
  text3,
  img,
}: {
  text1: string;
  text2: ReactNode;
  text3: string;
  img: string;
}) => {
  return (
    <div className={styles.containerTenthPage}>
      <img
        src={img}
        alt="Фонове зображення 10"
        className={styles.backgroundImage}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.textTitle}>{text1}</h1>
        <p className={styles.textMain}>{text2}</p>
        <h2 className={styles.textNumber}>{text3}</h2>
      </div>
    </div>
  );
};
