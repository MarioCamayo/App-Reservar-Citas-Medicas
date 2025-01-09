import { Link } from "react-router-dom";
import { assets } from "../assets_frontend/assets";

export const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm" >
        {/* lado izquierdo */}
        <div>
          <Link to='/' ><img className="mb-5 w-40" src={assets.Posta_logo} alt="Logo"/></Link>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
          Trabajamos cada día para garantizar que la experiencia sea lo más cómoda y práctica posible, siempre pensando en el bienestar de nuestros usuarios. ¡Gracias por confiar en nosotros!.
          </p>
        </div>

        {/* lado centro */}
        <div >
          <p className="text-xl font-semibold mb-5 text-blue-700 ">EMPRESA</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><Link to='/' className=" hover:text-blue-700 transition duration-300 hover:underline" >Inicio</Link></li>
            <li><Link to='/about' className=" hover:text-blue-700 transition duration-300 hover:underline">Sobre nosotros</Link></li>
            <li  className=" hover:text-blue-700 transition duration-300 hover:underline cursor-pointer">Entrega</li>
            <li  className=" hover:text-blue-700 transition duration-300 hover:underline cursor-pointer">Política de privacidad</li>
          </ul>
        </div>

        {/* lado derecho */}
        <div>
          <p className="text-xl font-semibold  mb-5 text-blue-700">CONTÁCTENOS</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li  className=" hover:text-blue-700 transition duration-300 hover:underline cursor-pointer">+0-000-000-000</li>
            <li  className=" hover:text-blue-700 transition duration-300 hover:underline cursor-pointer">reservatucitamedica@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* texto del Copyright */}
      <hr />
      <p className="py-5 text-sm text-center ">Copyright 2024 Reservatucitamédica - Todos los derechos reservados.</p>
    </div>
  );
};
