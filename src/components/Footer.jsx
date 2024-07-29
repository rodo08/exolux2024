import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 py-8 px-4">
        <div>
          <h6 className="font-bold uppercase pt-2">Servicios</h6>
          <ul>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Soporte</h6>
          <ul>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Empresa</h6>
          <ul>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
            <li className="py-1">Link</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">Suscribase a nuestro boletin</p>
          <p className="py-4">Las ultimas noticias</p>
          <div className="flex flex-col max-w-[1240px] px-2 pt-4 pb-3 mx-auto justify-between sm:flex-row text-center text-gray-500">
            <p className="">2024 Exolux. Todos los derechos reservados</p>
          </div>
          <div className="flex justify-between sm:w-[300px] pt-2 text-2xl">
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
