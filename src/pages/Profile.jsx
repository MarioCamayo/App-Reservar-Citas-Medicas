import { useState } from "react"
import { assets } from "../assets_frontend/assets"

export const Profile = () => {

  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'edwardvincent@gmail.com',
    phone: '+51 958 652 325',
    address: {
      line1:'Av. Agricultura #640',
      line2:'José Gálvez Barrenechea Vila María del Triunfo',
    },
    gender: 'Masculino',
    dob: '12/12/1995',
  })
   
   
  const [isEditl, setIsEdit] = useState(true)

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img 
      className="w-36 rounded " 
      src= { userData.image} 
      alt="imagen de usuario" />
      {
        isEditl ? 
        <input 
        className="bg-gray-50 text-3xl font-medium max-w-60 mt-4 border border-gray-300 rounded p-1"
        type="text"
        value={userData.name}
        onChange={(e)=> setUserData(prev => ({...prev, name:e.target.value}))} />
        :
       <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      }

      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">INFORMACIÓN DEL CONTACTO</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Correo electrónico:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium"> Teléfono:</p>
          {
            isEditl ?
            <input 
            className="bg-gray-100 max-w-52"
            type="text" value={userData.phone}
            onChange={(e)=> setUserData(prev => ({...prev, phone:e.target.value}))} />
            :
            <p className="text-blue-500">{userData.phone}</p>
          }
          <p className="font-medium"> Dirección:</p>
          {
            isEditl ?
            <p>
              <input 
              className="bg-gray-100 max-w-52"
              type="text" 
              value={userData.address.line1}
              onChange={(e)=> setUserData(prev => ({...prev, address:{...prev.address, line1:e.target.value}}))} />
              <br />
              <input type="text" value={userData.address.line2}
              onChange={(e)=> setUserData(prev => ({...prev, address:{...prev.address, line2:e.target.value}}))} />
              </p>
              :
              <p className="text-blue-500">
                {userData.address.line1}
              <br />
              {userData.address.line2}
              </p>
          }
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">INFORMACIÓN PERSONAL</p>
        <div className="grid grid-cols-[1fr_3fr] ga´p-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Sexo:</p>
          {
            isEditl ?
            <select 
            className="max-w-20 bg-gray-100 "
            value={userData.gender}
             onChange={(e)=> setUserData(prev => ({...prev, gender:e.target.value}))}>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
            :
            <p className="text-blue-500">{userData.gender}</p>
          }
          <p>Fecha de nacimiento:</p>
          {
            isEditl ?
            <input 
            className="bg-gray-100 max-w-28"
            type="date" value={userData.dob}
            onChange={(e)=> setUserData(prev => ({...prev, dob:e.target.value}))} />
            :
            <p className="text-blue-500">{userData.dob}</p>
          }
         </div>
      </div>

      <div className="mt-10">
        {
          isEditl ?
          <button 
          className=" border border-primary text-primary hover:bg-primary hover:text-white transition-all px-10 py-2 rounded-full"
          onClick={()=> setIsEdit(false)}>Guardar</button>
          :
          <button
          className=" border border-primary  hover:bg-primary hover:text-white transition-all text-primary px-12 py-2 rounded-full"
           onClick={()=> setIsEdit(true)}>Editar</button>

        }
      </div>


    </div>
  )
}
