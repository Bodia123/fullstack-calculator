import { useAppDispatch, useAppSelector } from "../../../redux/hook/redux-hook";
import {
  increment,
  secondIncrement,
} from "../../../redux/slices/calculator-slice";
import css from "./number.module.css";
interface props {
  value: string;
}

const NumberElement = ({ value }: props) => {
  const {
    method,
    secondValue,
    value: firstValue,
  } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();
  const validateNumber = (
    item: string,
    currentNumber: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatchFunc: any
  ) => {
    if (currentNumber.length >= 10) return;

    if (item === "." && currentNumber.includes(".")) return;

    if (item === "." && currentNumber.length === 0)
      return dispatch(dispatchFunc("0."));

    if (currentNumber[0] === "0" && item === ".")
      return dispatch(dispatchFunc("0."));

    if (currentNumber[0] === "0" && currentNumber[1] === ".")
      return dispatch(dispatchFunc(item));
    return dispatch(dispatchFunc(item));
  };

  const handlerNumberCLick = (item: string) => {
    if (method.length && firstValue.length) {
      return validateNumber(item, secondValue, secondIncrement);
    }
    return validateNumber(item, firstValue, increment);
  };

  return (
    <div
      className={css.buttonContainer}
      onClick={() => handlerNumberCLick(value)}>
      <span className={css.numberSpan}>{value}</span>
    </div>
  );
};

export default NumberElement;
