//App Name: Bijim Reservation 
//Author: Bimasha Zaman
//Contact: developerbimasha@gmail.com

const navbar = () => {
  return (
    <>
    <div className="m-0 bg-gradient-to-r from-[#000080] to-blue-800  flex justify-center h-[50px]">
        <div className="w-full max-w-screen-lg text-gray-200 flex items-center justify-between">
            <span className="font-medium">
                BiJim Reservation
            </span>
            <div className="navItems">
                <button className="ml-4 border-none py-1 px-2 rounded-sm cursor-pointer bg-blue-100 text-blue-900 font-semibold hover:bg-white">
                    Register
                </button>
                <button className="ml-4 border-none py-1 px-2 rounded-sm cursor-pointer bg-blue-100 text-blue-900 font-semibold hover:bg-white">
                    Login
                </button>
            </div>
        </div>
    </div>
    </>
  )
}


export default navbar


