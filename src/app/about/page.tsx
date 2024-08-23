import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="w-full text-center text-white py-40 bg-slate-600">
        <h1 className="text-3xl font-bold">About us</h1>
        <p className="mt-2">CADSUM is a CAD software development company.</p>
      </div>

      <div className="bg-gray-100 p-20 pr-60 pl-60">
        <div className="flex items-center justify-center">
          <img src="https://res.cloudinary.com/alex-tech/image/upload/v1663324534/Cadsum/About%20Us/cadsum-mission_x1wpfu.png" alt="Our Vision Image" className="w-1/2 md:w-1/3" />
          <div className="ml-40">
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-4">
              Our vision is to bring our customer requirements into reality. We strive to provide a
              simple user interface that will help the end-user to understand and use the
              application quickly. Our solutions should contribute to engineering as well as the
              education field.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-20 pr-60 pl-60">
        <div className="flex items-center justify-center">
          <div className="mr-40">
            <h2 className="text-2xl font-bold text-gray-800">Our Goal</h2>
            <p className="text-gray-600 mt-4">
              Our goal is to deliver products and services with customer’s
              satisfaction and good experience. We strive to deliver economic, fast, light and efficient solutions.
            </p>
          </div>
          <img src="https://res.cloudinary.com/alex-tech/image/upload/v1663324552/Cadsum/About%20Us/CADSUM-GOAL_t3zinm.png" alt="Our Goal Image" className="w-1/2 md:w-1/3" />
        </div>
      </div>

    </div>
  )
}

export default AboutUs