import React from 'react'

const ResetPassword = () => {
  return (
    <div>
        <div className="w-full max-w-sm m-20 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 text-center">Reset Password</h5>

        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>

        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>

        <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset Password</button>     
    </form>
</div>
    </div>
  )
}

export default ResetPassword