import { FirstPage } from "../FirstPage/mainText";
import styles from "./DetailsSection.module.css";

type DetailsSectionProps = {
  visible: boolean;
  title1: string;
  text1: string;
  text2: string;
  title2: string;
  items1: string[];
  title3: string;
  items2: string[];
};

export const DetailsSection = ({
  visible,
  title1,
  text1,
  text2,
  title2,
  items1,
  title3,
  items2,
}: DetailsSectionProps) => {
  return (
    <div
      className={`${styles.detailsBlock} ${
        visible ? styles.detailsVisible : styles.detailsHidden
      }`}
    >
      <div className={styles.FirstTextSection}>
        <h1 className={styles.titleText}>{title1}</h1>
        <p className={styles.textParagraph1}>{text1}</p>
        <p className={styles.textParagraph2}>{text2}</p>
      </div>

      <div className={styles.SecondTextSection}>
        <h1 className={styles.titleText}>{title2}</h1>
        <ul>
          {items1.map((item, index) => (
            <li className={styles.textInfo} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.ThirdTextSection}>
        <h1 className={styles.titleText}>{title3}</h1>
        <ul className={styles.textInfo}>
          {items2.map((item, index) => (
            <li className={styles.textInfo} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
