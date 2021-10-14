import classes from "../components/Styles/Video.module.css";

export default function Video({title, noq, id}) {
  return (
    <div className={classes.video}>
      <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
      <p>#23 React Hook Bangla - React useReducer hook Bangla</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Points: {noq * 5}</p>
      </div>
    </div>
  );
}
