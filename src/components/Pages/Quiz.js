import Answers from "../Answers";
import ProgressBar from "../ProgressBar";
import Miniplayer from "../Miniplayer";

export default function Quiz() {
  return (
    <div>
      <h1>Pick three of your favorite Star wars films</h1>
      <h4>Question can have multiple answer</h4>
      <Answers />
      <ProgressBar />
      <Miniplayer />
    </div>
  );
}
