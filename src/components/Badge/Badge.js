import React from "react";
import '../../App.scss';
import '../../css/Theme.scss';
import classnames from "classnames"

export default function Badge({children, color, shape}) {
    const classes = classnames(color, shape)
    return <>
        <div className={`badge ${classes}`}>{children}</div>
    </>
}