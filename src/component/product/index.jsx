import { Button, Pagination } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faHeart, faEye, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    // Fetch data using Axios in a useEffect hook
    useEffect(() => {
        const fetcher = async () => {
            try {
                const response = await axios.get("http://localhost:8080/product");
                setProductData(response.data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        fetcher();
    }, []); // Empty dependency array to run the effect only once

    // Calculate the products to display based on currentPage and pageSize
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentProducts = productData.slice(startIndex, endIndex);

    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    return (
        <div className="w-full h-auto py-10 bg-gray-100">
            <div className="text">
                <h1 className="font-bold text-3xl opacity-80 text-center">Our Finest Selections</h1>
                <center>
                    <div className="w-[80px] h-2 bg-black mt-2"></div>
                </center>
                <center className="mt-5">
                    <span className="text-lg">From all 300 dresses</span>
                </center>

                <div className="mx-[200px] h-auto mt-10">
                    <div className="grid grid-cols-4 gap-8">
                        {currentProducts.map((item, index) => (
                            <div key={index} className="bg-white shadow-lg w-[295px] rounded-lg p-5">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-full h-[373px] object-cover cursor-pointer transform transition duration-500 ease-in-out hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-end p-2 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50">
                                        <div className="text-white flex flex-col space-y-4 mt-[-250px]">
                                            <FontAwesomeIcon icon={faHeart} className="text-xl cursor-pointer" title="Add to Wishlist" />
                                            <FontAwesomeIcon icon={faEye} className="text-xl cursor-pointer" title="Quick view" />
                                            <FontAwesomeIcon icon={faRandom} className="text-xl cursor-pointer" title="Compare" />
                                        </div>
                                    </div>
                                </div>
                                <center>
                                    <h3 className="mt-2 font-semibold text-lg">{item.name}</h3>
                                    <p className="text-gray-500 mt-1">{item.description}</p>
                                    <p className="text-lg font-bold mt-2">${item.price}</p>
                                    <Button
                                        className="mt-4 bg-white text-black py-2 px-4 shadow-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300 w-[155px] h-[40px] flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} className="text-xl mr-2" title="Add to cart" />
                                        Add to Cart
                                    </Button>
                                </center>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={productData.length}
                            onChange={handlePageChange}
                            showSizeChanger
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
