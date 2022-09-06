import { format } from 'date-fns';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';

const Search = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [state, setState] = useState(location.state.state);
    const [options, setOptions] = useState(location.state.options);
    const [openDate, setOpenDate] = useState(false);

    return (
        <>
            <div className='flex-[1] bg-gray-10 border-2 shadow-xl rounded-sm p-2 sticky top-10'>
                <h1 className='text-2xl text-gray-600 mb-4 font-semibold'>
                    Search
                </h1>
                {/* end list search title by Bimasha */}
                <div className=''>
                    <label htmlFor="">
                        Destination
                    </label>
                    <input type="text" placeholder={destination} className='border-2 my-2 ring-2 outline-none p-1 rounded-sm w-full cursor-pointer' />
                </div>
                {/* end destination by Bimasha */}

                <div className='flex flex-col gap-1 mb-3'>
                    <label htmlFor="">
                        Check-in Date
                    </label>
                    <span className='border-2 my-2 ring-2 outline-none p-1 rounded-sm w-full' onClick={() => setOpenDate(!openDate)}>
                        {`${format(state[0].startDate, "MM/dd/yyyy")} to ${format(state[0].endDate, "MM/dd/yyyy")}`}
                    </span>
                    {openDate &&
                        <DateRange
                            onChange={(item) => setState([
                                item.selection
                            ])}
                            ranges={state}
                            minDate={new Date()}
                        />
                    }
                </div>
                {/* end Check-in Date by Bimasha */}

                <div className=''>
                    <label htmlFor="">
                        Options
                    </label>

                    <div className='p-3'>

                        <div className='flex justify-between mb-3 mt-4 text-gray-900 text-sm'>
                            <span className=''>
                                Min Price- <small>Per night</small>
                            </span>
                            <span>
                                <input className='border-2 ring-2 outline-none text-gray-600 font-semibold w-14' placeholder='100$' type="number" />
                            </span>
                        </div>
                        {/* End Search options by bimasha */}


                        <div className='flex justify-between mb-3 text-gray-900 text-sm'>
                            <span className=''>
                                Max Price -<small>Per night</small>
                            </span>
                            <span>
                                <input className='border-2 ring-2 outline-none text-gray-600 font-semibold w-14' type="number" placeholder='1000$' />
                            </span>
                        </div>
                        {/* End Search options by bimasha */}


                        <div className='flex justify-between mb-3 text-gray-900 text-sm'>
                            <span className='flex justify-between mb-3 text-gray-900 text-sm'>
                                Adult
                            </span>
                            <span>
                                <input className='border-2 ring-2 outline-none text-gray-600 font-semibold w-14' type="number" min={1} placeholder={options.adult} />
                            </span>
                        </div>
                        {/* End Search options by bimasha */}


                        <div className='flex justify-between mb-3 text-gray-900 text-sm'>
                            <span className='flex justify-between mb-3 text-gray-900 text-sm'>
                                Children
                            </span>
                            <span>
                                <input className='border-2 ring-2 outline-none text-gray-600 font-semibold w-14' type="number" min={1} placeholder={options.children} />
                            </span>
                        </div>
                        {/* End Search options by bimasha */}

                        <div className='flex justify-between mb-3 text-gray-900 text-sm'>
                            <span className='flex justify-between mb-3 text-gray-900 text-sm'>
                                Room
                            </span>
                            <span>
                                <input className='border-2 ring-2 outline-none text-gray-600 font-semibold w-14' type="number" min={1} placeholder={options.room} />
                            </span>
                        </div>
                        {/* End Search options by bimasha */}
                    </div>
                    {/* end list options wrapper by Bimasha*/}
                </div>
                {/* end list item by Bimasha*/}
                <button className='p-3 bg-blue-600 w-full text-white font-semibold rounded-sm border-2 cursor-pointer'>
                    Search
                </button>
            </div>
            {/* end list search by Bimasha */}
        </>
    )
}

export default Search


//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com