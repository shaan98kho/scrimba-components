import React from "react";
import '../../App.scss';
import '../../css/Theme.scss';
import { CardContext } from "./Card";

export default function CardContent({children}) {
    return <>
        <p className="card-content">{children}</p>
    </>
}