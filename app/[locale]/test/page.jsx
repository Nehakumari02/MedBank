import React from 'react'

const Test = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <div className='w-[1200px] h-[600px] bg-red-500 flex items-center justify-center'>
            <div className='h-40 w-40 bg-green-400 relative'>
                <span className='absolute -bottom-8'>hellokfasdfksadkvcnsadcvnsd</span>
            </div>
            <div className='w-40 h-4 border-t-1 border-b-1 bg-gray-900 border-black'></div>
            <div className='h-40 w-40 bg-blue-400'></div>
            <div className='w-40 h-4 border-t-1 border-b-1 bg-gray-900 border-black'></div>
            <div className='h-40 w-40 bg-orange-400'></div>
        </div>
    </div>
  )
}

export default Test