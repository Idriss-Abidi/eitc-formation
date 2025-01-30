import Image from "next/image";
import React from "react";

const Footer = () => (
  <div className="flex flex-col">
    {/* Footer */}
    <footer className="bg-[#0A192F] text-white text-center p-2 mt-auto">
      {/* <aside> */}
      {/* Logo */}
      <Image
        src="/images/eitcLogo.png"
        alt="App Logo"
        width={100}
        height={100}
        className="m-auto"
      />

      {/* Footer Content */}
      <p className="font-bold text-lg">
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
