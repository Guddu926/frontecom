import { Button } from "antd";
import axios from "axios";
import { HeartOutlined } from '@ant-design/icons'
import { useState, useEffect } from "react";

const Product = () => {
    const [productData, setProductData] = useState([]);

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

    return (
        <div className="w-full h-auto">
            <div className="text">
                <h1 className="font-bold opacity-80 text-center">Our finest selections</h1>
                <center>
                    <div className="w-[80px] h-2 border bg-black"></div>
                </center>
                <center className="mt-5">
                    <span className="mt-5 text-center">From all 300 dresses</span>
                </center>

                <div className="mx-[200px] h-auto mt-10">
                    <div className="grid grid-cols-4 gap-8">
                        {productData.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-full h-10 flex ml-[210px]">


                                </div>
                                <img src={item.imageUrl} alt={item.name} className="w-full h-auto object-cover" />
                                <h3 className="mt-2 font-semibold">{item.name}</h3>
                                <p className="text-gray-500">{item.description}</p>
                                <p className="text-lg font-bold">${item.price}</p>
                                <Button className="bg-black text-white font-bold py-2 px-4  shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300">
                                    Add Card
                                </Button>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
