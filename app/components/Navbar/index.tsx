'use client';

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BiSolidMoon } from 'react-icons/bi';
import Image from 'next/image';
import Logo from '@/public/assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const navMenu = [
  {
    name: 'Home',
    link: '/#home',
  },
  {
    name: 'About',
    link: '/#link',
  },
  {
    name: 'Skills',
    link: '/#fundamentalSkills',
  },
  {
    name: 'Project',
    link: '/#personalProject',
  },
  {
    name: 'Contact',
    link: '/#contact',
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=" flex items-center justify-between mb-20 py-">
      <div className="flex flex-shrink-0 items-center">
        <div className="text-2xl font-bold text-gray-800 uppercase">Renn</div>
      </div>
      <div className="m-8 flex gap-4 items-center justify-center text-2xl">
        <FaInstagram/>
        <FaLinkedin/>
        <FaGithub/>
      </div>
    </nav>
  );
};

export default Navbar;
