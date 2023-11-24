import { useAppDispatch, useAppSelector } from "../../../redux/hook/redux-hook";
import {
  getCalculate,
  getPercent,
  getSinglePercent,
} from "../../../redux/service/calculate-creator";
import {
  clearState,
  removeNumber,
  setMethod,
  setMinusValue,
} from "../../../redux/slices/calculator-slice";
import css from "./method.module.css";
interface props {
  currentMethod: string;
}
const MethodElement = ({ currentMethod }: props) => {
  const dispatch = useAppDispatch();
  const { method, value, secondValue } = useAppSelector(
    (state) => state.calculator
  );
  const methodClickHandler = (item: string) => {
    switch (item) {
      case "R":
        dispatch(removeNumber());
        return;
      case "=":
        if (!method || !secondValue) return;
        dispatch(
          getCalculate({
            method,
            firstNumber: value,
            secondNumber: secondValue,
          })
        );
        return;
      case "C":
        dispatch(clearState());
        return;
      case "-/+":
        dispatch(setMinusValue());
        return;
      case "%":
        if (!secondValue)
          return dispatch(getSinglePercent({ firstNumber: value }));
        if (!method) return;
        if (value && method && secondValue)
          return dispatch(
            getPercent({
              firstNumber: value,
              method,
              secondNumber: secondValue,
            })
          );
        return;
      default:
        break;
    }

    if (value.length === 0) return;
    if (method && secondValue)
      return dispatch(
        getCalculate({ method, firstNumber: value, secondNumber: secondValue })
      );
    dispatch(setMethod(item));
  };
  return (
    <div
      onClick={() => methodClickHandler(currentMethod)}
      className={
        method === currentMethod ? css.activeMethodButton : css.methodButton
      }>
      <span>{currentMethod}</span>
    </div>
  );
};

export default MethodElement;
