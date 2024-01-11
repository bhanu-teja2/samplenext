"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import InputWithLabel from '../components/InputWithLabel';
import Image from 'next/image';
import Link from 'next/link';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const router = useRouter()
  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log('Submitting:', { email, password });

  };

  return (
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div>
                  <img src="./imssp.jpeg"
                      className="w-mx-auto" />
              </div>
                <div className="mt-12 flex flex-col items-center">
                  <div className="w-full flex-1 mt-8">

                      <div className="mx-auto max-w-xs">

                             <InputWithLabel
                                id="email"
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Email address"
                                label="Email Address"
                                />
                    
                            <InputWithLabel
                                id="password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Password"
                                label="Password"
                                />
                           

{/* 
                            <input
                              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                              type="email" placeholder="Email" /> 
                          
                             <input
                              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                              type="password" placeholder="Password" /> */}



                          <Link href="/Home">
                          <button
                              className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <span className="ml-">
                                    Log In
                                </span>
                          </button>
                          </Link>
                          <p className="mt-6 text-xs text-gray-600 text-center">
                              I agree to abide by Im-Par
                              <a href="#" className="border-b border-gray-500 border-dotted">
                                  Terms of Service 
                              </a>
                              and its
                              <a href="#" className="border-b border-gray-500 border-dotted">
                                  Privacy Policy
                              </a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
              <div className="m-12 xl:m-16 w-full bg-[#4gbfa8] bg-contain bg-center bg-no-repeat flex items-center justify-center">
                <div class="max-w-md w-full bg-white p-6 rounded-[2rem] shadow-[1rem] h-[30rem]">


                    <div class="mb-6">
                        <h2 class="text-3xl font-semibold text-green-400">Company Announcements</h2>
                        <p class="text-sm text-gray-500">Stay informed with the latest updates</p>
                    </div>


                    <ul class="space-y-2">
                        <li class="text-sm text-gray-700">1. Important announcement goes here.</li>
                        <li class="text-sm text-gray-700">2. Another announcement goes here.</li>
                    
                    </ul>

                    </div>
              </div>
          </div>
      </div>
  </div>
  )
};

export default Login;