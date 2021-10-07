import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../Styles/Signup.module.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_emali"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms &amp; condition" />

          <Button>Submit Now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
