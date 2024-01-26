import axios from 'axios';
import { basic_url } from '@/stack/stack';
import { useEffect, useState } from 'react';

const TradingChart = () => {

    const [currentPrice, setCurrentPrice] = useState<number>(0);

    useEffect(() => {
        axios.get(`${basic_url}goldprices`).then((res) => {
            setCurrentPrice(res.data.price);
        })
    }, [])

    useEffect(() => {
        
    }, [])

    return (
        <>
            <div>
                <div className="text-center py-4 mb-12 text-[white] text-4xl" style={{ backgroundColor: 'rgb(29, 67, 84)' }}>
                    PRICE VARIANCE
                </div>

                <div className="p-3 mt-10" style={{ backgroundColor: 'rgb(29, 67, 84)' }}>
                    <div className="flex flex-row justify-between">
                        <div className="flex">
                            <p className="font-bold text-xl text-[white] pr-1">GOLD</p>
                            <p className=" text-gray-400 text-xl">(XAU)</p>     
                        </div>
                        <p className="text-[white] text-xl">${currentPrice}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default TradingChart;