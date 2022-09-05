import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="mt-12 flex flex-col items-center gap-8">
        <Featured/>
        <h1 className='font-bold text-xl w-[1024px]'>
          Browse by property type
        </h1>
      </div>
      {/* end homeContainer */}
    </div>
  )
}

export default Home


//App Name: Bijim Reservation 
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com