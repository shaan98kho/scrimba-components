import React from "react";
import '../../App.scss';
import '../../css/Theme.scss';
import { IoCloudUploadOutline } from "react-icons/io5";


const CardContext = React.createContext();
export {CardContext}

export default function Card({icon = <IoCloudUploadOutline />, iconPosition="center", iconBackground = "#3F75FE", iconColor="#fff",children}) {


    return <>
        <div className="card">
            <div 
                className={`card-icon ${iconPosition}`}
                style={{
                    backgroundColor: iconBackground,
                    color: iconColor
                }}
            >{icon}</div>
            {children}
        </div>
    </>
}