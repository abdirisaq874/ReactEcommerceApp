import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { ButtonTypeClasses } from "../button/button.component";
import "./signIn.styles.scss";
import { useDispatch } from "react-redux";
import { EmailSignInStart, GoogleSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [FormFields, SetFormFields] = useState(defaultFormFields);
  const { email, password } = FormFields;
  const dispatch = useDispatch();

  const HandleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(EmailSignInStart(email, password));
      SetFormFields(defaultFormFields);
    } catch (error) {
      
    }
  };

  const HandleChange = (event) => {
    const { name, value } = event.target;

    SetFormFields({ ...FormFields, [name]: value });
  };

  const LogInWithGoogle = () => {
    console.log("yesfudud");
    dispatch(GoogleSignInStart());
  };

  return (
    <div className="sign-In-container">
      <h2>Already have an account</h2>
      <span>SignIn with Email and password</span>
      <form onSubmit={HandleSubmit}>
        <FormInput
          label="E-mail"
          type="email"
          onChange={HandleChange}
          required
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={HandleChange}
          required
          name="password"
          value={password}
        />
        <div className="Button-container">
          <Button type="submit" buttonType={ButtonTypeClasses.base}>
            Sign In
          </Button>
          <Button
            type="button"
            buttonType={ButtonTypeClasses.google}
            onClick={LogInWithGoogle}
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
