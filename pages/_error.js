import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();
  return (
    <div className='px-4 py-8'>
      <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image
          src='https://img.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_114360-7933.jpg?w=826&t=st=1662641297~exp=1662641897~hmac=9d991d7a2bfa0caa823d7c6278d5de767c05213376aefcf0afb1c54be7aa9dd2'
          alt='error page'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className='flex flex-col justify-center items-center mt-4'>
        <h2 className='md:text-xl mb-8 font-semibold text-center'>
          Oops... Something went wrong. This page is not found.
        </h2>

        <button
          className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          onClick={() => router.push('/')}
        >
          BACK HOME
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
