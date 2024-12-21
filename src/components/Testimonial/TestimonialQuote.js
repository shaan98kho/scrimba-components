import React from "react";
import '../../App.scss';
import '../../css/Theme.scss';
import { TestimonialContext } from "./Testimonial";

export default function TestimonialQuote({children}) {

    return <>
        <q className="testimonial-quote">{children}</q>
    </>
}