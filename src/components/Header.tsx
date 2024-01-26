import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import format from "date-format";
import "./Header.css";
import { basic_url } from '@/stack/stack';
import { message } from 'antd';

function Header() {

    const [serverTime, setServerTime] = useState<number>(0);
    const ref = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        axios.get(`${basic_url}get_server_time`).then((res: AxiosResponse) => {
            setServerTime(new Date(res.data).getTime());
        }).catch(() => {
            message.error("Server Time Error")
        })

        ref.current = setInterval(() => {
            setServerTime(time => time + 1000);
        }, 1000);

        return () => {
            clearInterval(ref.current as ReturnType<typeof setInterval>);
        }

    }, [])

    return (
        <>
            <div className="w-full bg-black fixed z-10">
                <div className="container">
                    <header>
                        <div className="w-full h-[100px] flex flex-row justify-between  items-center">
                            <Link to="/"><div id="header-logo" className="w-[80px] h-[80px] cursor-pointer  bg-[url('/icons/new-logo.png')] bg-no-repeat bg-[length:80px_80px]"></div></Link>
                            <div className="text-2xl text-[white]">
                                {format("hh:mm:ss  dd/MM/yyyy", new Date(serverTime))}
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <div className="w-full h-[100px]"></div>
            <div className="head-setting">
                 <div className="container">
                    <div className="w-full flex justify-center items-center text-black text-xl">
                        @ GOLDEXCG is your gateway to a world of Gold news and financial commentary @
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;