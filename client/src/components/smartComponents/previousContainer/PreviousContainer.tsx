import { useAppDispatch, useAppSelector } from "../../../redux/hook/redux-hook";
import { clearPreviousValue } from "../../../redux/slices/calculator-slice";
import PreviousElement from "../../dumbComponents/previousItem/PreviousElement";
import css from "./prev.module.css";
const PreviousContainer = () => {
  const dispatch = useAppDispatch();
  const previous = useAppSelector((state) => state.calculator.previousNumbers);
  return (
    <div className={css.previousContainer}>
      <div className={css.titleContainer}>
        <h3 className={css.title}>Таблиця попередніх операцій</h3>
        <button
          className={css.resetButton}
          onClick={() => dispatch(clearPreviousValue())}>
          X
        </button>
      </div>
      {previous.length === 0 && <p className={css.empty}>Тут поки пусто</p>}

      {previous.length !== 0 && (
        <div className={css.listContainer}>
          <ol className={css.list}>
            {previous.map((item, index) => (
              <PreviousElement prevItem={item} key={index} />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default PreviousContainer;
