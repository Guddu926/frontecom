import React from 'react';

const Gallery = () => {
    const data = [
        {
            Title: 'Best set for man',
            dis: 'This month',
            IMAGES: '/images/image1.jpg',
        },
        {
            Title: 'Heading for man',
            dis: 'This month',
            IMAGES: '/images/small.jpg',
        },
        {
            Title: 'Woman dresses',
            dis: 'This month',
            IMAGES: '/images/dsadsa.jpg',
        }
    ];

    return (
        <div className="w-full h-auto py-10">
            <div className="mx-[200px] h-[440px] p-6 max-w-6xl">
                <div className="grid grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <div key={index} className="text-center cursor-pointer  group border h-[440px] shadow-md">
                            <div className="overflow-hidden relative">
                                <img
                                    src={item.IMAGES}
                                    alt={item.Title}
                                    className="w-[384px] h-[297px] object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-red-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
                            </div>
                            <p className="text-gray-500 pt-2">{item.dis}</p>
                            <center>
                                <h1 className="mt-4 w-[150px] text-2x1 font-semibold opacity-65 hover:opacity-100 transition-opacity cursor-pointer">{item.Title}</h1>
                            </center>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
