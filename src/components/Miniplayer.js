import classes from "../components/Styles/Miniplayer.module.css";
import image from "../components/assets/Images/3.jpg";

export default function Miniplayer() {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}>play_circle_filled</span>
      <span className={`material-icons-outlined ${classes.close}`}>close</span>
      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}