import { BiSearch } from "react-icons/bi";
import Logo from "../assets/whole.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import Modal from "../modals/Modal";
import AuthComponent from "./AuthComponent";

const Navbar = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-400 hidden md:block sticky top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto py-4 px-2">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <img src={Logo} alt="logo" />

          {/* Search Bar */}
          <div className="w-[360px] flex items-center px-4 py-2 rounded-2xl bg-gray-100 gap-4 ">
            <BiSearch size={16} className="text-gray-600" />
            <input
              type="text"
              placeholder="Search for your favourite groups in ATG"
              className="grow text-sm text-gray-700 font-semibold outline-0 border-0"
            />
          </div>

          {/* Account create */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpenAuthModal(true)}
          >
            <p className="font-semibold">
              Create account. <span className="text-blue-800">It's free</span>
            </p>
            <IoMdArrowDropdown size={16} />
          </div>
        </div>

        <Modal isOpen={openAuthModal}>
          <AuthComponent onClose={() => setOpenAuthModal(false)} />
        </Modal>
      </nav>
    </header>
  );
};

export default Navbar;
