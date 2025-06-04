// 'use client'

// import { RegisterComponent } from '@/app/Components/Register1/Register'
// import React from 'react'

// const Register = () => {
//   return (
// //     <div>
// //         <div className="w-full max-w-sm m-20 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
// //     <form className="space-y-6" action="#">
// //         <h5 className="text-xl font-medium text-gray-900 text-center">Register</h5>

// //         <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
// //             Already have an account? <a href="#" className="text-orange-500 hover:text-orange-600 ">Login</a>
// //         </div>

// //         <div>
// //             <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
// //             <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
// //         </div>

// //         <div>
// //             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
// //             <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
// //         </div>
// //         <div>
// //             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create password</label>
// //             <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
// //         </div>
      
// //         <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
        
// //     </form>
// // </div>
// //     </div>
//     <>
//         <RegisterComponent />
//     </>
//   )
// }

// export default Register

'use client'

import { useState } from 'react'
import { AuthDialog } from '@/app/Components/AuthDialog'

 function Register() {
  const [showAuth, setShowAuth] = useState(false)
  const [mode, setMode] = useState<'login' | 'register'>('login')

  const handleAuthClick = (authMode: 'login' | 'register') => {
    setMode(authMode)
    setShowAuth(true)
  }

  return (
    <div>
      <h1>Welcome to our app</h1>
      
      <div className="flex gap-4">
        <button onClick={() => handleAuthClick('login')}>
          Login
        </button>
        <button onClick={() => handleAuthClick('register')}>
          Sign Up
        </button>
      </div>

      <AuthDialog
        initialMode={mode}
        open={showAuth}
        onOpenChange={setShowAuth}
      />
    </div>
  )
}
export default Register