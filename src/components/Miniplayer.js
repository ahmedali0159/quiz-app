import classes from "../components/Styles/Miniplayer.module.css";
import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function Miniplayer({ title, id }) {
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  const buttonRef = useRef();

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        playing={status}
        controls
        width="300px"
        height="168px"
      />
      <p>{title}</p>
    </div>
  );
}
