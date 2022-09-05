import React from 'react'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = () => {
    return (
        <>
            <div>
                <div className='bg-gradient-to-r from-[#000080] to-blue-800 relative text-gray-100  justify-center gap-[10px] items-center '>

                    <div className="w-full max-w-[1024px] min-w-fit p-4 mt-0 ml-28 mr-0 mb-6">
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


                    </div>

                    {/* ending headerlist by Bimasha*/}
                </div>
            </div>
        </>
    )
}

export default Icons




//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com