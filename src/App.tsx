import { FirstPage } from "./components/FirstPage/mainText";
import styles from "./components/FirstPage/mainText.module.css";
import bg1 from "./assets/bg1.png";
function App() {
  return (
    <FirstPage
      img={bg1}
      title="СЕЛЕКЦІЯ ПОСЛУГ"
      subtitle="ПЕРСОНАЛЬНОЇ СТИЛІСТКИ КРІСТІНИ ДУТЧАК"
    />
  );
}

export default App;
