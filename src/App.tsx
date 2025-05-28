import { FirstPage } from "./components/FirstPage/mainText.tsx";
import { SecondPage } from "./components/SecondPage/infoText.tsx";
import { ThirdPage } from "./components/ThirdPage/Paragraph.tsx";
import { FourthPage } from "./components/FourthPage/ServiceText.tsx";
import { FifthPage } from "./components/FifthPage/GarderobeText.tsx";
import { SixthPage } from "./components/SixthPage/FaceDetails.tsx";
import { SeventhPage } from "./components/SeventhPage/ShopingDetails.tsx";
import { TenthPage } from "./components/TenthPage/Contacts.tsx";

import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.jpeg";
import bg4 from "./assets/bg4.png";
import bg5 from "./assets/bg5.png";
import bg6 from "./assets/bg6.png";
import bg7 from "./assets/bg7.png";
import bg8 from "./assets/bg8.png";
import bg9 from "./assets/bg9.png";
import bg10 from "./assets/bg10.png";

function App() {
  const repeatedFifthPages = [
    {
      img: bg8,
      title: "РОЗБІР ГАРДЕРОБA",
      text1: "8 000 ГРН",
      text2: "ОНЛАЙН",
      text3: "9 000 ГРН",
      text4: "ЗМІШАНИЙ",
    },
    {
      img: bg9,
      title: "РОЗБІР ГАРДЕРОБA",
      text1: "8 000 ГРН",
      text2: "ОНЛАЙН",
      text3: "9 000 ГРН",
      text4: "ЗМІШАНИЙ",
    },
  ];

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
      <SixthPage
        img={bg6}
        title="РОЗБІР ЛІНІЙ ЗОВНІШНОСТІ"
        text1="6 000 ГРН"
        text2="ОНЛАЙН"
      />
      <SeventhPage
        img={bg7}
        title="ШОПІНГ СУПРОВІД"
        text1="8 000 ГРН"
        text2="ОНЛАЙН"
        text3="9 000 ГРН"
        text4="ОФЛАЙН"
      />
      {repeatedFifthPages.map((props, index) => (
        <FifthPage key={index} {...props} />
      ))}
      <TenthPage
        text1="ЗАПИС НА КОНСУЛЬТАЦІЮ"
        text2={
          <>
            Якщо ви вагаєтеся, з чого почати, пропоную{" "}
            <span>безкоштовну 30-хвилинну </span>консультацію. Ми розглянемо
            ваші стильові запити, обговоримо гардеробні питання та підберемо
            оптимальний формат співпраці.
          </>
        }
        text3="ТЕЛЕФОН: + 380 68 07 11 707"
        img={bg10}
      />
    </>
  );
}

export default App;
