import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const links = [
    { href: 'https://discord.com', icon: <FaDiscord /> },
    { href: 'https://X.com', icon: <FaTwitter />},
    { href: 'https://instagram.com', icon:<FaInstagram />},
    { href: 'https://facebook.com', icon: <FaFacebook />}
  ]
  return (
   <footer className='w-screen bg-violet-300 py-4 text-black'>
    <div className='conatiner mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
      <p className='text-center text-sm md:text-left'>
        &copy; Game 2024. All rights reserved
      </p>
      <div className='flex justify-center gap-4 md:justify-start'>
        {links.map((link, index) => (
          <a key={index} 
             href={link.href} 
             target='_blank' 
             rel='noopener noreferrer' 
             className='text-black trnasition-colors
                duration-500 ease-in-out hover:text-white'
          >
            {link.icon}
          </a>
        ))}
      </div>
      <a href='#privacy-policy' className='text-center text-sm hover:underline mr-5 md:text-right'>
        Privacy Policy
      </a>
    </div>
   </footer>
  )
}

export default Footer