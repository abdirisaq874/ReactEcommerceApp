import SignUp from "../../components/signUpForm/signUp-form.component"
import SignIn from "../../components/signInForm/signIn-form.component"
import { AuthenticationContainerStyle } from "./authentication.styles.jsx"
const Authentication=()=>{
    
    return (
        <AuthenticationContainerStyle>
            <SignIn/>
            <SignUp/>
        </AuthenticationContainerStyle>
    )
}

export default Authentication
