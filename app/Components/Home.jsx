'use client'
import React, { useState } from 'react'

const Home = () => {
   const [inputData , setInputData] = useState('')
   const  [data , setData] = useState([])

   
   const handleAddButton = () => {
    setData([...data , inputData])
    setInputData('')
   }

   const handleDelete = (ind) => {
      const fiteredData = data.filter((ele , index) => {
           return ind !== index
      })
      setData(fiteredData)
   }

  return (
    <div> 
    <div className='w-full h-[100vh] items-center justify-center flex'>
        <div className='flex flex-col'>
            <div className='m-2'> 
            <input onChange={(e) => {setInputData(e.target.value)}} className='w-[300px] p-2 border-2'  value={inputData} type='text' />
            <button onClick={handleAddButton} className='border p-2'>ADD</button>
            </div>
        <div className='flex flex-col mt-10 '> 
        {
            data.map((ele  , ind) => {
                return(
                    <div className='flex m-2 border'>
                        <h1 className=' w-[300px] text-center p-2'> {ele} </h1>
                        <button onClick={() => handleDelete(ind)} className=' p-2 hover:bg-red'> Delete</button>
                    </div>
                )
               
            })
        }
        </div>
        </div>
    </div>
    </div>
  )
}

export default Home