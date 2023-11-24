import css from "./skeleton.module.css";
import { useAppSelector } from "../../../redux/hook/redux-hook";
const Skeleton = () => {
  const { error, isLoading } = useAppSelector((state) => state.calculator);
  if (error)
    return (
      <div className={css.skeletonContainer}>
        <p className={css.error}>{error}</p>
        <button onClick={() => location.reload()} className={css.reloadButton}>
          Перезавантажити
        </button>
      </div>
    );
  if (isLoading)
    return (
      <div className={css.skeletonContainer}>
        <p className={css.loading}>Завантаження...</p>
        <button onClick={() => location.reload()} className={css.reloadButton}>
          Перезавантажити
        </button>
      </div>
    );
};

export default Skeleton;
