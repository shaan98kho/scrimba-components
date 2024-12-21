import React from "react";
import { BannerContext } from "./Banner";

export default function BannerContent({children}) {
    const {status} = React.useContext(BannerContext)
    return <>
        <p className="banner-content">{children}</p>
    </>
}