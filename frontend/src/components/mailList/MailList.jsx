import React from 'react'

const MailList = () => {
    return (
        <>
            <div className='w-full mt-11 bg-gradient-to-r from-blue-800 to-[#000080] gap-5 p-14  text-white flex flex-col items-center'>
                <div className='font-bold text-4xl text-white'>
                    Save money, save time!
                </div>
                {/* end mail tite by bimasha */}

                <span className=''>
                    Signup and we will send you the best deals
                </span>
                {/* end mail description by bimasha */}

                <div className=''>
                    <input className='w-[300px] mr-4 rounded-md h-[50px] p-3 border-none' type="text" placeholder='Your Email' />
                    <button className='h-[50px] bg-blue-700 rounded-xl tex-white cursor-pointer px-2 font-medium'>
                        Subscribe
                    </button>
                </div>
                {/* End mail input container by bimasha*/}
            </div>
            {/* end mail by bimasha */}
        </>
    )
}

export default MailList

//App Name: Bijim Reservation
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com