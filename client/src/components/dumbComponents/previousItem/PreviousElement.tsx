import { useAppDispatch } from "../../../redux/hook/redux-hook";
import { setValueFromPreviousNumber } from "../../../redux/slices/calculator-slice";
import css from "./item.module.css";
interface props {
  prevItem: string;
}
const PreviousElement = ({ prevItem }: props) => {
  const dispatchh = useAppDispatch();
  const splitedString = prevItem.split("=");
  const expression = splitedString[0];
  const result = splitedString[1];
  return (
    <li>
      <div className={css.container}>
        <p className={css.expression}>
          {expression}=
          {
            <span
              onClick={() => dispatchh(setValueFromPreviousNumber(result))}
              className={css.result}>
              {result}
            </span>
          }
        </p>
      </div>
    </li>
  );
};

export default PreviousElement;
