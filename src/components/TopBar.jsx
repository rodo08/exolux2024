import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 py-2">
      <div className="flex items-center">
        <img className="h-10" src="../src/img/re-logo_v2-01.svg" alt="" />
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p>9:00 AM - 10:00 PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">123-456-7890</p>
        </div>
        <a href="#contact">
          {" "}
          <button>Acceder</button>
        </a>
      </div>
    </div>
  );
};
export default TopBar;
