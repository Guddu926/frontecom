import React from 'react';
import { Button } from 'antd';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
    const slideData = [
        {
            title: 'KEEP WALKING INTO RIGHT DIRECTIONS',
            DIS: 'YOUR LIFESTYLE PULLS THE TRIGGER',
            IMAGES: '/images/slider1.jpg',
            Button: 'Get GOING NOW'
        },
        {
            title: 'NO. 1, IN E-COMMERCE',
            DIS: 'YOUR LIFESTYLE PULLS THE TRIGGER',
            IMAGES: '/images/slider2.jpg',
            Button: 'Get GOING NOW'
        },
        {
            title: 'KEEP WALKING INTO RIGHT DIRECTIONS',
            DIS: 'YOUR LIFESTYLE PULLS THE TRIGGER',
            IMAGES: '/images/slider1.jpg',
            Button: 'Get GOING NOW'
        },
        {
            title: 'KEEP WALKING INTO RIGHT DIRECTIONS',
            DIS: 'YOUR LIFESTYLE PULLS THE TRIGGER',
            IMAGES: '/images/slider1.jpg',
            Button: 'Get GOING NOW'
        }
    ];

    return (
        <div className='w-full'>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {slideData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-full h-[703px] flex flex-col items-center justify-center bg-gray-200'>
                            <img
                                src={item.IMAGES}
                                alt={item.title}
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute top-40 text-center text-white'>
                                <h1 className='text-[75px]  w-[800px] font-bold'>{item.title}</h1>
                                <p>{item.DIS}</p>
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
