import React, { useEffect, useState } from "react";
import { supabase } from "../Services/Supabase";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    // Attempt to sign in the user via Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPass,
    });

    if (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    } else {
      setSuccessMessage("Signin successful! Welcome back!");
      setErrorMessage("");
      console.log("User signed in:", data);
      console.log("User ID:", data?.user?.email);
      console.log("User metadata:", data?.user?.user_metadata);
    }
  };

  return (
    <div>
      <div className=" flex items-center justify-center min-h-screen">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleLogin}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            {errorMessage && (
              <Typography style={{ color: "red" }}>{errorMessage}</Typography>
            )}
            {successMessage && (
              <Typography style={{ color: "green" }}>
                {successMessage}
              </Typography>
            )}

            <Button type="submit" className="mt-6" fullWidth>
              sign In
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Not registred Yet{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
