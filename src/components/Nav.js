import Account from "./Account";
import classes from "../components/Styles/Nav.module.css";
import logobg from "../components/assets/Images/logo-bg.png";
export default function Nav() {
    return(
        <nav className={classes.nav}>
        <ul>
            <li>
                <a href="index.html" className={classes.brand}>
                    <img src={logobg} alt="brand"/>
                    <h3>Learn With Sumit</h3>
                </a>
            </li>
        </ul>
       <Account />
    </nav>
    )
}