import React from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import { Pagination, Navigation, EffectCreative, Autoplay } from 'swiper/modules';

const Hero = () => {
    const slideData = [
        {
            titleone: 'KEEP WALKING',
            titletwo: 'INTO RIGHT DIRECTIONS',
            DIS: 'YOUR LIFESTYLE PULLS THE TRIGGER',
            IMAGES: '/images/slider1.jpg',
            Button: 'Get GOING NOW'
        },
        {
            title: (
                <span>NO. 1</span>
            ),
            text: 'IN E-COMMERCE',
            DIS: 'BEST PRODUCTS',
            DIS2: 'BEST SHIPPING',
            DIS3: 'BEST CUSTOMER CARE',
            BACKGROUND: 'https://iqit-commerce.com/ps17/modules/revsliderprestashop//uploads/revslider/redstripe.png',
            DIS4: 'THANKS',
            IMAGES: '/images/slider2.jpg'
        },
        {
            title1: (
                <span className='text-black flex text-start'>THE GREATEST</span>
            ),
            title2: <span className='text-black '>SUMMER MIX</span>,
            title3: <span className='tracking-widest mt-10 ml-[-150px]'><span className='text-red-600 font-bold pr-2 opacity-65'><FontAwesomeIcon className='font-black' icon={faPlus} /></span>LOREM IPSUM</span>,
            title4: <span className='tracking-widest pt-1 text-start ml-[-150px] flex text-black'>n<span ><span className='text-red-600 pr-3 opacity-65 m-0 text-xl font-black'><FontAwesomeIcon className='font-black' icon={faPlus} /></span><span>24 H DELIVERY WORLDWIDE</span></span></span>,
            title5: <span className='text-start pt-1 tracking-widest ml-[-150px] flex text-black'>n<span><span className='text-red-600 font-bold pr-2 opacity-65'><FontAwesomeIcon className='font-black' icon={faPlus} /></span><span>GREAT STUFF</span></span></span>,
            title6: <span className='text-start pt-1 tracking-widest flex ml-[-150px] text-black'>n<span><span className='text-red-600 font-bold pr-2 opacity-65'><FontAwesomeIcon className='font-black' icon={faPlus} /></span><span>AWESOME LOOK ON</span></span></span>,
            IMAGES: '/images/img_3.jpg',
            BG: 'https://iqit-commerce.com/ps17/modules/revsliderprestashop//uploads/revslider/redstripe.png',
            BUYNOW: <h1>BUY</h1>,
            NOW: <h1>NOW</h1>
        }
    ];

    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={30}
                effect="creative"
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -200],
                        rotate: [0, 0, -30],
                    },
                    next: {
                        shadow: true,
                        translate: ['100%', 0, 200],
                        rotate: [0, 0, 30],
                    },
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[EffectCreative, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slideData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative w-full h-[703px] flex flex-col items-center justify-center bg-gray-200'>
                            <img
                                src={item.IMAGES}
                                alt={item.title}
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute text-center text-white'>
                                <h1 className='text-[75px] w-[800px] text-center mt-28 font-black'>{item.title}</h1>
                                <h1 className='text-[75px] ml-[-185px] mt-[-60px] text-start font-black'>{item.title2}</h1>
                                <h1 className='text-[75px] ml-20 font-black'>{item.titleone}</h1>
                                <h1 className='text-[75px] text-center font-black'>{item.DISONE}</h1>
                                <h1 className='text-[75px] font-black mt-[-40px]'>{item.titletwo}</h1>
                                <h1 className='text-[75px] w-[800px] font-black'>{item.text}</h1>
                                <p className='text-[33px] font-thin tracking-wide'>{item.DIS}</p>
                                <p className='text-[23px] leading-7 font-thin font-serif'>{item.DIS2}</p>
                                <p className='text-[23px] leading-7 font-thin font-serif'>{item.DIS3}</p>
                                <p className='text-[23px] leading-7 text-start flex text-black font-thin font-serif'>{item.title3}</p>
                                <p className='text-[23px] leading-7 font-thin font-serif'>{item.title4}</p>
                                <p className='text-[23px] leading-7 font-thin font-serif'>{item.title5}</p>
                                <p className='text-[23px] leading-7 font-thin font-serif'>{item.title6}</p>
                                <div className='ml-[-170px] mt-16'>
                                    <img
                                        src={item.BG}
                                        width={300}
                                        height={100}
                                    />
                                </div>
                                <h5 className='flex absolute mt-[-90px] ml-[-100px] font-black'>{item.BUYNOW}</h5>
                                <span className='flex absolute mt-[-80px] text-[9px] ml-[-20px] pt-4'>{item.NOW}</span>
                                <div className='ml-64 mt-[-100px] relative'>
                                    <img
                                        src={item.BACKGROUND}
                                        width={297}
                                        height={80}
                                        alt={item.title}
                                    />
                                </div>
                                <p className='text-[23px] leading-7 font-serif absolute ml-[350px] mt-[-60px] font-black'>{item.DIS4}</p>
                                <Button className="mt-10 bg-red-500 rounded-xl hover:bg-blue-700 text-white font-bold py-2 px-4">
                                    {item.Button}
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
