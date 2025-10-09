import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";
import phs_logo from "@/assets/image/phs_logo.png";
import uel_logo from "@/assets/image/uel_logo.png";
import { RegisterComp } from "../registerComp";

function HeaderComp() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const navItems = [
    { to: "/", label: "Giải thưởng" },
    { to: "/rules", label: "Thể lệ" },
    { to: "/connect", label: "Liên hệ" },
  ];

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center py-3 px-6 md:px-10 lg:px-[120px] h-[88px]">
        {/* Logo section */}
        <div className="flex items-center gap-3 md:gap-6 h-full">
          <img
            src={phs_logo}
            className="w-[90px] md:w-[110px]"
            alt="PHS logo"
          />
          <Separator
            orientation="vertical"
            className="h-full w-[1px] bg-[#D0D0D0]"
          />
          <img src={uel_logo} className="w-[58px] md:w-[64px]" alt="UEL logo" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 lg:gap-[100px] items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Button đăng ký */}
        <div className="hidden md:flex items-center">
          <Button
            className="bg-[#24723B] text-white cursor-pointer hover:bg-[#24723b9f] rounded-[4px] w-[135px] h-[48px] px-[32px] py-[16px] text-[18px] font-medium"
            onClick={() => setOpenRegister(true)}
          >
            Đăng ký
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <X size={28} className="cursor-pointer" />
          ) : (
            <Menu size={28} className="cursor-pointer" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {openMenu && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) => (isActive ? "active" : "navlink")}
            >
              {item.label}
            </NavLink>
          ))}
          <Button
            className="mt-2 bg-[#24723B] hover:bg-[#24723b9f] rounded-[4px] text-white"
            onClick={() => setOpenRegister(true)}
          >
            Đăng ký
          </Button>
        </div>
      )}
      <RegisterComp open={openRegister} setOpen={setOpenRegister} />
    </header>
  );
}

export default HeaderComp;
