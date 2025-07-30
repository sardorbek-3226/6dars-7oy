import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../app/features/userSlice'; // logout action kerak bo'ladi

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut()); // logOut reducer orqali foydalanuvchini chiqarish
  };

  return (
    <nav className='bg-white shadow-md px-6 py-4 flex items-center justify-between'>
      <div className='text-3xl font-bold text-blue-600'>
        MyApp
      </div>
      <div className='flex items-center gap-4'>
        {user ? (
          <>
            <span className='text-lg font-medium text-gray-700'>
              {user.displayName}
            </span>
            <img
              src={user.photoURL}
              alt='avatar'
              className='w-12 h-12 rounded-full object-cover border'
            />
            <button
              onClick={handleLogout}
              className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition'
            >
              Logout
            </button>
          </>
        ) : (
          <span className='text-gray-500'>Guest</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
