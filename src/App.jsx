import { useState, useRef ,useEffect } from 'react'
import './App.css'
import { motion } from "motion/react"
import dark from './assets/images/image-about-dark.jpg'
import light from './assets/images/image-about-light.jpg'
import arrow from './assets/images/icon-arrow.svg'
import left from './assets/images/icon-angle-left.svg'
import right from './assets/images/icon-angle-right.svg'
import logo from './assets/images/logo.svg'
import hamburger from './assets/images/icon-hamburger.svg'
import close from './assets/images/icon-close.svg'
import hero1d from './assets/images/desktop-image-hero-1.jpg'
import hero2d from './assets/images/desktop-image-hero-2.jpg'
import hero3d from './assets/images/desktop-image-hero-3.jpg'
import hero1m from './assets/images/mobile-image-hero-1.jpg'
import hero2m from './assets/images/mobile-image-hero-2.jpg'
import hero3m from './assets/images/mobile-image-hero-3.jpg'

const data = [
  {
    imaged: hero1d,
    imagem: hero1m,
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    imaged: hero2d,
    imagem: hero2m,
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imaged: hero3d,
    imagem: hero3m,
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const links = [
  {
    link: "home"
  },
  {
    link: "shop"
  },
  {
    link: "about"
  },
  {
    link: "contact"
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState(false);
  const [direction, setDirection] = useState(1);

  const next =() => {
    setDirection(1);
    setIndex((index + 1) % data.length);
  };

  const prev =() => {
    setDirection(-1);
    setIndex((index - 1 + data.length) % data.length);
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100, 
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100, 
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <div className='w-full h-screen laptop:grid laptop:grid-cols-10 laptop:grid-rows-3 font-LeagueSpartan'>
      <div className='relative laptop:row-start-1 laptop:row-span-2 laptop:col-start-1 laptop:col-span-6 overflow-hidden'>
        {menu ? (
          <div className='w-full h-[12vh] bg-white fixed top-0 flex justify-around items-center z-50'>
            <img src={close} alt="Close" onClick={toggleMenu} />
            {links.map((i) => (
              <a className='text-[20px] font-bold' href="#">{i.link}</a>
            ))}
          </div>
        ) : (
          <div className='w-full fixed top-0 flex items-center pt-10 px-8 laptop:px-10 z-50'>
            <img className='laptop:hidden cursor-pointer' src={hamburger} alt="Menu" onClick={toggleMenu} />
            <img className='mx-auto laptop:mx-0 laptop:me-8' src={logo} alt="Logo" />
            {links.map((i) => (
              <a className='text-white hidden laptop:block mx-5 py-1 border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-500' href="#">{i.link}</a>
            ))}
          </div>
        )}

        <motion.div
          key={index} 
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className=" top-0 left-0 w-full h-full"
        >
          <img
            className="w-full h-full hidden tablet:block"
            src={data[index].imaged}
            alt="Canvas Image"
          />
        </motion.div>

        <motion.div
          key={`mobile-${index}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="top-0 left-0 w-full h-full"
        >
          <img
            className="w-full h-full tablet:hidden"
            src={data[index].imagem}
            alt="Canvas Image"
          />
        </motion.div>
        
        <div className='w-[7rem] laptop:hidden flex absolute bottom-0 right-0'>
          <div className='w-[50%] aspect-square flex justify-center items-center bg-Black hover:bg-VeryDarkGray cursor-pointer' onClick={next}>
            <img src={left} alt="Previous" />
          </div>
          <div className='w-[50%] aspect-square flex justify-center items-center bg-Black hover:bg-VeryDarkGray cursor-pointer' onClick={prev}>
            <img src={right} alt="Next" />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center relative px-8 laptop:px-20 py-14 laptop:row-start-1 laptop:row-span-2 laptop:col-start-7 laptop:col-span-4'>
        <h1 className='text-[35px] laptop:text-[48px] font-bold leading-10'>{data[index].title}</h1>
        <p className='text-VeryDarkGray mt-5 mb-8 font-semibold'>{data[index].text}</p>
        <div className='w-full flex justify-start items-center gap-5'>
          <p className='text-[17px] tracking-[0.7em] font-medium hover:text-DarkGray cursor-pointer'>SHOP NOW</p>
          <img className='w-[45px] h-[15px]' src={arrow} alt="Arrow" />
        </div>
        <div className='w-[9rem] hidden laptop:flex absolute bottom-0 left-0'>
          <div className='w-[50%] aspect-square flex justify-center items-center bg-Black hover:bg-VeryDarkGray cursor-pointer' onClick={next}>
            <img src={left} alt="" />
          </div>
          <div className='w-[50%] aspect-square flex justify-center items-center bg-Black hover:bg-VeryDarkGray cursor-pointer' onClick={prev}>
            <img src={right} alt="" />
          </div>
        </div>
      </div>

      <div className='laptop:row-start-3 laptop:row-span-1 laptop:col-start-1 laptop:col-span-3 overflow-hidden'>
        <img className='w-full h-full' src={dark} alt="Dark Image" />
      </div>

      <div className='flex flex-col justify-center items-center px-7 laptop:px-9 py-9 laptop:row-start-3 laptop:row-span-1 laptop:col-start-4 laptop:col-span-4'>
        <h1 className='w-full mb-3 text-start uppercase tracking-[0.3em] font-semibold laptop:font-bold'>About our furniture</h1>
        <p className='text-DarkGray'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
      </div>

      <div className='laptop:row-start-3 laptop:row-span-1 laptop:col-start-8 laptop:col-span-3'>
        <img className='w-full h-full' src={light} alt="Light Image" /></div> 
    </div>
  )
}

export default App
