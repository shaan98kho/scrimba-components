import React from "react";
import '../../App.scss';
import '../../css/Theme.scss';

export default function CardTitle({children}) {
    return <>
        <h2 className="card-title">{children}</h2>
    </>
}