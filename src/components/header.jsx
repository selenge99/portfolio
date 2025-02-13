import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import NavLinks from "./nav-links";
import { useTheme } from "next-themes";

const Header = () => {
  
  const pages = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  const {theme, setTheme} = useTheme();

  return (
    <header className="flex justify-between px-28 mt-4 w-360">
      <div>
        <h1 className="text-3xl text-gray-900 font-black">TOM</h1>
      </div>
      <div className="flex gap-12">
        <NavLinks pages={pages} />
        <div className="flex items-center gap-4">
          { theme === "light" ? (
            <MdOutlineLightMode size={24} 
            className="hover:cursor-pointer" 
            onClick={()=>{
              setTheme("dark");
            }}
             />
            ):(
              <MdDarkMode size={24} className="hover:cursor-pointer" onClick={()=>{
                setTheme("light");
              }}
               /> 
            )}
          
          <button className="bg-black text-white py-[6px] px-4 rounded-2xl dark:bg-white dark:text-black">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
