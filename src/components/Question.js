import Answers from "./Answers";
import classes from "../components/Styles/Question.module.css";

export default function Question() {
  return (
    <>
      <div className={classes.question}>
        <div className={classes.qtitle}>
          <span className="material-icons-outlined">help_outline</span>
          Here goes the question from learn with sumit?
        </div>
        <Answers />
      </div>
    </>
  );
}
