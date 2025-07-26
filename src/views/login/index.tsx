/* eslint-disable @next/next/no-img-element */

import LoginForm from "./components/loginForm";
export default function Login() {
  return (
    <div className=" w-full min-h-lvh flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] order-2 md:order-1 min-h-full flex flex-col md:py-10 gap-5 items-center justify-center">
        <LoginForm />
      </div>
      <div className="w-full md:w-[50%]  order-1 md:order-2 min-h-full bg-white-bg  md:bg-primary-lightest dark:bg-dark-bg md:dark:bg-dark-hover-bg flex flex-col md:y-10 gap-5 items-center justify-center">
        <h1 className="mx-auto text-primary text-3xl md:text-4xl font-bold">
          welcome Back !
        </h1>
        <div className="h-0 md:h-max w-[70%] max-w-[250px] md:max-w-[500px]">
          <img
            src="/media/login-vector.svg"
            alt="Login Illustration"
            className="h-full w-full "
          />
        </div>
      </div>
    </div>
  );
}