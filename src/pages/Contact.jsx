import { assets } from "../assets_frontend/assets"

export const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTÁCTENOS <span className="text-gray-700 font-semibold">AHORA</span></p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src= {assets.contact_image} alt="Contact" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">NUESTRA OFICINA</p>
          <p className="text-gray-500">Av. Agricultura #640 <br /> José Gálvez Barrenechea  Vila María del Triunfo  Lima-Perú</p>
          <p className="text-gray-500">Tel:(+51)555-0132 <br /> Email:reservatucitamedica@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600">Trabaja con nosotros en Centro Médico José Gálvez</p>
          <p className="text-gray-500">Conozca más sobre nuestros equipos y vacantes</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explorar empleos</button>
        </div>
      </div>
    </div>
  )
}
