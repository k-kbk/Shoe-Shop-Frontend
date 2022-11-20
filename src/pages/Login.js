import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/xing.png';

const Login = memo(() => {
  return (
    <div className='h-screen w-full flex justify-center'>
      <div className='h-full w-2/3 sm:w-3/4 flex flex-col justify-center items-center'>
        <div className='flex flex-row items-center justify-start mb-12 sm:mb-16 w-full max-w-sm'>
          <Link to='/'>
            <img
              src={Logo}
              alt='logo'
              className=' h-10 w-10 sm:h-12 sm:w-12 mr-3'
            />
          </Link>
        </div>
        <form className='w-full max-w-sm' action='/user/login' method='post'>
          <div className='mb-2 sm:mb-4'>
            <label
              htmlFor='id'
              className='block text-base sm:text-lg font-medium leading-6 text-neutral-900'>
              아이디
            </label>
            <input
              id='id'
              className='mt-2 appearance-none text-neutral-800 bg-white rounded-md block w-full px-3 h-10 shadow-sm text-base sm:text-lg focus:outline-none placeholder:text-neutral-400 focus:ring-blue-500 focus:ring-2 ring-1 ring-neutral-200'
              type='text'
            />
          </div>
          <div className='mb-12 sm:mb-16'>
            <label
              htmlFor='pw'
              className='block text-base sm:text-lg font-medium leading-6 text-neutral-800'>
              비밀번호
            </label>
            <input
              id='pw'
              className='mt-2 appearance-none text-neutral-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm text-base sm:text-lg focus:outline-none placeholder:text-neutral-400 focus:ring-blue-500 focus:ring-2 ring-1 ring-neutral-200'
              type='password'
            />
          </div>
          <button className='w-full bg-neutral-800 text-white text-base sm:text-lg font-bold py-3 mb-8 rounded-lg hover:opacity-90'>
            로그인
          </button>
          <div className='flex flex-row justify-center mb-2'>
            <p className='text-neutral-600 text-sm sm:text-base font-medium'>
              아직 회원이 아니신가요?
            </p>
            <Link
              to=''
              className='text-sm sm:text-base text-neutral-900 font-medium underline pl-3 hover:opacity-50'>
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Login;
