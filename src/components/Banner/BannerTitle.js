import React from "react";
import '../../App.scss';
import '../../css/Theme.scss';
import { IoWarning } from "react-icons/io5";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { BannerContext } from "./Banner";

export default function BannerTitle({children}) {

    const {status} = React.useContext(BannerContext)
    const iconDisplay = () => {
        switch(status) {
            case "success":
                return <FaCheckCircle/>
            case "warning":
                return <IoWarning/>
            case "error":
                return <RiCloseCircleFill/>
            case "neutral":
                return <FaInfoCircle/>
            default:
                return ""
        }
    }

    return <>
        <h3 className="banner-title">            
            {iconDisplay()} {children}
        </h3>
    </>
}