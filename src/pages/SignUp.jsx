  import React from "react";
  import FormInput from "../components/FormInput";
  import { Link } from "react-router-dom";
  import { useSignup } from "../hooks/useSignup";

  const SignUp = () => {
    const { isPending, signup } = useSignup();

    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const displayName = formData.get("displayName");
      const email = formData.get("email");
      const password = formData.get("password");

      signup(displayName, email, password);
    };

    return (
      <main>
        <div className="registration hidden lg:flex h-full grow"></div>
        <div className="regestration grow  lg:bg-none grid place-items-center">
        <div className="fixed top-0  left-0 bottom-0 w-full bg-black/50 lg:hidden z-10 h-screen"></div>
          <div className="relative z-20 text-white  lg:text-black">
            <h2 className="text-3xl mb-5 text-white lg:text-black">Signup</h2>
            <form onSubmit={handleSubmit} className="w-96">
              <FormInput label="DisplayName" name="displayName" type="text" />
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Password" name="password" type="password" />
              <div className="mt-10 flex items-center justify-between">
                {isPending && <button className="btn btn-primary" disabled>Loading...</button>}
                {!isPending && <button className="btn btn-primary" >Signup</button>}

                <button className="btn btn-primary">Google </button>
              </div>
            </form>
            <div className="mt-10 text-center">
              <p>
                If you have account, please{" "}
                <Link className="link link-primary" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  };

  export default SignUp;
