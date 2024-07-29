const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-700 p-4">
        Galería
      </h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2 ">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg"
            alt="/"
          />
        </div>
        <div>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
