import React from "react";
import '../../App.scss';
import '../../css/Theme.scss';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { TbBeach } from "react-icons/tb";



const TestimonialContext = React.createContext()
export { TestimonialContext }

export default function Testimonial({profilePic, title, name, children}) {
    return <>
        <TestimonialContext.Provider>
            
            <div className={`testimonial ${profilePic ? "hasPic" : ""}`}>
                {profilePic && <div className="testimonial-pic">
                                    <img src={profilePic}></img>
                                </div>
                }    

                <div className="testimonial-text">
                    {profilePic ? <BiSolidQuoteAltLeft /> : <div className="testimonial-logo"><TbBeach /><span>Work</span><span>cation</span></div>}
                    {children}
                    <div className="testimonial-info">
                        <span className="testimonial-name">{name}</span>
                        <span className="testimonial-title">{title}</span>
                    </div>
                </div>
            </div>
            
        </TestimonialContext.Provider>
    </>
}