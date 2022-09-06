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
            </div>
            {/* end list search by Bimasha */}
        </>
    )
}

export default Search


//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com