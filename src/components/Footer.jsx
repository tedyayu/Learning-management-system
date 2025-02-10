import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#24292e] py-6 px-8 text-white text-sm flex md:flex-row md:items-center md:justify-between">
        <p>You are not Logged In</p>
      <div className="md:order-1 flex flex-col md:flex-row md:gap-4"> {/* Navigation Links */}
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Data retention summary</a>
        <a href="#" className="hover:underline">Get the mobile app</a>
      </div>

      <div className="md:order-2 mt-4 md:mt-0"> {/* Windows Activation */}
        <span>Activate Windows</span>
        <br />
        <span>Go to Settings to activate Windows.</span>
      </div>
    </footer>
  );
};

export default Footer;