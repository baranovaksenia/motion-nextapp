import React from 'react';
import Header from './Header';
import Image from 'next/image';
import { motion } from 'framer-motion';

// import variants
import {
  staggerContainer,
  fadeItDown,
  girlAnim,
  boyAnim,
  heroTruckAnim,
  cloudAnim,
} from '../variants';

// import icons
import { CgArrowLongRight } from 'react-icons/cg';

const Hero = ({ headerData, heroData, navData }) => {
  //destructuring heroData
  const { title, boyImg, girlImg, truckImg, btnText, cloud } = heroData;

  return (
    <section className='bg-hero bg-no-repeat  bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80'>
      {/* container */}
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className='container relative mx-auto min-h-[800px] lg:min-h-[950px]'
      >
        {/* header */}
        <div className=''>
          <Header
            headerData={headerData}
            navData={navData}
          />
        </div>

        {/* title */}
        <motion.h1
          className='h1 max-w-[740px] text-white pt-[12rem] mb-[60px]'
          variants={fadeItDown}
        >
          {title}
        </motion.h1>

        {/* button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          variants={fadeItDown}
          className='btn'
        >
          {btnText} <CgArrowLongRight className='text-[30px]' />
        </motion.button>

        {/* cloud img */}
        {/* <motion.div
          className='hidden lg:flex absolute  top-0'
          variants={cloudAnim}
        >
          <Image
            src={cloud}
            width={300}
            height={200}
            alt='girl'
          />
        </motion.div> */}

        {/* girl img */}
        <motion.div
          className='hidden lg:flex absolute bottom-0'
          variants={girlAnim}
        >
          <Image
            src={girlImg}
            width={200}
            height={500}
            alt='girl'
          />
        </motion.div>

        {/* truck image */}
        <motion.div
          variants={heroTruckAnim}
          className='hidden lg:flex absolute -bottom-[25%] -left-[30%]'
        >
          <Image
            src={truckImg}
            width={800}
            height={400}
            alt='truck'
          />
        </motion.div>

        {/* boy img */}
        <motion.div
          className='hidden lg:flex absolute bottom-0 right-[380px] z-10'
          variants={boyAnim}
        >
          <Image
            src={boyImg}
            width={200}
            height={500}
            alt='boy'
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
