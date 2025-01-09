import { useState } from "react"

export const Login = () => {
  const [state, setState] = useState('Regístrese')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  

  const onSubmitHandler = async (e) => {
    e.preventDefault()

  }
  
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold"> {state === 'Regístrese' ? 'Crear cuenta' : 'Iniciar sesión'}
         </p>
        <p>{state === 'Regístrese' ? 'Regístrese' : 'Iniciar sesión'} para reservar cita</p>
        {
          state === 'Regístrese' && <div className="w-full">
          <p>Nombre completo</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange= {(e)=> setName(e.target.name)} value={name} required /></div>
        }

        
        <div className="w-full">
          <p>Correo</p>
          <input  className="border border-zinc-300 rounded w-full p-2 mt-1" type="email" onChange= {(e)=> setEmail(e.target.email)} value={email} required/>
        </div>
        <div className="w-full">
          <p>Contraseña</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1"  type="password" onChange= {(e)=> setPassword(e.target)} value={password} required/>
        </div>
        <button className=" bg-primary text-white w-full py-2 rounded-md text-base">{state === 'Regístrese' ? 'Crear cuenta' : 'Iniciar sesión'}
        </button>
        {
          state === 'Regístrese'
           ? <p className="text-sm text-zinc-600
          ">¿Ya tienes cuenta?
           <a onClick={()=>setState('Iniciar sesión')} className="text-primary" href="#">Iniciar sesión</a></p>
           : <p className="text-sm text-zinc-600">¿No tienes cuenta? 
           <a onClick={()=>setState('Regístrese')} className="text-primary" href="#">Regístrate</a></p>
        }
      </div>

    </form>
  )
}
