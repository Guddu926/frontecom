const Gallery = () => {
    const data = [
        {
            Title: 'Best set for man',
            dis: 'This month',
            IMAGES: '/images/image1.jpg',
        },
        {
            Title: 'Best set for man',
            dis: 'This month',
            IMAGES: '/images/image1.jpg',
        },
        {
            Title: 'Best set for man',
            dis: 'This month',
            IMAGES: '/images/image1.jpg',
        }
    ];

    return (
        <div className="w-full h-auto py-10">
            <div className="mx-[200px] h-[440px]  p-6 max-w-6xl">
                <div className="grid grid-cols-3 gap-8  ">
                    {data.map((item, index) => (
                        <div key={index} className="text-center cursor-auto group border h-[440px] shadow-md">
                            <div className="overflow-hidden ">
                                <img
                                    src={item.IMAGES}
                                    alt={item.Title}
                                    className="w-[384px] h-[297px] object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <center >
                                <h1 className="mt-4 text-2x1 font-semibold">{item.Title}</h1>
                            </center>


                            <p className="text-gray-500">{item.dis}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
