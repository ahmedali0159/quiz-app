import Checkbox from "../components/Checkbox";
import classes from "../components/Styles/Answers.module.css";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onchange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
