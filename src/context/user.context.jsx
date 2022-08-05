import { useState, createContext,useEffect } from "react";
import { authenticationstatechanged,createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";


const UserConext = createContext({
  CurrentUser: null,
  setCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(null);
  const value = { CurrentUser, setCurrentUser };

  useEffect(()=>{
    const unsubscribe = authenticationstatechanged((user) => {
      if(user){
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })
    return unsubscribe
  },[])
  return <UserConext.Provider value={value}> {children}</UserConext.Provider>;
};

export { UserConext, UserProvider };
