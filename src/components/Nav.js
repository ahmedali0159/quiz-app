import Account from "./Account";
import classes from "../components/Styles/Nav.module.css";
import logo from "../components/assets/Images/logo-bg.png";

export default function Nav() {
    return(
        <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
      </nav>
    )
}