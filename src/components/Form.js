import classes from "../components/Styles/Form.module.css";

export default function Form({children, className, ...rest}){
    return(
        <div>
             <form className={`${className} ${classes.form}`} action="#">
                {children}
             </form>
        </div>
    )
}