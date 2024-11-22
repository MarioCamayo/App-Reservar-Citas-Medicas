import { Link } from "react-router-dom"
import { specialityData } from "../assets_frontend/assets"

export const SpecialityMenu = () => {
  return (
    <div id="speciality">
      <h1>Busque por especialidad</h1>
      <p>Simplemente navegue por nuestra extensa lista de médicos de confianza, programe su cita sin problemas.</p>
      <div>
        {specialityData.map((item, index)=>(
          <Link key={index} to={`/doctors/${item.speciality}`}>
            <img src= {item.image} alt="image" />
            <p>{item.speciality} </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
