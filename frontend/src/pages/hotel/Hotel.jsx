import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Icons from '../../components/icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Hotel = () => {

  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNum(i)
    setOpen(true)
  }


  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  return (
    <div>
      
      <Navbar />
      <Icons />
     
      <div className='flex justify-center mt-5'>
     
        <div className='w-full max-w-5xl flex flex-col gap-3 relative'>
          <button className='absolute top-[10px] right-0 p-2 bg-blue-800 text-white font-[500] rounded-md hover:bg-blue-500 border-2'>
            Reserve or Book Now
          </button>
          <h1 className='text-3xl font-semibold'>
            Grand Hotel
          </h1>
          {/* end hotel Title by Bimasha */}
          <div className='text-sm flex items-center font-[500] gap-3'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Yew york, USA
            </span>
          </div>
          {/* end hotel address by Bimasha */}
          <span className='font-[500] text-blue-700'>
            Excellent Location - 500m From center
          </span>
          {/* end hotel distance by Bimasha */}

          <span className='font-[500] text-green-700'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error.
          </span>
          {/* end hotel highlight by Bimasha */}
          {open &&
          <div className="sticky top-0 left-0 w-full h-full bg-transparent z-50 items-center justify-center flex ">
           <div>
           <FontAwesomeIcon icon={faCircleXmark} className="absolute top-[20] right-5 text-3xl text-gray-500 cursor-pointer" onClick={()=>{setOpen(false)}}/>
            {/* <FontAwesomeIcon icon={faCircleArrowLeft} className=""/> */}
            <div className='w-full h-full flex justify-center items-center'>
            <img src={photos[slideNum].src} alt="" className='h-[80vh] w-[80%] border-[13px] border-blue-600' />
            </div>
            {/* end slidder wrapper by bimasha */}
            {/* <FontAwesomeIcon icon={faCircleArrowRight}/> */}
           </div>
          </div>
          //end slider by Bimasha 
        }

          <div className='flex flex-wrap justify-between'>
            {photos.map((photo, index) => (
              <div className='w-[33%]'>
                <img onClick={()=>handleOpen(index)} src={photo.src} className="w-full mb-1 object-cover" alt="" />
              </div>
              // end hotel image wrapper by Bimasha
            ))}
          </div>
          {/* end hotel Images by Bimasha */}
          <div className='flex justify-between gap-5 mt-5'>
            <div className='flex-[3]'>
              <h1 className='text-3xl font-semibold mb-5'>
                Stay in the heart of City
              </h1>
              <p className="">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            {/* end hotel details text by Bimasha*/}
            <div className='flex-[1] bg-gray-200 p-4'>
              <h1 className='text-2xl text-gray-600 font-semibold mb-6'>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2 className='mt-4'>
                <b className='font-semibold text-xl'>$945</b> (9 nights)
              </h2>
              <button className='top-[10px] right-0 p-2 mt-2 w-full bg-blue-600 text-white font-[400] rounded-md hover:bg-blue-500 border-2'>Reserve or Book Now!</button>
            </div>
            {/* end hotel details price by Bimasha*/}
          </div>
          {/* end hotel details by Bimasha*/}
        </div>
        {/* end hotel wrapper by Bimasha */}
      </div>
      {/* end container by bimasha */}
      <MailList />
      <center>
        <Footer />
      </center>
    </div>
  )
}

export default Hotel