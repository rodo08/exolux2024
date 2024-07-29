import Accordion from "./Accordion";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className="max-w-[1140px] m-auto w-full md:flex mt-[-75px] z-10"
      >
        <div className="relative p-4">
          <div>
            {/* <h3 className="absolute z-10 top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold flex flex-col">
              Instalaciones Eléctricas
            </h3> */}
            <img
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"
              src="https://images.pexels.com/photos/4657256/pexels-photo-4657256.jpeg"
              alt="panel electrico"
            />
          </div>

          <div className="p-4 bg-gray-200 rounded-lg">
            <Accordion
              title="Instalaciones Eléctricas"
              details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sit similique impedit dicta accusantium dolorum, harum ad, repudiandae earum quaerat inventore dignissimos, eos corporis necessitatibus quia provident corrupti aut eligendi!"
            />
          </div>
        </div>

        <div className="relative p-4">
          <div>
            {/* <h3 className="absolute z-10 top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
              Automatización y Domótica
            </h3> */}
            <img
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"
              src="https://images.pexels.com/photos/4657256/pexels-photo-4657256.jpeg"
              alt="panel electrico"
            />
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <Accordion
              title="Automatización"
              details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sit similique impedit dicta accusantium dolorum, harum ad, repudiandae earum quaerat inventore dignissimos, eos corporis necessitatibus quia provident corrupti aut eligendi!"
            />
          </div>
        </div>

        <div className="relative p-4">
          <div>
            {/* <h3 className="absolute z-10 top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
              Planos y Normativas
            </h3> */}
            <img
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"
              src="https://images.pexels.com/photos/4657256/pexels-photo-4657256.jpeg"
              alt="panel electrico"
            />
          </div>
          <div className="p-4 bg-gray-200 rounded-lg">
            <Accordion
              title="Planos y Normativas"
              details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sit similique impedit dicta accusantium dolorum, harum ad, repudiandae earum quaerat inventore dignissimos, eos corporis necessitatibus quia provident corrupti aut eligendi!"
            />
          </div>
        </div>

        <div className="relative p-4">
          <div>
            {/* <h3 className="absolute z-10 top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
              Puestas a Tierra
            </h3> */}
            <img
              className="w-full h-full object-cover relative border-4 border-white shadow-lg"
              src="https://images.pexels.com/photos/4657256/pexels-photo-4657256.jpeg"
              alt="panel electrico"
            />
            <div className="p-4 bg-gray-200 rounded-lg">
              <Accordion
                title="Puestas a Tierra"
                details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sit similique impedit dicta accusantium dolorum, harum ad, repudiandae earum quaerat inventore dignissimos, eos corporis necessitatibus quia provident corrupti aut eligendi!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
