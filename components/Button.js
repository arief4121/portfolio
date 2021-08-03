import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button className="my-5 py-2 px-8 bg-orange rounded-2xl text-white font-semibold text-xl hover:tracking-widest duration-200 hover:bg-primary">{props.text}</button>
        </div>
    )
}
