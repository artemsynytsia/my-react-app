import { useState, useEffect } from "react";
import styles from "./GarderobeText.module.css";
import { DetailsSection } from "../DetailsSection/DetailsSection.tsx";

type FifthPageProps = {
  img: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  details: string;
};

export const FifthPage = ({
  img,
  title,
  text1,
  text2,
  text3,
  text4,
  details,
}: FifthPageProps) => {
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
      className={`${styles.containerFifthPage} ${
        showDetails ? styles.containerFifthPageExpanded : ""
      }`}
    >
      <img
        src={img}
        alt="Фонове зображення 5"
        className={`${styles.backgroundImage} ${
          showDetails ? styles.backgroundImageShifted : ""
        }`}
      />

      <div className={styles.containerText}>
        <h1 className={styles.titleText}>{title}</h1>
        <div className={styles.priceContainer}>
          <h1 className={styles.price}>{text1}</h1>
          <p className={styles.online}>{text2}</p>
          <h1 className={styles.price}>{text3}</h1>
          <p className={styles.online}>{text4}</p>
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
            text1="Комплексний аналіз вашого гардероба: від впорядкування речей до формування стильних і функціональних образів із урахуванням нових елементів."
            text2="Після цього ви з легкістю складатимете актуальні комплекти, забувши про дилему «що одягнути»."
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
