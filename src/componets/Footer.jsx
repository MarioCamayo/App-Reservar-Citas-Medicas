import { Link } from "react-router-dom";
import { assets } from "../assets_frontend/assets";

export const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm" >
        {/* lado izquierdo */}
        <div>
          <Link to='/' ><img className="mb-5 w-40" src={assets.logo} alt="Logo"/></Link>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            assumenda adipisci! Soluta quas animi est praesentium voluptates
            repudiandae vero eius dolor consectetur! Distinctio quos accusantium
            repudiandae fuga non, ratione atque.
          </p>
        </div>

        {/* lado centro */}
        <div >
          <p className="text-xl font-medium mb-5">EMPRESA</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/about'>Sobre nosotros</Link></li>
            <li>Entrega</li>
            <li>Política de privacidad</li>
          </ul>
        </div>

        {/* lado derecho */}
        <div>
          <p className="text-xl font-medium mb-5">CONTÁCTENOS</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+0-000-000-000</li>
            <li>reservatucitamedica@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* texto del Copyright */}
      <hr />
      <p className="py-5 text-sm text-center ">Copyright 2024 Reservatucitamédica - Todos los derechos reservados.</p>
    </div>
  );
};
