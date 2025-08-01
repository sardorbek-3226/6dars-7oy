import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div className='w-full  flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-purple-100 px-4'>
      <h1 className='text-5xl md:text-6xl font-bold text-center text-blue-700 mb-6'>
        {user ? `Welcome, ${user.displayName}!` : 'Welcome to the App!'}
      </h1>
      
      {user && (
        <img
          src={user.photoURL}
          alt="Profile"
          className='w-32 h-32 rounded-full shadow-lg border border-gray-300'
        />
      )}

      <p className='mt-6 text-xl text-gray-700 text-center max-w-xl'>
        You have successfully logged in. Enjoy exploring the app!
      </p>

      <button className='mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition'>
        Explore More
      </button>
    </div>
  );
};

export default Home;
