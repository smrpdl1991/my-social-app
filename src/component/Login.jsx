import Link from "next/link"
import { useState } from "react"
import Signup from "./Signup"
const Login = () => {
  const [signupAccount, setSignupAccount] = useState(false);
  const openSignUpForm = (event) =>{
    event.preventDefault();
    setSignupAccount(true);
  }
  return (
    <>
        <form className="login-form">
            <input inputID="emailId" placeholder="Enter Email" type="email" />
            <input inputID="passwordId" placeholder="Enter Password" type="password" />
            <input value="log in" className="brand-bttn" type="submit"/>
            <Link  className="brand-link" href="/">Forget password</Link>
            <div className="create-account-btn-wrap">
                <Link classes="secondary-bttn" onClick={openSignUpForm} href="/">Create new account</Link>
            </div>
        </form>
        {signupAccount && <Signup/> }
    </>
  )
}

export default Login