import Questions from "../components/Questions";
import classes from "../components/Styles/Analysis.module.css";

export default function Analysis({answers}) {
    return (
        <>
               <div className={classes.analysis}>
                <h1>Question Analysis</h1>
                <Questions answers={answers}/>
                </div>
        </>
    )
}