import { cn } from '@/lib/utils'
import React from 'react'

const Card = (props) => {
    return (
        <CardContent className='md:hover:bg-gray-50 dark:md:hover:bg-slate-800 md:hover:scale-105 transition-all ease-in duration-200'>
            <section className='flex justify-between gap-3'>
                <p className='text-md'>{props.label}</p>
                <props.icon className='h-6 w-6 text-gray-400' />
            </section>
            <section className='flex flex-col gap-1'>
                <h2 className='text-3xl font-semibold'>{props.amount}</h2>
                <p className='text-sm text-gray-500'>{props.description}</p>
            </section>
        </CardContent>
    )
}

export default Card

export function CardContent(props) {
    return (
        <div {...props} className={cn("flex w-full flex-col gap-4 rounded-xl p-4 md:p-6 border shadow", props.className)
        }>
        </div>
    )
}