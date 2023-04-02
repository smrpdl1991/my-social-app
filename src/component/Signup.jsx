import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { useState } from 'react';

const Signup = () => {

  const methods = useForm({ mode: "onBlur" });
  const [popup, setPopup] = useState(false);
  const handlePopupClose = () =>{
    setPopup(true);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { signUp } = useAuth();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    {!popup ? <div className="form-signup">
          <span className="icon-close" onClick={handlePopupClose}>close</span>
          <FormProvider {...methods}>
            <form className="signup" onSubmit={handleSubmit(onSubmit)}>

              {/* <input type="text" placeholder="first name" 
                {...register("firstname", { required: "firstname is required" })}/>
              
              {errors.firstname && <p className="text-red-400">{errors.firstname.message}</p>}

              <input type="text" placeholder="last name" 
                {...register("lastname", { required: "lastname is required" })}/>
              
              {errors.lastname && <p className="text-red-400">{errors.lastname.message}</p>} */}

              <input type="email" placeholder="Enter email"
                {...register("email", { required: "Email is required" })} />
              
              {errors.email && <p className="text-red-400">{errors.email.message}</p>}

              <input type="password" placeholder="Enter password" 
                {...register("password", { required: "Password is required" })}/>

              {errors.password && <p className="text-red-400">{errors.password.message}</p>}  

              <input type="password" placeholder="Confirm password" 
                {...register("password_confirm", { required: "Verify your password", })}/>
              
              {errors.password_confirm && (<p className="text-red-400">{errors.password_confirm.message}</p>)}


              <input type="submit" value="Sign Up" />
            </form>
          </FormProvider>
      </div>:''}
    </>
  )
}

export default Signup