import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Search from './Search'

const Header = () => {
    return (
        <>

            <div className='bg-gradient-to-r from-[#000080] to-blue-800 relative text-gray-100  justify-center gap-[10px] items-center '>

                <div className="w-full max-w-[1024px] min-w-fit p-4 mt-0 ml-28 mr-0 mb-28">
                    <br />
                    <div className='flex gap-10'>
                        <div className=' text-gray-100 flex justify-center gap-[10px] items-center active:border border p-3 rounded-full text-lg'>
                            <FontAwesomeIcon icon={faBed} /> <span>
                                Stays
                            </span>
                        </div>
                        {/* ending header list items by Bimasha */}

                        <div className=' text-gray-100 flex justify-center gap-[10px] items-center active:border hover:border p-3 rounded-full text-lg'>
                            <FontAwesomeIcon icon={faPlane} /> <span> Flights</span>
                        </div>
                        {/* ending header list items by Bimasha */}

                        <div className=' text-gray-100 flex justify-center gap-[10px] items-center active:border hover:border p-3 rounded-full text-lg'>
                            <FontAwesomeIcon icon={faCar} /> <span>Car</span>
                        </div>
                        {/* ending header list items by Bimasha */}

                        <div className=' text-gray-100 flex justify-center gap-[10px] items-center active:border hover:border p-3 rounded-full text-lg'>
                            <FontAwesomeIcon icon={faTaxi} /> <span>Taxi</span>
                        </div>
                        {/* ending header list items by Bimasha */}
                        <div className=' text-gray-100 flex justify-center gap-[10px] items-center aactive:border hover:border p-3 rounded-full'>
                            <FontAwesomeIcon icon={faTaxi} /> <span>Attraction</span>
                        </div>
                        {/* ending header list items by Bimasha */}
                    </div>
                    {/* end heaader container by Bimasha */}


                    <h1 className="text-4xl mt-20">
                        A lifetime of Discount? It's Genius.
                    </h1>

                    {/* end haeder title  by Bimasha*/}

                    <p className='mt-5 mb-3'>
                        Let's Travel the world together and enjoy the beauty Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, at.
                    </p>
                    {/* end HeaderDes by Bimasha*/}

                    <button className='font-semibold p-3 rounded-md cursor-pointer mb-20 bg-gradient-to-r from-blue-500 to-[#2c2c93] hover:from-pink-500 hover:to-yellow-500'>
                        Sign in/ Register
                    </button>
                    <Search />
                </div>

                {/* ending headerlist by Bimasha*/}
            </div>

            {/* Ending header by Bimasha*/}
        </>
    )
}

export default Header


//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com