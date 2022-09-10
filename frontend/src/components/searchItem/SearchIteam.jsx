import React from 'react'

const SearchIteam = () => {
    return (
        <>
            <div className='border-2 p-3 rounded-md flex justify-between gap-5 mb-5'>
                <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-[200px] object-cover h-[200px] ' />
                {/* end search item image by bimasha */}

                <div className='flex flex-col gap-2 flex-[2]'>
                    <div className='text-xl font-semibold text-blue-900'>
                        Lorem, ipsum dolor.
                    </div>
                    {/* end title by bimasha*/}
                    <span className='text-xs'>
                        Lorem, ipsum dolor.
                    </span>
                    {/* end Distance by bimasha*/}

                    <span className='text-xs bg-green-800 text-white w-[max-content] p-1 rounded-md'>
                        Lorem, ipsum dolor.
                    </span>
                    {/* end Taxi by bimasha*/}

                    <span className='font-xs font-semibold'>
                        Lorem ipsum dolor sit amet.
                    </span>
                    {/* end subtitle by bimasha*/}

                    <span className='text-sm'>
                        Entire Studio ~ 1 BathRoom ~ 1 Room
                    </span>
                    {/* end featured by bimasha*/}

                    <span className='text-xs text-green-800 font-bold'>
                        Free Cancellation
                    </span>
                    {/* end cancel by bimasha*/}

                    <span className='text-xs text-green-800'>
                        Lorem ipsum dolor sit amet consectetur.
                    </span>
                    {/* end sub cancel by bimasha*/}
                </div>
                {/* end des by bimasha */}

                <div className='flex-[1] flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <span className='font-semibold'>
                            Exellent
                        </span>
                        <button className='bg-blue-900 border-2 rounded-sm text-white px-2 font-semibold'>
                            8.9
                        </button>
                    </div>
                    {/* end rating by Bimasha*/}

                    <div className='flex flex-col justify-between text-right gap-2'>
                        <span className='text-2xl'>
                            $134
                        </span>
                        {/* end price by bimasha */}

                        <span className='text-xs text-gray-400'>
                            Includes Taxes and fees
                        </span>
                        {/* end tax by bimasha */}

                        <button className='bg-blue-700 text-white py-1 font-normal rounded-md'>
                            See availability
                        </button>
                        {/* end button by bimasha */}
                    </div>
                    {/* end details Text by Bimasha*/}

                    <div>

                    </div>
                </div>
                {/* end details by bimasha */}
            </div>
            {/* end search item by bimasha */}
        </>
    )
}

export default SearchIteam


//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com