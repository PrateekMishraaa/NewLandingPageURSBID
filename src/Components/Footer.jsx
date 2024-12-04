import React from 'react';
import Logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='h-auto w-full bg-[#171b2a] flex flex-col text-white justify-between overflow-hidden'>
        {/* Main content section */}
        <div className='flex flex-col md:flex-row justify-between w-full px-4 py-6 md:px-10 md:py-8'>
          {/* Logo and Contact Information */}
          <div className='flex flex-col w-full md:w-[10%] mb-6 md:mb-0'>
            <img src={Logo} alt='' className='h-20 mx-auto md:mx-0 md:mt-0 mt-4' />
            <p className='text-center md:text-left mt-4 text-xl'>Connecting Dreams To Reality.</p>
            <p className='text-center md:text-left mt-2 text-sm md:text-xl'>Village - Parewpur, Post - Dharshawa, District - Shrawasti, Uttar Pradesh, 271835</p>
            {/* <button className='text-center md:text-left mt-4 text-sm md:text-xl hover:text-yellow-500'>+91 7860413021</button>
            <button className='text-center md:text-left mt-2 text-sm md:text-xl hover:text-yellow-500'>raju800499@gmail.com</button> */}
            <div className='flex justify-center md:justify-start gap-4 mt-6'>
              <button>
                <FaFacebookF size={20} color='blue' />
              </button>
              <button>
                <FaTwitter size={20} color='skyblue' />
              </button>
              <button>
                <FaLinkedinIn size={20} color='blue' />
              </button>
              <button>
                <FaYoutube size={20} color='red' />
              </button>
            </div>
          </div>

          {/* Construction Solutions */}
          <div className='flex flex-col w-full md:w-[30%] mt-6 md:mt-0'>
            <p className='text-center md:text-left text-xl font-monospace'>Construction Solution</p>
            <ul className='mt-4 text-center md:text-left'>
              <li>Excavation Work</li>
              <li>Brick Work</li>
              <li>Concreting Work</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className='flex flex-col w-full md:w-[30%] mt-6 md:mt-0'>
            <h2 className='text-center md:text-left text-xl'>Customer Care</h2>
            <p className='mt-2 text-center md:text-left'>For any queries, feel free to contact us:</p>
            <p className='mt-1 text-center md:text-left'>Phone: +91 9876543210</p>
            <p className='mt-1 text-center md:text-left'>Email: URSBID@gmail.com</p>
            <p className='mt-1 text-center md:text-left'>Available: Mon-Fri, 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='w-full text-center py-4 bg-[#121722]'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} @ Copyright 2024. All Rights Reserved Designed by SKS Tech Solutions PVT LTD
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
