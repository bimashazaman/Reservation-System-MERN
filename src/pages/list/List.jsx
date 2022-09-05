import React from 'react'
import '../../pages/home/home.css'
import Navbar from '../../components/navbar/Navbar';
import Icons from '../../components/icons/Icons';
import Search from './Search';


const List = () => {
  return (
    <>
      <Navbar />
      <Icons />
      <div className='flex justify-center'>
        <div className='w-full max-w-[1024px] flex gap-5 '>
          <Search />
          <div className='flex-[3]'>

          </div>
          {/* end list Result by Bimasha */}

        </div>
        {/* end list wrapper by Bimasha */}
      </div>
      {/* end list container by Bimasha */}
    </>
  )
}

export default List


//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com