import React from 'react';

const Footer = ({ isLoggedIn }) => {
  return (
    <footer className="bg-[#24292e] py-8 px-8 text-white text-sm flex md:flex-row md:items-center md:justify-between">
      {isLoggedIn ? (
        <p>You are Logged In</p>
      ) : (
        <p>You are not Logged In</p>
      )}
      <div className="md:order-1 flex flex-col md:flex-row md:gap-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Data retention summary</a>
        <a href="#" className="hover:underline">Get the mobile app</a>
      </div>
    </footer>
  );
};

export default Footer;