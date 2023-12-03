import React from 'react'

function Header() {
    return (
        <header className='flex justify-between items-center py-4 px-2'>

                <div className='flex items-center gap-3'>
                    <div className='h-6 w-6 rounded-full bg-slate-900'></div>
                    <span className='text-sm font-semibold tracking-widest'>Rehan</span>
                </div>
                <div className='flex gap-12 text-md text-zinc-400'>
                    <a href="" className='text-black'>Home</a>
                    <a href="#projects">Projects</a>
                    {/* <a href="#contact">Contact</a> */}
                </div>
            
        </header>
    )
}

export default Header