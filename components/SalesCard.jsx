import React from 'react'

const SalesCard = ({ data }) => {
    return (
        <section className='h-full w-full overflow-x-hidden overflow-y-auto flex flex-col gap-2'>
            {data.map((d, index) => {
                return (
                    <div className='flex justify-between items-center p-2 text-[0.6rem] md:text-[1rem]' key={index}>
                        <div className='flex gap-4 items-center'>
                            <div className='rounded-full md:w-12 md:h-12 w-8 h-8 object-cover object-center dark:bg-gray-800'>
                                <img className='w-full h-full' src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${d.name}`} alt="avatar" />
                            </div>
                            <div className='flex flex-col '>
                                <h2 className='text-[1.3em] font-semibold'>{d.name}</h2>
                                <p className='text-[0.8em] text-gray-400'>{d.email}</p>
                            </div>
                        </div>
                        <h2 className='text-[1.5em] font-semibold'>{d.saleAmount}</h2>
                    </div>
                )
            })}
        </section>
    )
}

export default SalesCard