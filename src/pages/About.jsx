import { assets } from "../assets_frontend/assets";

export const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ACERCA DE <span className="text-gray-700 font-medium">NOSOTROS</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="about_image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Bienvenidos a nuestra aplicación de citas médicas! del centro
            materno infantil José Gálvez Barrenechea. Somos una plataforma
            diseñada para facilitar la vida de las personas al momento de
            agendar y gestionar sus consultas médicas. Nuestro propósito es
            brindar una experiencia simple, rápida y accesible, conectando a
            pacientes con profesionales de la salud de manera eficiente.
          </p>
          <p>
            Nuestro equipo está comprometido con ofrecer un servicio confiable y
            de alta calidad. Además de ayudarte a programar citas
            médicas.Trabajamos cada día para garantizar que la experiencia sea
            lo más cómoda y práctica posible.
          </p>
          <b className="text-gray-800">Nuestra Visión</b>
          <p>
            Nuestra visión es transformar la forma en que las personas acceden y
            gestionan sus consultas médicas, creando un ecosistema digital donde
            la salud sea más accesible, eficiente y personalizada. Aspiramos a
            ser la plataforma líder en soluciones tecnológicas para el cuidado
            de la salud.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          ¿PORQUÉ
          <span className="text-gray-700 font-semibold"> ELEGIRNOS?</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb:20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer"> 
          <b>Eficiencia:</b>
          <p>Simplificamos procesos para que agendar y gestionar tus citas médicas sea rápido, fácil y sin complicaciones.</p>
        </div>

        <div  className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Conveniencia:</b>
          <p>Hacemos que acceder a tus citas médicas sea práctico, adaptándonos a tus horarios y necesidades con total facilidad..</p>
        </div>

        <div  className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
          <b>Personalización</b>
          <p>Una experiencia adaptada a tus necesidades, con opciones diseñadas para cuidar de tu salud de manera única.</p>
        </div>
      </div>
    </div>
  );
};
