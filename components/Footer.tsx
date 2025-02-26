import Image from "next/image";
import React from "react";

const Footer = () => (
  <div className="flex flex-col">
    {/* Footer */}
    <footer className="bg-[#020e20] text-white text-center p-2 mt-auto">
      {/* <aside> */}
      {/* Logo */}
      <Image
        src="/images/eitcLogo.png"
        alt="App Logo"
        width={50}
        height={50}
        className="m-auto"
      />

      {/* Footer Content */}
      <p className="font-bold text-sm">
        ENSIAS IT CLUB
        <br />
        Idriss EL ABIDI
      </p>
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
      {/* </aside> */}
    </footer>
  </div>
);

export default Footer;
