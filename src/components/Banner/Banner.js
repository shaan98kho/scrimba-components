import React from "react";
import '../../App.scss';
import '../../css/Theme.scss';
import classnames from "classnames"

const BannerContext = React.createContext()
export {BannerContext}

export default function Banner({status, children}) {

    const classes = classnames(status)
    return <>
        <BannerContext.Provider value={{status}}>
            <div className={`banner ${classes}`}>{children}</div>
        </BannerContext.Provider>
    </>
}