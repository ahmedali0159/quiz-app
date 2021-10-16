import Answers from "./Answers";
import classes from "../components/Styles/Question.module.css";

export default function Question({answers = []}) {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index} >
        <div className={classes.qtitle}>
          <span className="material-icons-outlined">help_outline</span>
          {answer.title}
        </div>
        <Answers input={false} options={answers.options} />
      </div>
  ))
}
