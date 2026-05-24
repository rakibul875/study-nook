"use client";
import React from "react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FaGoogle, FaApple, FaEnvelope, FaLock } from "react-icons/fa6";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const LoginPageFrom = () => {
     const handelLogin = async (e) => {
        e.preventDefault();
    
        const user = new FormData(e.currentTarget);
        const userData = Object.fromEntries(user.entries());
        console.log(userData);
    
        const { data, error } = await authClient.signIn.email({
          email: userData.email,
          password: userData.password,
        });
        console.log(data);
    
        if (data) {
          toast.success("Login Successful");
          redirect("/");
        }
        if (error) {
          toast.error(error.message);
        }
      };
    
       const handelGoogleSineUP=async()=>{
          const data = await authClient.signIn.social({
          provider: "google",
        })
        }
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-[#eef2f3] to-[#e4efe9] p-4 font-sans">
      <div className="w-full max-w-[440px] bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-xs mt-1 px-4">
            Your sanctuary of focus awaits.
          </p>
        </div>

        <Form onSubmit={handelLogin} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xs font-semibold text-gray-600">
              Email Address
            </Label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 z-10 text-gray-500 text-sm flex items-center justify-center pointer-events-none">
                <FaEnvelope />
              </span>
              <Input
                placeholder="name@company.com"
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-cyan-600 transition-colors placeholder:text-gray-300"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            className="flex flex-col gap-1.5"
          >
            <div className="flex justify-between items-center">
              <Label className="text-xs font-semibold text-gray-600">
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-[11px] text-cyan-600 hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 z-10 text-gray-500 text-sm flex items-center justify-center pointer-events-none">
                <FaLock />
              </span>
              <Input
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-cyan-600 transition-colors placeholder:text-gray-300"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <Button
            type="submit"
            className="w-full mt-2 bg-[#129cb8] hover:bg-[#0f879e] text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center text-sm shadow-md"
          >
            Login
          </Button>
        </Form>

        <div className="relative flex py-5 items-center justify-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-[10px] text-gray-400 uppercase tracking-wider font-medium">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button onClick={handelGoogleSineUP} className="btn items-center shadow-sm">
            <FaGoogle className="text-red-500 text-sm" /> Google
          </button>
          <button className="btn items-center shadow-sm">
            <FaApple className="text-black text-sm" /> Apple
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 font-medium px-4 leading-relaxed">
          Dont have an account?{" "}
          <Link
            href="/sineUp"
            className="text-cyan-600 hover:underline font-semibold ml-1"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
    );
};

export default LoginPageFrom;