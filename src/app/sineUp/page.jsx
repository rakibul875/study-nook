"use client";
import React from "react";
import { 
  Button, 
  Description, 
  FieldError, 
  Form, 
  Input, 
  Label, 
  TextField 
} from "@heroui/react";
import { FaGoogle, FaApple, FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa6";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const handelRegister = async (e) => {
    e.preventDefault();

    const user = new FormData(e.currentTarget);
    const userData = Object.fromEntries(user.entries());
    console.log(userData);

    const { data, error } = await authClient.signUp.email({
      email: userData.email,
      password: userData.password,
      name: userData.name,
      image: userData.image
    });

    if (data) {
      alert('SignUp Successful');
      redirect('/login');
    }
    if (error) {
      alert(error.message);
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
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Create your sanctuary</h1>
          <p className="text-gray-500 text-xs mt-1 px-4">
            Join a community of focused learners and find your perfect nook.
          </p>
        </div>

        <Form onSubmit={handelRegister} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="name"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 3) return "Name must be at least 3 characters";
              return null;
            }}
          >
            <Label className="text-xs font-semibold text-gray-600">Full Name</Label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 z-10 text-gray-500 text-sm flex items-center justify-center pointer-events-none">
                <FaUser />
              </span>
              <Input 
                placeholder="Alex Rivera" 
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-cyan-600 transition-colors placeholder:text-gray-300"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

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
            <Label className="text-xs font-semibold text-gray-600">Email Address</Label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 z-10 text-gray-500 text-sm flex items-center justify-center pointer-events-none">
                <FaEnvelope />
              </span>
              <Input 
                placeholder="alex@flow.com" 
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-cyan-600 transition-colors placeholder:text-gray-300"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Password must contain at least one number";
              return null;
            }}
          >
            <Label className="text-xs font-semibold text-gray-600">Password</Label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 z-10 text-gray-500 text-sm flex items-center justify-center pointer-events-none">
                <FaLock />
              </span>
              <Input 
                placeholder="••••••••" 
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-cyan-600 transition-colors placeholder:text-gray-300"
              />
            </div>
            <Description className="text-[10px] text-gray-400 mt-1 leading-normal">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            name="image"
            className="flex flex-col gap-1.5"
            validate={(value) => {
              if (value.length < 3) return "URL must be at least 3 characters";
              return null;
            }}
          >
            <Label className="text-xs font-semibold text-gray-600">Photo URL</Label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 z-10 text-gray-500 text-sm flex items-center justify-center pointer-events-none">
                <FaImage />
              </span>
              <Input 
                placeholder="https://example.com/photo.jpg" 
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-cyan-600 transition-colors placeholder:text-gray-300"
              />
            </div>
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <Button 
            type="submit" 
            className="w-full mt-2 bg-[#006677] hover:bg-[#005564] text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
          >
            Create Account <span className="text-lg">→</span>
          </Button>
        </Form>

        <div className="relative flex py-4 items-center justify-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-[10px] text-gray-400 uppercase tracking-wider font-medium">Or continue with</span>
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

        <p className="text-center text-xs text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-600 hover:underline font-semibold ml-1">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;