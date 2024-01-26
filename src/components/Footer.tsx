import { useState } from "react";
import axios from "axios";
// @ts-ignore
// import StoreBadge from "react-store-badge";
import { message } from "antd";
import { basic_url } from "@/stack/stack";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

function Footer() {

    const [email, setEmail] =useState<string>("");
    const [loginModalV, setLoginModalV] = useState<number>(0);

    const handleSendEmail = async(e:any) => {
        e.preventDefault();
        axios.post(`${basic_url}subscribe_email/${email}`).then(() => {
            message.success("Subscribed your email successfully.")
        }).catch(() => message.error("Subscribe Error") )
    }

    return (
        <div className="w-full bg-black">
            <div className="container">
                <div className="py-5 flex flex-row justify-between items-center">
                    <Link to="/"><div className="w-[80px] h-[80px] cursor-pointer bg-[url('/icons/new-logo.png')] bg-no-repeat bg-[length:80px_80px]"></div></Link>
                </div>
                <hr />
                
                <div className="flex md:flex-row flex-col md:items-center justify-between py-5 gap-5">
                    <p className="text-[white] xl:text-[18px] text-[14px]">Sign up to our newsletter to receive timely market updates and information on product sales and giveaways.</p>
                    <div className="flex items-center xl:text-xl text-base">
                        <form onSubmit={(e) => handleSendEmail(e)}>
                            <label className="text-gray-300 ">Email: </label>
                            <input type="email" className="w-[300px] bg-transparent outline-none border-b border-b-gray-400 text-[white]" onChange={(e) => setEmail(e.target.value)}></input>
                        </form>
                    </div>
                </div>
                <hr/>
                <div className="flex mt-10 gap-10">
                    <Link to="/contactus"><p className="text-[white] text-xl underline hover:scale-105">Contact Us</p></Link>
                    <Link to="/aboutus"><p className="text-[white] text-xl underline hover:scale-105">About US</p></Link>
                </div>
                <div className=" mt-10 mb-10">
                    <h2 className="text-[white] pb-3 text-xl">Important Disclaimers</h2>
                    <p className="text-[white] text-sm">The Content Provided On The Website Includes General News And Publications, Our Personal Analysis And Opinions, And Contents Provided By Third Parties, Which Are Intended For Educational And Research Purposes Only. It Does Not Constitute, And Should Not Be Read As, Any Recommendation Or Advice To Take Any Action Whatsoever, Including To Make Any Investment Or Buy Any Product. When Making Any Financial Decision, You Should Perform Your Own Due Diligence Checks, Apply Your Own Discretion And Consult Your Competent Advisors. The Content Of The Website Is Not Personally Directed To You, And We Does Not Take Into Account Your Financial Situation Or Needs.The Information Contained In This Website Is Not Necessarily Provided In Real-Time Nor Is It Necessarily Accurate. Prices Provided Herein May Be Provided By Market Makers And Not By Exchanges.Any Trading Or Other Financial Decision You Make Shall Be At Your Full Responsibility, And You Must Not Rely On Any Information Provided Through The Website. We Not Provide Any Warranty Regarding Any Of The Information Contained In The Website, And Shall Bear No Responsibility For Any Trading Losses You Might Incur As A Result Of Using Any Information Contained In The Website.The Website May Include Advertisements And Other Promotional Contents, And We May Receive Compensation From Third Parties In Connection With The Content. We Do Not Endorse Any Third Party Or Recommends Using Any Third Party's Services, And Does Not Assume Responsibility For Your Use Of Any Such Third Party's Website Or Services. Our Site And Our Employees, Officers, Subsidiaries And Associates, Are Not Liable Nor Shall They Be Held Liable For Any Loss Or Damage Resulting From Your Use Of The Website Or Reliance On The Information Provided On This Website.
                        This Website Includes Information That May Contain A High Degree Of Risk. You May Need To Seek Professional Advice.</p>
                </div>
                <div className="mb-10 text-[white] text-sm text-center">
                    © 2024 GOLDEXCG.com | VV,LLC Company | All Rights Reserved.
                </div>
            </div>

            <LoginModal visible={loginModalV} setVisible={setLoginModalV}></LoginModal>
        </div>
    )
}
export default Footer;