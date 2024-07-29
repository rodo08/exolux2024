const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg"
        className="w-full h-full object-cover"
        alt="illumination bulbs"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[50%] w-full md:-[50%] max-w-[600px] h-[contents] flex flex-col text-white p-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-4xl text-center">
            Servicios integrales.
          </h1>
          <img
            className="p-4"
            src="./public/img/re-logo_v2-01.svg"
            alt="exolux logo"
          />
          <p className="text-center">
            Innovación eléctrica de principio a fin. Diseño y montaje experto
            para un futuro más eficiente y seguro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
