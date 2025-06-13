import styles from "./ServiceText.module.css";
import { useResponsive } from "../../hook/useResponsive";

type FourthPageProps = {
  img: string;
  text: string;
  mobileText: string; //  для мобілки
};

export const FourthPage = ({ img, text, mobileText }: FourthPageProps) => {
  const { isMobile } = useResponsive();

  return (
    <div className={styles.containerFourthPage}>
      <img
        src={img}
        alt="Фонове зображення 4"
        className={styles.backgroundImage}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.text}>{isMobile ? mobileText : text}</h1>
      </div>
    </div>
  );
};
