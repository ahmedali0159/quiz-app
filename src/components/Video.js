import backgroundImg from "../components/assets/Images/3.jpg";
import classes from "../components/Styles/Video.module.css";

export default function Video() {
    return(
        <a href="quiz.html">
                    <div className={classes.video}>
                        <img src={backgroundImg} alt=""/>
                        <p>#23 React Hook Bangla - React useReducer hook Bangla</p>
                        <div className={classes.qmeta}>
                            <p>10 Questions</p>
                            <p>Score: not taken yet</p>
                        </div>
                    </div>
                </a>
    )
}