import { FirstPage } from "./components/FirstPage/mainText";
import { SecondPage } from "./components/SecondPage/infoText";
import { ThirdPage } from "./components/ThirdPage/Paragraph";
import { FourthPage } from "./components/FourthPage/ServiceText";
import { FifthPage } from "./components/FifthPage/GarderobeText";

import mainPageStyles from "./components/FirstPage/mainText.module.css";
import infoPageStyles from "./components/SecondPage/infoText.module.css";
import benefitsStyles from "./components/ThirdPage/Paragraph.module.css";
import ServiceText from "./components/FourthPage/ServiceText.module.css";
import PriceInfo from "./components/FifthPage/GarderobeText.module.css";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.jpeg";
import bg4 from "./assets/bg4.png";
import bg5 from "./assets/bg5.png";

function App() {
  return (
    <>
      <FirstPage
        img={bg1}
        title="СЕЛЕКЦІЯ ПОСЛУГ"
        subtitle="ПЕРСОНАЛЬНОЇ СТИЛІСТКИ КРІСТІНИ ДУТЧАК"
      />
      <SecondPage
        img={bg2}
        title="КРІСТІНА ДУТЧАК"
        subtitle="ПРАКТИКУЮЧА ПЕРСОНАЛЬНА СТИЛІСТКА"
        items={[
          "Створюю образи, що підкреслюють вашу індивідуальність",
          "Допомагаю знайти баланс між стилем і комфортом",
          "Підбираю одяг, що відображає ваш спосіб життя",
        ]}
      />
      <ThirdPage
        img={bg3}
        text1="Робота над власним стилем зі мною – це вибір професіоналізму та експертного підходу. Я дипломована випускниця школи стилю MODETON, і для мене найважливіше – це високий рівень кваліфікації та увага до деталей"
        text2="Моє головне завдання — допомогти вам знайти ідеальний баланс між комфортом, модою та вашою індивідуальністю. Кожен клієнт для мене — це унікальний проєкт, де я застосовую експертний підхід, орієнтуючись на ваші потреби та стиль життя"
      />
      <FourthPage img={bg4} text="ПОСЛУГИ, ЯКІ НАДАЮ" />
      <FifthPage
        img={bg5}
        title="РОЗБІР ГАРДЕРОБA"
        text1="8 000 ГРН"
        text2="ОНЛАЙН"
        text3="9 000 ГРН"
        text4="ЗМІШАНИЙ"
      />
    </>
  );
}

export default App;
