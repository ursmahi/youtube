import React from 'react'

const ShimmerVideoCard = () => {
    return (
    <div className="w-80 mb-9 mr-3 animate-pulse ">
      <div
        className="w-80 h-44 rounded-md bg-gray-200"

      />
      <div className="mt-2 flex">
        <div className="p-2">
          <div
            className="w-10 h-10 rounded-full bg-gray-200"
          />
        </div>
        <div className="p-2">
        <div className="w-60 h-6 bg-gray-200"></div>
        <div className="w-52 h-6 bg-gray-200 mt-2"></div>

        </div>
      </div>
    </div>
    )
}

export default ShimmerVideoCard