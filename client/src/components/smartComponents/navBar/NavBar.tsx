import css from "./nav.module.css";
import gitIcon from "../../../assets/gitHub.svg";
interface props {
  prev: boolean;
  changePrev: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBar = ({ prev, changePrev }: props) => {
  const toggle = () => changePrev((o) => !o);
  return (
    <div className={css.container}>
      <div className={css.prev}>
        <span className={css.prevTitle}>Попередні операції</span>
        <button className={prev ? css.on : css.off} onClick={toggle}>
          <span className={css.pin} />
        </button>
      </div>
      <div className={css.iconContainer}>
        <a
          href="https://github.com/Bodia123"
          target="_blank"
          className={css.iconLink}>
          <img src={gitIcon} alt="gitIcon" width={20} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
