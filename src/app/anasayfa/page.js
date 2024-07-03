import React from 'react';
import { LuParkingSquare, LuConciergeBell, LuCigaretteOff  } from "react-icons/lu";
import { MdOutlineWaterDrop, MdWifiPassword  } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { IoRestaurantOutline } from "react-icons/io5";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { RiVipDiamondLine } from "react-icons/ri";
import { PiDogBold } from "react-icons/pi";
import ImageSlider from '@/components/slider/page';



function AnaSayfa() {
  return (
    <>
    
    <div className='sticky mt-10 '>
      <h1 className='text-center text-2xl font-bold my-8'>SunFlower Otele Hoşgeldiniz</h1>
      <ImageSlider />  
    </div>

    <div className='container flex flex-col lg:my-10 lg:flex-row mx-auto py-16'>
      <div className='border-border-alt container border-b pb-4 text-center md:pe-8 lg:border-b-0 lg:border-e lg:pb-0 lg:text-start'>
        <h1 className='heading-2xl lg:heading-3xl brand-lx:text-brand pb-6 lg:pb-8 font-bold text-3xl text-cyan-900'>Muğla'da aile dostu sahil konforu</h1>
        <p className='text-text w-full text-base lg:text-lg mx-auto max-w-screen-md lg:mx-0'>
          Huzur Dolu bir kaçamak için Muğla'da, Ege'nin büyüleyici güzelliklerini keşfedin. Aileler için mükemmel olanaklara sahip bu otelde, hem dinlenebilir hem de eğlence dolu aktivitelerle keyifli vakit geçirebilirsiniz. Kapalı havuz ve spor salonu gibi modern olanaklar, her yaşa hitap ederken, spa hizmetleri ve oda servisi ile tatilinizi daha da özel kılabilirsiniz. Muğla'nın doğal güzelliklerini keşfetmek için otelimizin konforlu ve lüks odalarını tercih edin.
        </p>
      </div>

      <div className='w-full pb-8 lg:ps-8'>
        <div className='p-5 pb-0 lg:p-0 '>
          <h1 className='heading-2xl lg:heading-3xl pb-6 md:pb-6  text-2xl font-bold text-cyan-900'>Olanaklarımız</h1>
          <div className='flex justify-center '>
            <ul className='grid gap-x-10 sm:gap-x-20 md:gap-x-8 lg:gap-x-0 grid-cols-2 md:grid-cols-3'>
              <li className='flex pb-2 md:pb-8 aspect-w-1 aspect-h-1 max-w-xs flex-col items-center md:items-start justify-center sm:flex-row sm:justify-start sm:gap-3'>
                <div>
                  <LuParkingSquare className='h-7 w-5' />
                </div>
                <p className='text-center text-base md:pe-4 md:text-start xl:text-lg'>Kapalı Otopark</p>
              </li>

              <li className='flex pb-6 md:pb-8 aspect-w-1 aspect-h-1 max-w-xs flex-col items-center md:items-start justify-center sm:flex-row sm:justify-start sm:gap-3'>
                <div>
                  <LuConciergeBell className='h-7 w-5' />
                </div>
                <p className='text-center text-base md:pe-4 md:text-start xl:text-lg'>Kapı Görevlisi</p>
              </li>
              <li className='flex pb-6 md:pb-8 aspect-w-1 aspect-h-1 max-w-xs flex-col items-center md:items-start justify-center sm:flex-row sm:justify-start sm:gap-3'>
                <div>
                  <MdOutlineWaterDrop className='h-7 w-5' />
                </div>
                <p className='text-center text-base md:pe-4 md:text-start xl:text-lg'>Spa</p>
              </li>

              <li className='flex pb-6 md:pb-8 aspect-w-1 aspect-h-1 max-w-xs flex-col items-center md:items-start justify-center sm:flex-row sm:justify-start sm:gap-3'>
                <div>
                  <IoIosFitness className='h-7 w-5' />
                </div>
                <p className='text-center text-base md:pe-4 md:text-start xl:text-lg'>Spor Salonu</p>
              </li>

              <li className='flex pb-6 md:pb-8 aspect-w-1 aspect-h-1 max-w-xs flex-col items-center md:items-start justify-center sm:flex-row sm:justify-start sm:gap-3'>
                <div>
                  <IoRestaurantOutline className='h-7 w-5' />
                </div>
                <p className='text-center text-base md:pe-4 md:text-start xl:text-lg'>Otel içi restoran</p>
              </li>

              <li className='flex pb-6 md:pb-8 aspect-w-1 aspect-h-1 max-w-xs flex-col items-center md:items-start justify-center sm:flex-row sm:justify-start sm:gap-3'>
                <div>
                  <LiaSwimmingPoolSolid className='h-7 w-5' />
                </div>
                <p className='text-center text-base md:pe-4 md:text-start xl:text-lg'>Kapalı Havuz</p>
              </li>

              <li className='flex pb-6 md:pb-8 aspect-w-1 aspect-h-1 max-w-xs flex-col items-center md:items-start justify-center sm:flex-row sm:justify-start sm:gap-3'>
                <div>
                  <RiVipDiamondLine className='h-7 w-5' />
                </div>
                <p className='text-center text-base md:pe-4 md:text-start xl:text-lg'>VIP Salon</p>
              </li>
            </ul>

          </div>

        </div>

        <div className='flex mt-6 lg:justify-start md:justify-start sm:justify-center'>
          <a href='#' className='btn relative px-6 py-2 border-2 border-gray-800 text-gray-800 rounded-full bg-white hover:bg-gray-800 hover:text-white transition-colors'>
            <span>Tüm Olanaklar</span>
          </a>
        </div>

      </div>



    </div>
    
    <div>
      <h2 className="heading-2xl lg:heading-3xl mb-2 mt-4 text-center font-bold text-3xl text-cyan-900">Odalar</h2>
      <div className="hidden sm:block">
        <section>
          <div className="snap snap-x snap-px-4 snap-mandatory grid-wrapper grid gap-4 overflow-x-auto p-1 sm:w-auto sm:grid-flow-row sm:overflow-x-hidden grid-flow-col sm:grid-cols-5 lg:grid-cols-5 justify-center">
            <div className="hidden sm:block col-span-1"></div> {/* Left empty space */}
            <a href="/odalar" className="border-border-alt group w-64 overflow-y-hidden rounded-lg border sm:w-auto snap snap-start ol-speed col-span-1">
              <div className="bg-bg-alt relative sm:overflow-hidden">
                <div className="absolute flex h-full w-full items-end z-2"></div>
                <div>
                  <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/15/e9/38/junior-suite-bedroom.jpg?w=1200&h=-1&s=1" alt="Misafir Odası"></img>
                </div>
              </div>
              <div className="bg-bg group-hover:text-hilton group-focus:text-hilton w-full p-3 text-left text-xl font-bold capitalize leading-tight group-hover:underline group-focus:underline">Misafir Odası</div>
            </a>

            <a href="/odalar" className="border-border-alt group w-64 overflow-y-hidden rounded-lg border sm:w-auto snap snap-start ol-speed col-span-1">
              <div className="bg-bg-alt relative sm:overflow-hidden">
                <div className="absolute flex h-full w-full items-end z-2"></div>
                <div>
                  <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/15/e9/28/classic-room.jpg?w=1200&h=-1&s=1" alt="Kampanyalı Odalar"></img>
                </div>
              </div>
              <div className="bg-bg group-hover:text-hilton group-focus:text-hilton w-full p-3 text-left text-xl font-bold capitalize leading-tight group-hover:underline group-focus:underline">Kampanyalı Odalar</div>
            </a>

            <a href="/odalar" className="border-border-alt group w-64 overflow-y-hidden rounded-lg border sm:w-auto snap snap-start ol-speed col-span-1">
              <div className="bg-bg-alt relative sm:overflow-hidden">
                <div className="absolute flex h-full w-full items-end z-2"></div>
                <div>
                  <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/15/e9/36/sheraton-suite.jpg?w=1200&h=-1&s=1" alt="Lux Odalar"></img>
                </div>
              </div>
              <div className="bg-bg group-hover:text-hilton group-focus:text-hilton w-full p-3 text-left text-xl font-bold capitalize leading-tight group-hover:underline group-focus:underline">Lux Odalar</div>
            </a>
            <div className="hidden sm:block col-span-1"></div> {/* Right empty space */}
          </div>
        </section>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>

    <div className="container mx-auto p-4 mb-10">
      <h2 className="text-center font-bold text-3xl text-cyan-900 mb-4">Otel Politikaları</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className=" p-4 rounded-full mb-2">
              <LuParkingSquare className='h-12 w-12' alt="otopark"/>
            </div>
            <h3 className="font-bold text-lg">Otopark</h3>
          </div>
          <ul className="mt-4 text-left bg-gray-100 p-4 rounded-lg w-full">
            <li className="flex justify-between"><span>Otopark</span><span>Ücretsiz</span></li>
            <li className="flex justify-between"><span>Vale park hizmeti</span><span>Bulunmaktadır</span></li>
            <li className="flex justify-between"><span>EA şarj dolum noktası</span><span>Bulunmaktadır</span></li>
            <li className="flex justify-between"><span>Güvenli</span><span>Bulunmaktadır</span></li>
            <li className="flex justify-between"><span>Kapalı</span><span>Bulunmaktadır</span></li>
            <li className="flex justify-between"><span>Giriş / Çıkış ayrıcalıkları</span><span>Bulunmamaktadır</span></li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className=" p-4 rounded-full mb-2">
              <PiDogBold className='h-12 w-12' />
            </div>
            <h3 className="font-bold text-lg">Evcil Hayvanlar</h3>
          </div>
          <ul className="mt-4 text-left bg-gray-100 p-4 rounded-lg w-full">
            <li className="flex justify-between"><span>Evcil hayvanlar</span><span>Kabul Edilmemektedir</span></li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className=" p-4 rounded-full mb-2">
              <LuCigaretteOff className='h-12 w-12'/>
            </div>
            <h3 className="font-bold text-lg">Sigara İçilbilen</h3>
          </div>
          <ul className="mt-4 text-left bg-gray-100 p-4 rounded-lg w-full">
            <li className="flex justify-between"><span>İçilebilir alan</span><span>Bulunmaktadır</span></li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className=" p-4 rounded-full mb-2">
              <MdWifiPassword className='h-12 w-12' />
            </div>
            <h3 className="font-bold text-lg">Kablosuz İnternet</h3>
          </div>
          <ul className="mt-4 text-left bg-gray-100 p-4 rounded-lg w-full">
            <li className="flex justify-between"><span>İnternet Adı</span><span>HotelWifi123</span></li>
            <li className="flex justify-between"><span>Şifre</span><span>password123</span></li>
          </ul>
        </div>
      </div>
    </div>
</>



    
  );
}

export default AnaSayfa;

