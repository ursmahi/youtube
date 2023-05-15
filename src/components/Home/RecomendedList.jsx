import React from 'react'
const ListOfRemomendedToWatch =[
    "All","Live","Music","Computer Programming","News","Gadgets","Podcasts"
]
const RecomendedButton =({buttonList})=>{
    return(
        <>
        <button className='bg-gray-100 rounded-lg p-2 mr-3 mb-5'>
            {buttonList}
        </button>
        
        </>
    )
}
const RecomendedList = () => {
  return (
    <div className='flex sticky top-[72px] z-20 bg-white'>
    {
        ListOfRemomendedToWatch.map((item,index)=>(
            <RecomendedButton key={index} buttonList={item}/>
        ))
    }
    </div>
  )
}

export default RecomendedList