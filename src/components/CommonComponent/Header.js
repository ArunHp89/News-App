import React, { useState } from 'react'
import {useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
export default function Header() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [signUp , setSignUp]=useState(false);
  const [signin , setSignin]=useState(false);
  const openSignUp = ()=>{
    setSignUp(!signUp);
  }
  const openSignin = ()=>{
    setSignin(!signin);
  }
  return (
    <div className="relative bg-white">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto sm:h-10" src="https://cdn-icons-png.flaticon.com/512/7998/7998966.png" alt="" />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
            <span className="sr-only">Open menu</span>
        
          </button>
        </div>
        <nav className="hidden space-x-10 md:flex">
          <div className="relative">
            <button type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
              <span>Solutions</span>
              
            </button>
  
            <div className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 hidden">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 hidden">
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                   
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Analytics</p>
                      <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
                    </div>
                  </a>
  
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                 
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Engagement</p>
                      <p className="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
                    </div>
                  </a>
  
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                  
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Security</p>
                      <p className="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
                    </div>
                  </a>
  
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                    
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Integrations</p>
                      <p className="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re already using.</p>
                    </div>
                  </a>
  
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                   
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Automations</p>
                      <p className="mt-1 text-sm text-gray-500">Build strategic funnels that will drive your customers to convert</p>
                    </div>
                  </a>
                </div>
                <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  <div className="flow-root">
                    <a href="#" className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
             
                      <span className="ml-3">Watch Demo</span>
                    </a>
                  </div>
  
                  <div className="flow-root">
                    <a href="#" className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                
                      <span className="ml-3">Contact Sales</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Docs</a>
  
          <div className="relative">
            <button type="button" className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-expanded="false">
              <span>More</span>
             
            </button>
  

            <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
             
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Help Center</p>
                      <p className="mt-1 text-sm text-gray-500">Get all of your questions answered in our forums or contact support.</p>
                    </div>
                  </a>
  
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Guides</p>
                      <p className="mt-1 text-sm text-gray-500">Learn how to maximize our platform to get the most out of it.</p>
                    </div>
                  </a>
  
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Events</p>
                      <p className="mt-1 text-sm text-gray-500">See what meet-ups and other events we might be planning near you.</p>
                    </div>
                  </a>
  
                  <a href="#" className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                 
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">Security</p>
                      <p className="mt-1 text-sm text-gray-500">Understand how we take your privacy seriously.</p>
                    </div>
                  </a>
                </div>
                <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                  <div>
                    <h3 className="text-base font-medium text-gray-500">Recent Posts</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      <li className="truncate text-base">
                        <a href="#" className="font-medium text-gray-900 hover:text-gray-700">Boost your conversion rate</a>
                      </li>
  
                      <li className="truncate text-base">
                        <a href="#" className="font-medium text-gray-900 hover:text-gray-700">How to use search engine optimization to drive traffic to your site</a>
                      </li>
  
                      <li className="truncate text-base">
                        <a href="#" className="font-medium text-gray-900 hover:text-gray-700">Improve your customer experience</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-5 text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      View all posts
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a href="#" onClick={openSignin} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
          {signin==true? <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
               alert(JSON.stringify(values.email, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className='absolute z-10 top-16 shadow-md bg-white p-8 border rounded-md text-center'>
                  <div className='relative'>
                 <h1 className='mb-4 text-center text-2xl font-bold'>Get In Touch</h1>
                 <label className='text-left font-semibold block mb-1'>Email</label>
                  <Field className="border p-3 w-full h-7 mb-4" type="email" name="email" />
                  <ErrorMessage className='text-red-600' name="email" component="div" />
                  <label  className='text-left font-semibold block mb-1'>password</label>
                  <Field className="border p-3 w-full h-7 mb-4" type="password" name="password" />
                  <ErrorMessage className='text-red-600' name="password" component="div" />
                  <button className='absolute -top-4  rounded-full border border-red-600 p-1 right-0' onClick={()=>{setSignin(false)}}>
        <svg className='w-5 h-5 hover:animate-spin fill-red-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
          </button>
                  <button className='bg-indigo-600 px-4 h-8 rounded-md text-white' type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                  </div>
                </Form>
              )}
            </Formik>:null}
          <a href="#" onClick={openSignUp} className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent
           bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
           {signUp==true?
                <form className='absolute z-10 top-16 shadow-md bg-white p-8 border rounded-md text-center' onSubmit={formik.handleSubmit}>
                  <div className='relative'>
       <label className='text-left font-semibold block mb-1' htmlFor="firstName">First Name</label>
       <input 
       className='border p-3 w-full h-7 mb-4'
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       <label className='text-left font-semibold block mb-1' htmlFor="lastName">Last Name</label>
       <input 
       className='border p-3 w-full h-7 mb-4'
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       <label className='text-left font-semibold block mb-1' htmlFor="email">Email Address</label>
       <input 
       className='border p-3 w-full h-7 mb-4'
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button className='absolute -top-4  rounded-full border border-red-600 p-1 right-0' onClick={()=>{setSignUp(false)}}>
        <svg className='w-5 h-5 hover:animate-spin fill-red-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
          </button>
       <button  className='bg-indigo-600 px-4 h-8 rounded-md text-white' type="submit">Submit</button>
       </div>
     </form>:null}
        </div>
      </div>
    </div>
  
     {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}
    <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="px-5 pt-5 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/7998/7998966.png" alt="Your Company" />
            </div>
            <div className="-mr-2">
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
              
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              
                <span className="ml-3 text-base font-medium text-gray-900">Analytics</span>
              </a>
  
              <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
               
                <span className="ml-3 text-base font-medium text-gray-900">Engagement</span>
              </a>
  
              <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              
                <span className="ml-3 text-base font-medium text-gray-900">Security</span>
              </a>
  
              <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
               
                <span className="ml-3 text-base font-medium text-gray-900">Integrations</span>
              </a>
  
              <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                
                <span className="ml-3 text-base font-medium text-gray-900">Automations</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="space-y-6 py-6 px-5">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>
  
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>
  
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Help Center</a>
  
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Guides</a>
  
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Events</a>
  
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Security</a>
          </div>
          <div>
            <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?
              <a href="#"  className="text-indigo-600 hover:text-indigo-500" onClick={openSignin}>Sign in</a>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
