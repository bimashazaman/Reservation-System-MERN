import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'


const Search = (type) => {
    const [openDate, setOpenDate] = useState(false);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
        console.log('fgegrtg')
    }



    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <>
            <div className='h-8 bg-gray-100 border-[4px] border-solid px-5 py-6 absolute bottom-[-25px] border-yellow-800 flex items-center justify-between w-full max-w-[1024px]'>
                <div className='text-gray-500 flex items-center gap-3 '>
                    <FontAwesomeIcon icon={faBed} />
                    <input type="text" name="" placeholder='Where are you going' className="border-none outline-none bg-gray-100" id="" />
                </div>
                {/* end header search Item by Bimasha by Bimasha*/}
                <div className='text-gray-500 flex items-center gap-3 '>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span onClick={() => setOpenDate(!openDate)} className='text-gray-400 cursor-pointer'>
                        {`${format(state[0].startDate, "MM/dd/yyyy")} to ${format(state[0].endDate, "MM/dd/yyyy")}`}
                    </span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        className='absolute top-[50px] z-20'
                    />}
                </div>
                {/* end header search Item by Bimasha */}


                <div className='text-gray-500 flex items-center gap-3 '>
                    <FontAwesomeIcon icon={faPerson} />
                    <span className='text-gray-400 cursor-pointer' onClick={() => setOpenOptions(!openOptions)}>
                        {`${options.adult} adult ~ ${options.children} Children ~ ${options.room} Room`}
                    </span>
                    {openOptions &&
                        <div className='absolute z-20 top-[50px] bg-white text-gray-600 rounded-md shadow-2xl p-3'>
                            <div className='w-[200px] flex justify-between m-3'>
                                <span className='text-[19px] text-gray-500 font-semibold'>
                                    Adult
                                </span>
                                {/* end options text */}
                                <div className="flex items-center gap-[10px] text-lg text-black">
                                    <button className='w-8 h-8 border-[3px] border-blue-900 text-blue-900 cursor-pointer'
                                        onClick={() => handleOption("adult", "d")}
                                        disabled={options.adult <= 1}
                                    >
                                        -
                                    </button>
                                    <span className=''>
                                        {options.adult}
                                    </span>
                                    <button className='w-8 h-8 border-[3px] border-blue-900 text-blue-900 cursor-pointer'
                                        onClick={() => handleOption("adult", "i")}>
                                        +
                                    </button>
                                </div>
                            </div>
                            {/* end adult option */}

                            <div className='w-[200px] flex justify-between m-3'>
                                <span className='text-[19px] text-gray-500 font-semibold'>
                                    Children
                                </span>
                                {/* end options text */}
                                <div className="flex items-center gap-[10px] text-lg text-black">
                                    <button className='w-8 h-8 border-[3px] border-blue-900 text-blue-900 cursor-pointer'
                                        onClick={() => handleOption("children", "d")}
                                        disabled={options.children <= 1}
                                    >
                                        -
                                    </button>
                                    <span className=''>
                                        {options.children}
                                    </span>
                                    <button className='w-8 h-8 border-[3px] border-blue-900 text-blue-900 cursor-pointer'
                                        onClick={() => handleOption("children", "i")}>
                                        +
                                    </button>
                                </div>
                            </div>
                            {/* end Children option */}

                            <div className='w-[200px] flex justify-between m-3'>
                                <span className='text-[19px] text-gray-500 font-semibold'>
                                    Rooms
                                </span>
                                {/* end options text */}
                                <div className="flex items-center gap-[10px] text-lg text-black">
                                    <button className='w-8 h-8 border-[3px] border-blue-900 text-blue-900 cursor-pointer' onClick={() => handleOption("room", "d")}
                                        disabled={options.room <= 1}
                                    >
                                        -
                                    </button>
                                    <span className=''>
                                        {options.room}
                                    </span>
                                    <button className='w-8 h-8 border-[3px] border-blue-900 text-blue-900 cursor-pointer' onClick={() => handleOption("room", "i")}>
                                        +
                                    </button>
                                </div>
                            </div>
                            {/* end Rooms option by Bimasha*/}
                        </div>
                    }
                    {/* end options */}
                </div>
                {/* end header search Item by Bimasha */}

                <div className='text-gray-400 cursor-pointer flex items-center gap-3 '>

                    <button className='bg-blue-900 p-2 text-white cursor-pointer'>
                        Search
                    </button>
                </div>
                {/* end header search Item by Bimasha */}
            </div>
            {/* end header search */}
        </>
    )
}

export default Search

//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com