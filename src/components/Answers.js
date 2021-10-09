import Checkbox from "../components/Checkbox";
import classes from "../components/Styles/Answers.module.css";

export default function Answers() {
    return(
        <div className={classes.answers}>
        <Checkbox className={classes.answer}
        text="Test Answer" />
        </div>
    )
}