import { NavLink, useNavigate } from 'react-router-dom';
import {assets} from '../assets_frontend/assets';
import { useState } from 'react';


export const Navbar = () => {

const navigate = useNavigate()

const [showMenu, setShowMenu] = useState(false)
const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500'>
      <img onClick={()=>navigate('/')} className='w-48 cursor-pointer' src= {assets.Posta_logo} alt="Logo de la posta médica" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
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
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20
              hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=> {navigate('/profile')} }  className='hover:text-black cursor-pointer'>Mi perfil </p>
                  <p onClick={()=> {navigate('/my-appointments')} }  className='hover:text-black cursor-pointer'>Mis citas </p>
                  <p onClick={()=> {setToken(false)} }  className='hover:text-black cursor-pointer'>Cerrar sesión</p>
                </div>
              </div>
            </div>
            :
            <button
            onClick={()=>navigate('/login')}
            className='bg-primary text-white px-4 py-3 rounded-full font-light md:block  '>Crear una cuenta
             </button>
        }
        {/* sm:px-3 sm:py-1 sm:text-sm sm:w-[15px] */}
        <img 
        className='w-8 cursor-pointer md:hidden'
        onClick={ ()=> setShowMenu(true) }
        src= {assets.menu_icon} alt="menu_icon}" />

        {/* --------------- mobile menu ----------------- */}

        <div className= {`${ showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`} >
          <div className='flex items-center justify-between px-5 py-6'>
            <img
            className='w-36'
             src= {assets.Posta_logo} alt="Logo de Aplicación" />
            <img 
            className='w-8 cursor-pointer'
            onClick={ ()=> setShowMenu(false) }
            src= {assets.cross_icon} alt="cross_icon" />
          </div>
          <ul className='flex flex-col items-center gap-5 font-medium mt-5 px-5 text-lg'>
            <NavLink
            className= 'px-4 py-2 rounded inline-block'
            onClick={()=> setShowMenu(false)} to='/'>
            <p className= 'px-4 py-2 rounded inline-block'>INICIO</p></NavLink>
            <NavLink
            onClick={()=> setShowMenu(false)} to='/doctors'>
            <p className= 'px-4 py-2 rounded inline-block'>TODOS LOS MÉDICOS</p></NavLink>
            <NavLink
            className= 'px-4 py-2 rounded inline-block'
            onClick={()=> setShowMenu(false)} to='/about'>
            <p className='px-4 py-2 rounded inline-block'>NOSOTROS</p></NavLink>
            <NavLink
            onClick={()=> setShowMenu(false)} to='/contact'>
            <p className= 'px-4 py-2 rounded inline-block'>CONTACTO</p></NavLink>
            
          </ul>
        </div>
        
      </div> 
    </div>
  )
}
