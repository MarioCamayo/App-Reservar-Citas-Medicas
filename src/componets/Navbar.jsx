import { NavLink, useNavigate } from 'react-router-dom';
import {assets} from '../assets_frontend/assets';
import { useState } from 'react';


export const Navbar = () => {

const navigate = useNavigate()

const [showMenu, setShowMenu] = useState(false)
const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text:sm py-4 mb-5 border-b border-b-gray-500'>
      <img  className='w-44 cursor-pointer' src= {assets.logo} alt="Logo del clínica" />
      <ul className='hidden md:flex items-start gap-5 font-medium className= "py-1"'>
        <NavLink to='/'>
          <li className= "py-1">INICIO</li>
          <hr className='boder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to= '/doctors' >
          <li className= "py-1">TODOS LOS MÉDICOS</li>
          <hr  className='boder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about' >
          <li className= "py-1">NOSOTROS</li>
          <hr className='boder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className= "py-1">CONTACTO</li>
          <hr className='boder-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul> 
      <div className='flex items-center gap-4'>
        {
          token ? 
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src=  {assets.profile_pic} alt="profile" />
              <img className='w-2.5' src= {assets.dropdown_icon} alt="dropdown_icon" />
              <div>
                <div>
                  <p>My Profile</p>
                  <p>My Appointments</p>
                  <p>Logout</p>
                </div>
              </div>
            </div>
            :
            <button
            onClick={()=>navigate('/login')}
            className='bg-primary text-white px-8 py-3 rounded-full font-light md:block'>Crea una cuenta</button>
        }


        
      </div> 
    </div>
  )
}
