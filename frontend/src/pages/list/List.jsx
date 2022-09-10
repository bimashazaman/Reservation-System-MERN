import React, { useState } from 'react'
import '../../pages/home/home.css'
import Navbar from '../../components/navbar/Navbar';
import Icons from '../../components/icons/Icons';
import Search from './Search.jsx';
import { useLocation } from 'react-router-dom';
import SearchIteam from '../../components/searchItem/SearchIteam';



const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [state, setState] = useState(location.state.state);
  const [options, setOptions] = useState(location.state.options);

  return (
    <>
      <Navbar />
      <Icons />
      <div className='flex justify-center'>
        <div className='w-full max-w-[1024px] flex gap-5 '>
          <Search />
          <div className='flex-[3]'>
            <SearchIteam />
            <SearchIteam />
            <SearchIteam />
            <SearchIteam />
            <SearchIteam />
            <SearchIteam />
            <SearchIteam />
            <SearchIteam />
            <SearchIteam />
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