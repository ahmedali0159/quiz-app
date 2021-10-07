import classes from "../components/Styles/Illustration.module.css";
import signupImg from "../components/assets/Images/signup.svg";

export default function Illustration() {
    return(
        <div className={classes.illustration}>
        <img src={signupImg} alt="signup"/>
    </div>
    )
}