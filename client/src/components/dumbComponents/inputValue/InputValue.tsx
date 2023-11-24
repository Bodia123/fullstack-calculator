import { useAppSelector } from "../../../redux/hook/redux-hook";
import css from "./input.module.css";
const InputValue = () => {
  const { value, method, secondValue } = useAppSelector(
    (state) => state.calculator
  );

  return (
    <div className={css.inputContainer}>
      <div className={css.titleContainer}>
        <h1 className={css.title}>Калькулятор</h1>
      </div>

      {!value ? (
        <h2 className={css.outPut}>Давай рахувати</h2>
      ) : (
        <h2 className={css.outPut}>{value + method + secondValue}</h2>
      )}
    </div>
  );
};

export default InputValue;
