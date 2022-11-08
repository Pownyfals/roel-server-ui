import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-[#3a5780]'>
    <nav className='nav bg-[#3a5780] text-white flex justify-between items-center p-4 shadow-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Link to="/" className='text-2xl font-medium'>Serveroel</Link>
        <ul className='p-0 m-0 flex text-xl items-stretch'>
            <CustomLink to="/about">Features</CustomLink>
            <CustomLink to="/pricing">Pricing</CustomLink>
        </ul>
    </nav>
    </div>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "bg-slate-600 px-5 mx-3 rounded-md" : "px-5 mx-3 hover:bg-slate-700 rounded-md"}>
            <Link to={to} {...props} className='flex items-center p-1 font-medium' >
                {children}
            </Link>
        </li>
    )
}


export default Navbar