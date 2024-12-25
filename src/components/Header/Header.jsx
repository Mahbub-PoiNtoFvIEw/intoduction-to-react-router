import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [openMenu, setOpenMenu] =useState(false);
    return (
        <nav className="md:flex gap-10 items-center">
            <div className="flex gap-8 items-center">
                <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu === true ? 
                        <IoCloseOutline />
                        :
                        <CiMenuBurger></CiMenuBurger>
                    }
                    
                </div>
                <h2 className="text-4xl font-bold">Nav Bar</h2>
            </div>
            
            <div className={`flex md:flex-row flex-col absolute md:static duration-1000
                    ${openMenu ? 'top-10' : '-top-40'} md:gap-8 gap-2 `}>
                <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : ""
        }>Home</NavLink>
                <NavLink to="/users" className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : ""}>Users</NavLink>
                <NavLink to="/posts" className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : ""}>Posts</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : ""}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : ""}>Contact</NavLink>
            </div>
        </nav>
    );
};

export default Header;