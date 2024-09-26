import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function NavbarComponent() {
    let routers = ['Products','About','Contact']
    let pathname = window.location.pathname.slice(1);

  return (
    <div className='container mx-auto flex justify-between items-center h-[120px]'>
        <h1>WithoutRouter</h1>
        <ul className='flex gap-5'>
            {routers.map((el,i)=>{
                return <li key={i}>
                  <NavLink to={`/${el.toLocaleLowerCase()}`}>{el}</NavLink>
                </li>
            })}
        </ul>
    </div>
  )
}

export default NavbarComponent