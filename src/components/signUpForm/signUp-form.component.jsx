import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./signUp.styles.scss";
import { useDispatch } from "react-redux";
import { SignUpWithEmail } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [FormFields, SetFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = FormFields;
  const dispatch = useDispatch();

  const HandleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword)
      return alert("passwords doesn't match each other");
    else {
      dispatch(SignUpWithEmail(email, password, displayName));
      SetFormFields(defaultFormFields);
    }
  };

  const HandleChange = (event) => {
    const { name, value } = event.target;
    SetFormFields({ ...FormFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an Acount</h2>
      <span>SignUp with Email and password</span>
      <form onSubmit={HandleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={HandleChange}
          required
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={HandleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
