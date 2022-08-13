import SignUp from "../../components/signUpForm/signUp-form.component";
import SignIn from "../../components/signInForm/signIn-form.component";
import { AuthenticationContainerStyle } from "./authentication.styles.jsx";
import { useSelector } from "react-redux";
import { isLoading, selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/spinner/spinner.component";

const Authentication = () => {
  const IsLoading = useSelector(isLoading)
  const navigate = useNavigate();
  const IsItAuthenticated = useSelector(selectCurrentUser);
  return (
    <>
    {IsLoading ? <Spinner/> : IsItAuthenticated ? (
        navigate("/")
      ) : (
        <AuthenticationContainerStyle>
          <SignIn />
          <SignUp />
        </AuthenticationContainerStyle>
      )
      }
      
    </>
  );
};

export default Authentication;
