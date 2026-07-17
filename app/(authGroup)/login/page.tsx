import React from "react";
import LoginForm from "../_components/LoginFrom";

const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
          <div className="space-y-2 text-center">
            <h1 className="font-bold text-3xl">Welcome Back</h1>
            <p className="text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>

          {/*from component  */}
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
