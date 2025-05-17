import styles from "./infoText.module.css";

export const SecondPage = ({
  img,
  title,
  subtitle,
  items,
}: {
  img: string;
  title: string;
  subtitle: string;
  items: string[];
}) => {
  return (
    <div className={styles.containerSecondPage}>
      <div className={styles.textContainer}>
        <h1 className={styles.titleText}>{title}</h1>
        <h2 className={styles.subtitleText}>{subtitle}</h2>
      </div>
      <img
        src={img}
        alt="Фонове зображення 2"
        className={styles.backgroundImage}
      />
      <div className={styles.listService}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
