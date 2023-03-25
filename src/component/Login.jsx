import Link from "next/link"
import { useState } from "react"
import Signup from "./Signup"
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const Login = () => {

  const [signupAccount, setSignupAccount] = useState(false);
  const openSignUpForm = (event) =>{
    event.preventDefault();
    setSignupAccount(true);
  }
  const { logIn } = useAuth();
  const router = useRouter();

  const methods = useForm({ mode: "onBlur" });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
 };
  return (
    <>
        <FormProvider {...methods}>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

              <input id="emailId" placeholder="Enter Email" 
                type="email" {...register("email", { required: "Email is required" })} />
              
              {errors.email && <p className="text-red-400">{errors.email.message}</p>}

              <input id="passwordId" placeholder="Enter Password" 
                type="password" {...register("password", { required: "Password is required" })}/>
              
              {errors.password && <p className="text-red-400">{errors.password.message}</p>}

              <input value="log in" className="brand-bttn" type="submit"/>
              <Link  className="brand-link" href="/">Forget password</Link>
              <div className="create-account-btn-wrap">
                  <Link classes="secondary-bttn" onClick={openSignUpForm} href="/">Create new account</Link>
              </div>
          </form>
        </FormProvider>
        
        {signupAccount && <Signup/> }
    </>
  )
}

export default Login