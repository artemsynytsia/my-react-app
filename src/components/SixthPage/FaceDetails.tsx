import { useState } from "react";
import styles from "./FaceDetails.module.css";
import { DetailsSection } from "../DetailsSection/DetailsSection.tsx";

type SixthPageProps = {
  img: string;
  title: string;
  text1: string;
  text2: string;
};

export const SixthPage = ({ img, title, text1, text2 }: SixthPageProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [renderDetails, setRenderDetails] = useState(false);

  const toggleDetails = () => {
    if (!showDetails) {
      setRenderDetails(true);
      setTimeout(() => setShowDetails(true), 10);
    } else {
      setShowDetails(false);
    }
  };

  const onTransitionEnd = () => {
    if (!showDetails) {
      setRenderDetails(false);
    }
  };

  return (
    <div
      className={`${styles.containerSixthPage} ${
        showDetails ? styles.containerSixthPageExpanded : ""
      }`}
    >
      <img
        src={img}
        alt="Фонове зображення 6"
        className={`${styles.backgroundImage} ${
          showDetails ? styles.backgroundImageShifted : ""
        }`}
      />

      <div className={styles.containerText}>
        <h1 className={styles.titleText}>{title}</h1>
        <div className={styles.priceContainer}>
          <h1 className={styles.price}>{text1}</h1>
          <p className={styles.online}>{text2}</p>
        </div>

        <button onClick={toggleDetails} className={styles.detailsButton}>
          {showDetails ? "СХОВАТИ" : "ДЕТАЛЬНІШЕ"}
        </button>
      </div>

      {renderDetails && (
        <div
          className={`${styles.detailsContainer} ${
            showDetails ? styles.open : ""
          }`}
          onTransitionEnd={onTransitionEnd}
        >
          <DetailsSection
            visible={showDetails}
            title1="ЩО ЦЕ?"
            text1="Детальний аналіз ваших зовнішніх даних та особливостей фігури для створення гармонійного стилю, що підкреслює вашу індивідуальність."
            text2=""
            title2="ЩО ВИ ОТРИМУЄТЕ?"
            items1={[
              "Ясність у тому, які речі справді необхідні",
              "Зібрані образи без зайвих витрат і безладу",
              "Продуманий план для грамотного оновлення гардероба",
            ]}
            title3="ЯК ВІДБУВАЄТЬСЯ?"
            items2={[
              "Анкетування",
              "Систематизація гардероба за категоріями",
              "Визначення речей для адаптації або вилучення",
              "Створення шопінг-листа для оновлення",
              "Формування 50 готових образів",
              "Супровід протягом місяця після розбору",
            ]}
          />
        </div>
      )}
    </div>
  );
};
