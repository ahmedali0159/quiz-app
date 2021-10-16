import classes from "../components/Styles/Summary.module.css";
import succesimg from "../components/assets/Images/success.png";

export default function Summary({score, noq}) {
    return(
        <>
            <div className={classes.summary}>
                <div className={classes.point}>
                    <p className={classes.score}>Your score is 
                    <br/> 
                    {score} out of {noq * 5}
                    </p>
                </div>

                <div className={classes.badge}>
                    <img src={succesimg} alt="success"/>
                </div>
            </div>
        </>
    )
}