import classes from "../components/Styles/TextInput.module.css";

export default function TextInput({icon, ...rest}) {
    return(
        <>
            <div className={classes.textInput}>
                          <input type {...rest} />
                          <span className="material-icons-outlined">{icon}</span>
                      </div>
        </>
    )
}