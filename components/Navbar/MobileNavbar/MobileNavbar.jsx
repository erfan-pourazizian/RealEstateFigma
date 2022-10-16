import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-[.10rem] rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-10 w-10 rounded justify-center items-center group bg-[#ff8c1b]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen && "rotate-45 translate-y-2"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-100 "
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen && "-rotate-45 -translate-y-2"
        }`}
      />
    </button>
  );
};

export default MobileNavbar
