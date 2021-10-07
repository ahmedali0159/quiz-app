import classes from "../components/Styles/Account.module.css";

export default function Account() {
    return(
        <div>
             <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="signup.html">Signup</a>
        </div>
        </div>
    )
}