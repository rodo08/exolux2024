const ContactForm = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 text-4xl">Dudas o consultas?</h2>
      <p className="text-center text-gray-700 py-2">
        Escriba un mensaje, lo contactaremos a la brevedad.
      </p>
      <div className="grid md:grid-cols-2 gap-2">
        <img
          className="w-full p-2 object-cover w-full h-full"
          src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Empresa"
            />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2"
              type="tel"
              placeholder="Numero de Telefono"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              placeholder="Mensaje"
              cols={30}
              rows={10}
            ></textarea>
            <button className="col-span-2 m-2">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
