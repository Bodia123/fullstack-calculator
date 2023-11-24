import { useState } from "react";
import InputValue from "../components/dumbComponents/inputValue/InputValue";
import Calculator from "../components/smartComponents/calculator/Calculator";
import NavBar from "../components/smartComponents/navBar/NavBar";
import PreviousContainer from "../components/smartComponents/previousContainer/PreviousContainer";
import css from "./App.module.css";
import Skeleton from "../components/smartComponents/skeletonCalculator/Skeleton";

function App() {
  const [prev, setPrev] = useState(true);

  return (
    <div className={css.mainContainer}>
      <NavBar changePrev={setPrev} prev={prev} />
      <div className="mainPageContainer">
        <InputValue />
        <Calculator />
        <Skeleton />
      </div>
      {prev && <PreviousContainer />}
    </div>
  );
}

export default App;
