import { BaseButton, GoogleButton, InvertedButton,ButtonSpinner } from "./button.styles.jsx";

export const ButtonTypeClasses = {
  base: "Base",
  google: "google-sign-in",
  inverted: "inverted",
};
const getButton = (buttonType = ButtonTypeClasses.base) =>
  ({
    [ButtonTypeClasses.base]: BaseButton,
    [ButtonTypeClasses.google]: GoogleButton,
    [ButtonTypeClasses.inverted]: InvertedButton,
  }[buttonType]);

// the same thing
// ({
//   "Base": BaseButton,
//   "google-sign-in": GoogleButton,
//   "inverted": InvertedButton,
// }[buttonType]);

const Button = ({ children, IsLoading, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    
        <CustomButton disabled={IsLoading} {...otherProps}>
          {IsLoading ? <ButtonSpinner/> : children}
          
        </CustomButton>
      
  );
};

export default Button;
