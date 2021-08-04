import React from 'react'
import { Link } from 'react-scroll'

export default function Button(props) {
    return (
        <div className="my-10">
            <Link to="about" smooth={true} className="cursor-pointer py-2 px-8 bg-orange rounded-2xl text-white font-semibold text-xl hover:tracking-widest duration-200 hover:bg-primary">{props.text}</Link>
        </div>
    )
}
