import classes from "../components/Styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
